#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool
} from "@modelcontextprotocol/sdk/types.js";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import all tool classes
import { AuthTools } from './tools/auth.js';
import { ProfileTools } from './tools/profile.js';
import { DiscoveryTools } from './tools/discovery.js';
import { MessagingTools } from './tools/messaging.js';
import { SettingsTools } from './tools/settings.js';

// Configuration from environment variables
const config = {
  headless: process.env.HEADLESS !== 'false',
  timeout: parseInt(process.env.TIMEOUT || '30000'),
  debug: process.env.DEBUG === 'true',
  swipeDelay: parseInt(process.env.SWIPE_DELAY || '3000'),
  autoLogin: process.env.AUTO_LOGIN === 'true',
  loginMethod: process.env.LOGIN_METHOD || 'cookies',
  tinderCookies: process.env.TINDER_COOKIES || '',
  tinderPhone: process.env.TINDER_PHONE || '',
  tinderCountryCode: process.env.TINDER_COUNTRY_CODE || '1',
};

// Initialize tool instances
const authTools = new AuthTools();
const profileTools = new ProfileTools();
const discoveryTools = new DiscoveryTools();
const messagingTools = new MessagingTools();
const settingsTools = new SettingsTools();

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
        useSuperLikes: { type: 'boolean', description: 'Whether to use super likes strategically' },
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

// Auto-login function
async function performAutoLogin(): Promise<void> {
  if (!config.autoLogin) return;

  try {
    console.error('Performing auto-login...');
    
    if (config.loginMethod === 'cookies' && config.tinderCookies) {
      const result = await authTools.loginWithCookies(config.tinderCookies);
      if (result.success) {
        console.error('Auto-login with cookies successful');
      } else {
        console.error('Auto-login with cookies failed:', result.message);
      }
    } else if (config.loginMethod === 'phone' && config.tinderPhone) {
      const result = await authTools.loginWithPhone({
        phoneNumber: config.tinderPhone,
        countryCode: config.tinderCountryCode
      });
      if (result.success) {
        console.error('Phone login initiated - OTP required');
      } else {
        console.error('Phone login failed:', result.message);
      }
    }
  } catch (error) {
    console.error('Auto-login error:', error);
  }
}

// Tool result formatter
function formatToolResult(result: any) {
  if (result.success !== undefined) {
    return {
      content: [{
        type: 'text',
        text: result.success 
          ? `✅ ${result.message}${result.data ? '\n\nData: ' + JSON.stringify(result.data, null, 2) : ''}`
          : `❌ ${result.message}${result.error ? '\n\nError: ' + JSON.stringify(result.error, null, 2) : ''}`
      }],
      isError: !result.success
    };
  }
  
  return {
    content: [{
      type: 'text',
      text: typeof result === 'string' ? result : JSON.stringify(result, null, 2)
    }]
  };
}

// Request handlers
server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  try {
    let result;
    
    switch (name) {
      // Authentication tools
      case 'tinder_login_cookies':
        result = await authTools.loginWithCookies((args as any)?.cookies || '');
        break;
      case 'tinder_login_phone':
        result = await authTools.loginWithPhone(args as any || { phoneNumber: '', countryCode: '1' });
        break;
      case 'tinder_submit_otp':
        result = await authTools.submitOTP((args as any)?.otpCode || '');
        break;
      case 'tinder_login_apple_id':
        result = await authTools.loginWithAppleId(args as any || { email: '', password: '' });
        break;
      case 'tinder_check_login_status':
        result = await authTools.checkLoginStatus();
        break;
      case 'tinder_logout':
        result = await authTools.logout();
        break;

      // Profile tools
      case 'tinder_setup_profile':
        result = await profileTools.setupProfile(args as any || {});
        break;
      case 'tinder_get_profile':
        result = await profileTools.getProfile();
        break;

      // Discovery tools
      case 'tinder_swipe':
        result = await discoveryTools.swipe((args as any)?.action as 'like' | 'pass' | 'superlike');
        break;
      case 'tinder_auto_swipe':
        const autoSwipeArgs = args as any || {};
        result = await discoveryTools.autoSwipe({
          count: autoSwipeArgs.count || 1,
          likeRatio: autoSwipeArgs.likeRatio || 0.5,
          useSuperLikes: autoSwipeArgs.useSuperLikes || false,
          superLikeRatio: autoSwipeArgs.superLikeRatio || 0.1,
          delayBetweenSwipes: autoSwipeArgs.delayBetweenSwipes || 3000
        });
        break;
      case 'tinder_use_boost':
        result = await discoveryTools.useBoost();
        break;
      case 'tinder_view_profile':
        result = await discoveryTools.viewProfile((args as any)?.direction as 'next' | 'previous' || 'next');
        break;
      case 'tinder_rewind':
        result = await discoveryTools.rewind();
        break;

      // Messaging tools
      case 'tinder_get_matches':
        result = await messagingTools.getMatches();
        break;
      case 'tinder_send_message':
        result = await messagingTools.sendMessage((args as any)?.matchName || '', (args as any)?.message || '');
        break;
      case 'tinder_send_emoji':
        result = await messagingTools.sendEmoji((args as any)?.matchName || '', (args as any)?.emoji || '');
        break;
      case 'tinder_share_contact':
        result = await messagingTools.shareContact((args as any)?.matchName || '', (args as any)?.contactInfo || {});
        break;
      case 'tinder_get_conversation':
        result = await messagingTools.getConversation((args as any)?.matchName || '');
        break;
      case 'tinder_unmatch':
        result = await messagingTools.unmatch((args as any)?.matchName || '');
        break;

      // Settings tools
      case 'tinder_update_settings':
        result = await settingsTools.updateSettings(args as any || {});
        break;
      case 'tinder_get_settings':
        result = await settingsTools.getSettings();
        break;
      case 'tinder_reset_settings':
        result = await settingsTools.resetSettings();
        break;

      default:
        result = {
          success: false,
          message: `Unknown tool: ${name}`,
          error: {
            code: 'UNKNOWN_TOOL',
            message: `Tool '${name}' is not implemented`,
            recoverable: false
          }
        };
    }
    
    return formatToolResult(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return formatToolResult({
      success: false,
      message: `Error executing ${name}: ${errorMessage}`,
      error: {
        code: 'EXECUTION_ERROR',
        message: errorMessage,
        recoverable: true
      }
    });
  }
});

// Cleanup function
async function cleanup() {
  try {
    await authTools.cleanup();
    await profileTools.cleanup();
    await discoveryTools.cleanup();
    await messagingTools.cleanup();
    await settingsTools.cleanup();
  } catch (error) {
    console.error('Cleanup error:', error);
  }
}

// Cleanup on exit
process.on('SIGINT', async () => {
  await cleanup();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await cleanup();
  process.exit(0);
});

process.on('uncaughtException', async (error) => {
  console.error('Uncaught exception:', error);
  await cleanup();
  process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
  console.error('Unhandled rejection at:', promise, 'reason:', reason);
  await cleanup();
  process.exit(1);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  if (config.debug) {
    console.error('🚀 Tinder MCP server running in debug mode');
    console.error('📋 Available tools:', TOOLS.length);
    console.error('🔧 Config:', {
      headless: config.headless,
      autoLogin: config.autoLogin,
      loginMethod: config.loginMethod,
      hasCookies: !!config.tinderCookies,
      hasPhone: !!config.tinderPhone
    });
  } else {
    console.error('🚀 Tinder MCP server running');
  }

  // Perform auto-login if configured
  if (config.autoLogin) {
    setTimeout(performAutoLogin, 1000); // Delay to ensure server is ready
  }
}

main().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
