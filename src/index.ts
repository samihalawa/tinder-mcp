#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool
} from "@modelcontextprotocol/sdk/types.js";
import { chromium, Browser, Page } from 'playwright';
import { z } from 'zod';

// Configuration from environment variables
const config = {
  headless: process.env.HEADLESS !== 'false',
  timeout: parseInt(process.env.TIMEOUT || '30000'),
  debug: process.env.DEBUG === 'true',
  tinderCookies: process.env.TINDER_COOKIES || '',
  tinderPhone: process.env.TINDER_PHONE || '',
  tinderCountryCode: process.env.TINDER_COUNTRY_CODE || '1',
  tinderAppleEmail: process.env.TINDER_APPLE_EMAIL || '',
  tinderApplePassword: process.env.TINDER_APPLE_PASSWORD || '',
  autoLogin: process.env.AUTO_LOGIN === 'true',
  loginMethod: process.env.LOGIN_METHOD || 'cookies',
  swipeDelay: parseInt(process.env.SWIPE_DELAY || '3000')
};

// Browser management
let browser: Browser | null = null;
let page: Page | null = null;

const server = new Server({
  name: 'tinder-mcp',
  version: '1.0.0'
}, {
  capabilities: {
    tools: {}
  }
});

// Tool definitions
const TOOLS: Tool[] = [
  {
    name: 'tinder_login_phone',
    description: 'Login to Tinder using phone number and OTP verification',
    inputSchema: {
      type: 'object',
      properties: {
        phoneNumber: { type: 'string', description: 'Phone number without country code (e.g., "680821181")' },
        countryCode: { type: 'string', description: 'Country code (e.g., "34" for Spain)', default: '1' }
      },
      required: ['phoneNumber']
    }
  },
  {
    name: 'tinder_submit_otp',
    description: 'Submit OTP code received via SMS for phone login',
    inputSchema: {
      type: 'object',
      properties: {
        otpCode: { type: 'string', description: '6-digit OTP code from SMS', pattern: '^\\d{6}$' }
      },
      required: ['otpCode']
    }
  },
  {
    name: 'tinder_login_apple_id',
    description: 'Login to Tinder using Apple ID (alternative authentication method)',
    inputSchema: {
      type: 'object',
      properties: {
        email: { type: 'string', description: 'Apple ID email address' },
        password: { type: 'string', description: 'Apple ID password' },
        twoFactorCode: { type: 'string', description: '6-digit 2FA code (optional)', pattern: '^\\d{6}$' }
      },
      required: ['email', 'password']
    }
  },
  {
    name: 'tinder_login_cookies',
    description: 'Login to Tinder using saved cookies from browser session (fastest method)',
    inputSchema: {
      type: 'object',
      properties: {
        cookies: { type: 'string', description: 'JSON string of cookies array from browser DevTools' }
      },
      required: ['cookies']
    }
  },
  {
    name: 'tinder_check_login_status',
    description: 'Check if currently logged in to Tinder',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_logout',
    description: 'Logout from Tinder and clear session',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_setup_profile',
    description: 'Setup or update Tinder profile with photos, bio, and personal information',
    inputSchema: {
      type: 'object',
      properties: {
        photos: { type: 'array', items: { type: 'string' }, description: 'Array of photo file paths to upload' },
        bio: { type: 'string', description: 'Profile bio/description (max 500 characters)', maxLength: 500 },
        job: { type: 'string', description: 'Job title' },
        company: { type: 'string', description: 'Company name' },
        education: { type: 'string', description: 'Education level' },
        school: { type: 'string', description: 'School/university name' },
        location: { type: 'string', description: 'Location/city' },
        interests: { type: 'array', items: { type: 'string' }, description: 'Array of interests (max 5)', maxItems: 5 },
        languages: { type: 'array', items: { type: 'string' }, description: 'Array of languages spoken (max 3)', maxItems: 3 },
        height: { type: 'string', description: 'Height in cm (e.g., "180")' },
        zodiacSign: { type: 'string', description: 'Zodiac sign' },
        relationshipType: { type: 'string', description: 'Looking for relationship type' }
      }
    }
  },
  {
    name: 'tinder_get_profile',
    description: 'Get current profile information and settings',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_swipe',
    description: 'Perform a manual swipe action on the current profile',
    inputSchema: {
      type: 'object',
      properties: {
        action: { type: 'string', enum: ['like', 'pass', 'superlike'], description: 'Swipe action to perform' }
      },
      required: ['action']
    }
  },
  {
    name: 'tinder_auto_swipe',
    description: 'Automatically swipe through multiple profiles with strategic behavior',
    inputSchema: {
      type: 'object',
      properties: {
        count: { type: 'number', minimum: 1, maximum: 100, description: 'Number of profiles to swipe (1-100)' },
        likeRatio: { type: 'number', minimum: 0, maximum: 1, description: 'Ratio of likes vs passes (0.0-1.0)' },
        useSuperLikes: { type: 'boolean', description: 'Whether to use super likes strategically', default: false },
        superLikeRatio: { type: 'number', minimum: 0, maximum: 1, description: 'Ratio of super likes vs regular likes', default: 0.1 },
        delayBetweenSwipes: { type: 'number', minimum: 1000, maximum: 10000, description: 'Delay between swipes in milliseconds', default: 3000 }
      },
      required: ['count', 'likeRatio']
    }
  },
  {
    name: 'tinder_use_boost',
    description: 'Activate a Tinder Boost to increase profile visibility for 30 minutes',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_view_profile',
    description: 'Navigate through photos of the current profile being shown',
    inputSchema: {
      type: 'object',
      properties: {
        direction: { type: 'string', enum: ['next', 'previous'], description: 'Direction to navigate photos', default: 'next' }
      }
    }
  },
  {
    name: 'tinder_rewind',
    description: 'Rewind the last swipe action (undo last swipe)',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_get_matches',
    description: 'Get list of current matches with basic information',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_send_message',
    description: 'Send a text message to a specific match',
    inputSchema: {
      type: 'object',
      properties: {
        matchName: { type: 'string', description: 'Name of the match to message (must match exactly)' },
        message: { type: 'string', description: 'Message content to send (max 500 characters)', maxLength: 500 }
      },
      required: ['matchName', 'message']
    }
  },
  {
    name: 'tinder_send_emoji',
    description: 'Send an emoji reaction to a match',
    inputSchema: {
      type: 'object',
      properties: {
        matchName: { type: 'string', description: 'Name of the match to send emoji to' },
        emoji: { type: 'string', description: 'Emoji to send (e.g., "🥰", "😍", "❤️")' }
      },
      required: ['matchName', 'emoji']
    }
  },
  {
    name: 'tinder_share_contact',
    description: 'Share contact information (phone/WhatsApp) with a match',
    inputSchema: {
      type: 'object',
      properties: {
        matchName: { type: 'string', description: 'Name of the match to share contact with' },
        contactInfo: {
          type: 'object',
          properties: {
            phoneNumber: { type: 'string', description: 'Phone number to share (without country code)' },
            countryCode: { type: 'string', description: 'Country code (e.g., "34" for Spain)' },
            type: { type: 'string', enum: ['whatsapp', 'phone'], description: 'Type of contact to share' }
          },
          required: ['phoneNumber', 'countryCode', 'type']
        }
      },
      required: ['matchName', 'contactInfo']
    }
  },
  {
    name: 'tinder_get_conversation',
    description: 'Get conversation history with a specific match',
    inputSchema: {
      type: 'object',
      properties: {
        matchName: { type: 'string', description: 'Name of the match to get conversation for' }
      },
      required: ['matchName']
    }
  },
  {
    name: 'tinder_unmatch',
    description: 'Unmatch with a specific person (removes them from matches)',
    inputSchema: {
      type: 'object',
      properties: {
        matchName: { type: 'string', description: 'Name of the match to unmatch with' }
      },
      required: ['matchName']
    }
  },
  {
    name: 'tinder_update_settings',
    description: 'Update Tinder discovery and preference settings',
    inputSchema: {
      type: 'object',
      properties: {
        ageRange: {
          type: 'object',
          properties: {
            min: { type: 'number', minimum: 18, maximum: 100, description: 'Minimum age preference' },
            max: { type: 'number', minimum: 18, maximum: 100, description: 'Maximum age preference' }
          }
        },
        maxDistance: { type: 'number', minimum: 1, maximum: 160, description: 'Maximum distance in km' },
        showMe: { type: 'string', enum: ['men', 'women', 'everyone'], description: 'Gender preference to show' },
        interestedIn: { type: 'string', enum: ['men', 'women', 'everyone'], description: 'Gender you are interested in' },
        globalMode: { type: 'boolean', description: 'Enable global/passport mode' },
        hideAge: { type: 'boolean', description: 'Hide your age from profile' },
        hideDistance: { type: 'boolean', description: 'Hide distance from profile' },
        onlyShowWithPhotos: { type: 'boolean', description: 'Only show profiles with photos' },
        recentlyActive: { type: 'boolean', description: 'Only show recently active users' }
      }
    }
  },
  {
    name: 'tinder_get_settings',
    description: 'Get current Tinder settings and preferences',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_reset_settings',
    description: 'Reset all settings to default values',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  }
];

// Browser initialization
async function initBrowser() {
  if (!browser) {
    browser = await chromium.launch({
      headless: config.headless,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }
  if (!page) {
    page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 720 });
  }
  return page;
}

// Tool handlers
async function handleToolCall(name: string, args: any) {
  const currentPage = await initBrowser();
  
  try {
    switch (name) {
      case 'tinder_login_cookies':
        if (args.cookies) {
          const cookies = JSON.parse(args.cookies);
          await currentPage.context().addCookies(cookies);
          await currentPage.goto('https://tinder.com');
          return { success: true, message: 'Cookies loaded successfully' };
        }
        return { success: false, message: 'No cookies provided' };
        
      case 'tinder_check_login_status':
        await currentPage.goto('https://tinder.com');
        await currentPage.waitForTimeout(2000);
        const isLoggedIn = await currentPage.url().includes('app') || 
                          await currentPage.locator('[data-testid="gamepad"]').isVisible().catch(() => false);
        return { success: true, isLoggedIn, currentUrl: currentPage.url() };
        
      default:
        return { 
          success: false, 
          message: `Tool ${name} not yet implemented. This is a working Smithery deployment with browser automation capabilities.`,
          availableTools: TOOLS.map(t => t.name)
        };
    }
  } catch (error) {
    return { 
      success: false, 
      message: `Error in ${name}: ${error instanceof Error ? error.message : String(error)}` 
    };
  }
}

// Set up MCP server handlers
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools: TOOLS };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const result = await handleToolCall(name, args || {});
  
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(result, null, 2)
      }
    ]
  };
});

// Auto-login if configured
if (config.autoLogin && config.tinderCookies) {
  setTimeout(async () => {
    try {
      await handleToolCall('tinder_login_cookies', { cookies: config.tinderCookies });
      console.error('✅ Auto-login completed');
    } catch (error) {
      console.error('❌ Auto-login failed:', error);
    }
  }, 1000);
}

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Tinder MCP server running on stdio');
}

// Cleanup on exit
process.on('SIGINT', async () => {
  if (browser) {
    await browser.close();
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  if (browser) {
    await browser.close();
  }
  process.exit(0);
});

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
