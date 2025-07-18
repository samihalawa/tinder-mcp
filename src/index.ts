#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

// Import tool classes
import { AuthTools, LoginWithPhoneSchema, SubmitOTPSchema, LoginWithAppleIdSchema, LoginWithCookiesSchema } from './tools/auth.js';
import { ProfileTools, ProfileSetupSchema } from './tools/profile.js';
import { DiscoveryTools, SwipeSchema, AutoSwipeSchema, ViewProfileSchema } from './tools/discovery.js';
import { MessagingTools, SendMessageSchema, SendEmojiSchema, ShareContactSchema, GetConversationSchema, UnmatchSchema } from './tools/messaging.js';
import { SettingsTools, UpdateSettingsSchema } from './tools/settings.js';

class TinderMCPServer {
  private server: Server;
  private authTools: AuthTools;
  private profileTools: ProfileTools;
  private discoveryTools: DiscoveryTools;
  private messagingTools: MessagingTools;
  private settingsTools: SettingsTools;
  private isAuthenticated: boolean = false;

  constructor() {
    this.server = new Server(
      {
        name: 'tinder-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {}, // CRITICAL: Declare tool capabilities for Smithery
        },
      }
    );

    // Initialize tool classes
    this.authTools = new AuthTools();
    this.profileTools = new ProfileTools();
    this.discoveryTools = new DiscoveryTools();
    this.messagingTools = new MessagingTools();
    this.settingsTools = new SettingsTools();

    this.setupHandlers();
  }

  private setupHandlers() {
    // CRITICAL: List tools WITHOUT requiring authentication (Smithery requirement)
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: this.getToolDefinitions(),
      };
    });

    // Handle tool calls with lazy authentication
    this.server.setRequestHandler(CallToolRequestSchema, async (request: any) => {
      const { name, arguments: args } = request.params;

      try {
        // Lazy authentication - only authenticate when tools are called, not when listed
        if (!this.isAuthenticated && process.env.AUTO_LOGIN === 'true') {
          await this.attemptAutoLogin();
        }

        switch (name) {
          // Authentication tools (no auth required for these)
          case 'tinder_login_phone':
            return await this.handleLoginPhone(args);
          case 'tinder_submit_otp':
            return await this.handleSubmitOTP(args);
          case 'tinder_login_apple_id':
            return await this.handleLoginAppleId(args);
          case 'tinder_login_cookies':
            return await this.handleLoginCookies(args);
          case 'tinder_check_login_status':
            return await this.handleCheckLoginStatus();
          case 'tinder_logout':
            return await this.handleLogout();

          // Profile management tools
          case 'tinder_setup_profile':
            return await this.handleSetupProfile(args);
          case 'tinder_get_profile':
            return await this.handleGetProfile();

          // Discovery and swiping tools
          case 'tinder_swipe':
            return await this.handleSwipe(args);
          case 'tinder_auto_swipe':
            return await this.handleAutoSwipe(args);
          case 'tinder_use_boost':
            return await this.handleUseBoost();
          case 'tinder_view_profile':
            return await this.handleViewProfile(args);
          case 'tinder_rewind':
            return await this.handleRewind();

          // Messaging tools
          case 'tinder_get_matches':
            return await this.handleGetMatches();
          case 'tinder_send_message':
            return await this.handleSendMessage(args);
          case 'tinder_send_emoji':
            return await this.handleSendEmoji(args);
          case 'tinder_share_contact':
            return await this.handleShareContact(args);
          case 'tinder_get_conversation':
            return await this.handleGetConversation(args);
          case 'tinder_unmatch':
            return await this.handleUnmatch(args);

          // Settings tools
          case 'tinder_update_settings':
            return await this.handleUpdateSettings(args);
          case 'tinder_get_settings':
            return await this.handleGetSettings();
          case 'tinder_reset_settings':
            return await this.handleResetSettings();

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error executing ${name}: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  private async attemptAutoLogin(): Promise<void> {
    const loginMethod = process.env.LOGIN_METHOD || 'cookies';
    
    try {
      console.error('🔐 Attempting auto-login...');
      
      if (loginMethod === 'cookies' && process.env.TINDER_COOKIES) {
        const result = await this.authTools.loginWithCookies(process.env.TINDER_COOKIES);
        if (result.success) {
          this.isAuthenticated = true;
          console.error('✅ Auto-login successful with cookies');
        } else {
          console.error('❌ Cookie auto-login failed:', result.message);
        }
      } else if (loginMethod === 'phone' && process.env.TINDER_PHONE) {
        const result = await this.authTools.loginWithPhone({
          phoneNumber: process.env.TINDER_PHONE,
          countryCode: process.env.TINDER_COUNTRY_CODE || '1'
        });
        console.error('📱 Phone login initiated, OTP required');
      }
    } catch (error) {
      console.error('❌ Auto-login failed:', error);
    }
  }

  private getToolDefinitions(): Tool[] {
    return [
      // Authentication tools
      {
        name: 'tinder_login_phone',
        description: 'Login to Tinder using phone number and OTP verification',
        inputSchema: {
          type: 'object',
          properties: {
            phoneNumber: {
              type: 'string',
              description: 'Phone number without country code (e.g., "680821181")',
            },
            countryCode: {
              type: 'string',
              description: 'Country code (e.g., "1" for US, "34" for Spain)',
              default: '1',
            },
          },
          required: ['phoneNumber'],
        },
      },
      {
        name: 'tinder_submit_otp',
        description: 'Submit OTP code received via SMS for phone login',
        inputSchema: {
          type: 'object',
          properties: {
            otpCode: {
              type: 'string',
              description: '6-digit OTP code from SMS',
              pattern: '^\\d{6}$',
            },
          },
          required: ['otpCode'],
        },
      },
      {
        name: 'tinder_login_apple_id',
        description: 'Login to Tinder using Apple ID (alternative authentication method)',
        inputSchema: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
              description: 'Apple ID email address',
            },
            password: {
              type: 'string',
              description: 'Apple ID password',
            },
            twoFactorCode: {
              type: 'string',
              description: '6-digit 2FA code (optional)',
              pattern: '^\\d{6}$',
            },
          },
          required: ['email', 'password'],
        },
      },
      {
        name: 'tinder_login_cookies',
        description: 'Login to Tinder using saved cookies from browser session (fastest method)',
        inputSchema: {
          type: 'object',
          properties: {
            cookies: {
              type: 'string',
              description: 'JSON string of cookies array from browser DevTools (Application > Cookies > tinder.com)',
            },
          },
          required: ['cookies'],
        },
      },
      {
        name: 'tinder_check_login_status',
        description: 'Check if currently logged in to Tinder',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'tinder_logout',
        description: 'Logout from Tinder and clear session',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },

      // Profile management tools
      {
        name: 'tinder_setup_profile',
        description: 'Setup or update Tinder profile with photos, bio, and personal information',
        inputSchema: {
          type: 'object',
          properties: {
            photos: {
              type: 'array',
              items: { type: 'string' },
              description: 'Array of photo file paths to upload',
            },
            bio: {
              type: 'string',
              description: 'Profile bio/description (max 500 characters)',
              maxLength: 500,
            },
            job: {
              type: 'string',
              description: 'Job title',
            },
            company: {
              type: 'string',
              description: 'Company name',
            },
            education: {
              type: 'string',
              description: 'Education level',
            },
            school: {
              type: 'string',
              description: 'School/university name',
            },
            location: {
              type: 'string',
              description: 'Location/city',
            },
            interests: {
              type: 'array',
              items: { type: 'string' },
              description: 'Array of interests (max 5)',
              maxItems: 5,
            },
            languages: {
              type: 'array',
              items: { type: 'string' },
              description: 'Array of languages spoken (max 3)',
              maxItems: 3,
            },
            height: {
              type: 'string',
              description: 'Height in cm (e.g., "180")',
            },
            zodiacSign: {
              type: 'string',
              description: 'Zodiac sign',
            },
            relationshipType: {
              type: 'string',
              description: 'Looking for relationship type',
            },
          },
        },
      },
      {
        name: 'tinder_get_profile',
        description: 'Get current profile information and settings',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },

      // Discovery and swiping tools
      {
        name: 'tinder_swipe',
        description: 'Perform a manual swipe action on the current profile',
        inputSchema: {
          type: 'object',
          properties: {
            action: {
              type: 'string',
              enum: ['like', 'pass', 'superlike'],
              description: 'Swipe action to perform',
            },
          },
          required: ['action'],
        },
      },
      {
        name: 'tinder_auto_swipe',
        description: 'Automatically swipe through multiple profiles with strategic behavior',
        inputSchema: {
          type: 'object',
          properties: {
            count: {
              type: 'number',
              description: 'Number of profiles to swipe (1-100)',
              minimum: 1,
              maximum: 100,
            },
            likeRatio: {
              type: 'number',
              description: 'Ratio of likes vs passes (0.0-1.0, e.g., 0.7 = 70% likes)',
              minimum: 0,
              maximum: 1,
            },
            useSuperLikes: {
              type: 'boolean',
              description: 'Whether to use super likes strategically',
              default: false,
            },
            superLikeRatio: {
              type: 'number',
              description: 'Ratio of super likes vs regular likes (0.0-1.0)',
              minimum: 0,
              maximum: 1,
              default: 0.1,
            },
            delayBetweenSwipes: {
              type: 'number',
              description: 'Delay between swipes in milliseconds (1000-10000)',
              minimum: 1000,
              maximum: 10000,
              default: 3000,
            },
          },
          required: ['count', 'likeRatio'],
        },
      },
      {
        name: 'tinder_use_boost',
        description: 'Activate a Tinder Boost to increase profile visibility for 30 minutes',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'tinder_view_profile',
        description: 'Navigate through photos of the current profile being shown',
        inputSchema: {
          type: 'object',
          properties: {
            direction: {
              type: 'string',
              enum: ['next', 'previous'],
              description: 'Direction to navigate photos',
              default: 'next',
            },
          },
        },
      },
      {
        name: 'tinder_rewind',
        description: 'Rewind the last swipe action (undo last swipe)',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },

      // Messaging tools
      {
        name: 'tinder_get_matches',
        description: 'Get list of current matches with basic information',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'tinder_send_message',
        description: 'Send a text message to a specific match',
        inputSchema: {
          type: 'object',
          properties: {
            matchName: {
              type: 'string',
              description: 'Name of the match to message (must match exactly)',
            },
            message: {
              type: 'string',
              description: 'Message content to send (max 500 characters)',
              maxLength: 500,
            },
          },
          required: ['matchName', 'message'],
        },
      },
      {
        name: 'tinder_send_emoji',
        description: 'Send an emoji reaction to a match',
        inputSchema: {
          type: 'object',
          properties: {
            matchName: {
              type: 'string',
              description: 'Name of the match to send emoji to',
            },
            emoji: {
              type: 'string',
              description: 'Emoji to send (e.g., "🥰", "😍", "❤️")',
            },
          },
          required: ['matchName', 'emoji'],
        },
      },
      {
        name: 'tinder_share_contact',
        description: 'Share contact information (phone/WhatsApp) with a match',
        inputSchema: {
          type: 'object',
          properties: {
            matchName: {
              type: 'string',
              description: 'Name of the match to share contact with',
            },
            contactInfo: {
              type: 'object',
              properties: {
                phoneNumber: {
                  type: 'string',
                  description: 'Phone number to share (without country code)',
                },
                countryCode: {
                  type: 'string',
                  description: 'Country code (e.g., "34" for Spain)',
                },
                type: {
                  type: 'string',
                  enum: ['whatsapp', 'phone'],
                  description: 'Type of contact to share',
                },
              },
              required: ['phoneNumber', 'countryCode', 'type'],
            },
          },
          required: ['matchName', 'contactInfo'],
        },
      },
      {
        name: 'tinder_get_conversation',
        description: 'Get conversation history with a specific match',
        inputSchema: {
          type: 'object',
          properties: {
            matchName: {
              type: 'string',
              description: 'Name of the match to get conversation for',
            },
          },
          required: ['matchName'],
        },
      },
      {
        name: 'tinder_unmatch',
        description: 'Unmatch with a specific person (removes them from matches)',
        inputSchema: {
          type: 'object',
          properties: {
            matchName: {
              type: 'string',
              description: 'Name of the match to unmatch with',
            },
          },
          required: ['matchName'],
        },
      },

      // Settings tools
      {
        name: 'tinder_update_settings',
        description: 'Update Tinder discovery and preference settings',
        inputSchema: {
          type: 'object',
          properties: {
            ageRange: {
              type: 'object',
              properties: {
                min: {
                  type: 'number',
                  minimum: 18,
                  maximum: 100,
                  description: 'Minimum age preference',
                },
                max: {
                  type: 'number',
                  minimum: 18,
                  maximum: 100,
                  description: 'Maximum age preference',
                },
              },
            },
            maxDistance: {
              type: 'number',
              minimum: 1,
              maximum: 160,
              description: 'Maximum distance in km',
            },
            showMe: {
              type: 'string',
              enum: ['men', 'women', 'everyone'],
              description: 'Gender preference to show',
            },
            interestedIn: {
              type: 'string',
              enum: ['men', 'women', 'everyone'],
              description: 'Gender you are interested in',
            },
            globalMode: {
              type: 'boolean',
              description: 'Enable global/passport mode',
            },
            hideAge: {
              type: 'boolean',
              description: 'Hide your age from profile',
            },
            hideDistance: {
              type: 'boolean',
              description: 'Hide distance from profile',
            },
            onlyShowWithPhotos: {
              type: 'boolean',
              description: 'Only show profiles with photos',
            },
            recentlyActive: {
              type: 'boolean',
              description: 'Only show recently active users',
            },
          },
        },
      },
      {
        name: 'tinder_get_settings',
        description: 'Get current Tinder settings and preferences',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'tinder_reset_settings',
        description: 'Reset all settings to default values',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ];
  }

  // Tool handlers (same as before but simplified)
  private async handleLoginPhone(args: any) {
    const validated = LoginWithPhoneSchema.parse(args);
    const result = await this.authTools.loginWithPhone(validated);
    if (result.success) this.isAuthenticated = true;
    return this.formatToolResult(result);
  }

  private async handleSubmitOTP(args: any) {
    const validated = SubmitOTPSchema.parse(args);
    const result = await this.authTools.submitOTP(validated.otpCode);
    if (result.success) this.isAuthenticated = true;
    return this.formatToolResult(result);
  }

  private async handleLoginAppleId(args: any) {
    const validated = LoginWithAppleIdSchema.parse(args);
    const result = await this.authTools.loginWithAppleId(validated);
    if (result.success) this.isAuthenticated = true;
    return this.formatToolResult(result);
  }

  private async handleLoginCookies(args: any) {
    const validated = LoginWithCookiesSchema.parse(args);
    const result = await this.authTools.loginWithCookies(validated.cookies);
    if (result.success) this.isAuthenticated = true;
    return this.formatToolResult(result);
  }

  private async handleCheckLoginStatus() {
    const result = await this.authTools.checkLoginStatus();
    return this.formatToolResult(result);
  }

  private async handleLogout() {
    const result = await this.authTools.logout();
    if (result.success) this.isAuthenticated = false;
    return this.formatToolResult(result);
  }

  // Profile handlers
  private async handleSetupProfile(args: any) {
    const validated = ProfileSetupSchema.parse(args);
    const result = await this.profileTools.setupProfile(validated);
    return this.formatToolResult(result);
  }

  private async handleGetProfile() {
    const result = await this.profileTools.getProfile();
    return this.formatToolResult(result);
  }

  // Discovery handlers
  private async handleSwipe(args: any) {
    const validated = SwipeSchema.parse(args);
    const result = await this.discoveryTools.swipe(validated.action);
    return this.formatToolResult(result);
  }

  private async handleAutoSwipe(args: any) {
    const validated = AutoSwipeSchema.parse(args);
    const result = await this.discoveryTools.autoSwipe(validated);
    return this.formatToolResult(result);
  }

  private async handleUseBoost() {
    const result = await this.discoveryTools.useBoost();
    return this.formatToolResult(result);
  }

  private async handleViewProfile(args: any) {
    const validated = ViewProfileSchema.parse(args);
    const result = await this.discoveryTools.viewProfile(validated.direction);
    return this.formatToolResult(result);
  }

  private async handleRewind() {
    const result = await this.discoveryTools.rewind();
    return this.formatToolResult(result);
  }

  // Messaging handlers
  private async handleGetMatches() {
    const result = await this.messagingTools.getMatches();
    return this.formatToolResult(result);
  }

  private async handleSendMessage(args: any) {
    const validated = SendMessageSchema.parse(args);
    const result = await this.messagingTools.sendMessage(validated.matchName, validated.message);
    return this.formatToolResult(result);
  }

  private async handleSendEmoji(args: any) {
    const validated = SendEmojiSchema.parse(args);
    const result = await this.messagingTools.sendEmoji(validated.matchName, validated.emoji);
    return this.formatToolResult(result);
  }

  private async handleShareContact(args: any) {
    const validated = ShareContactSchema.parse(args);
    const result = await this.messagingTools.shareContact(validated.matchName, validated.contactInfo);
    return this.formatToolResult(result);
  }

  private async handleGetConversation(args: any) {
    const validated = GetConversationSchema.parse(args);
    const result = await this.messagingTools.getConversation(validated.matchName);
    return this.formatToolResult(result);
  }

  private async handleUnmatch(args: any) {
    const validated = UnmatchSchema.parse(args);
    const result = await this.messagingTools.unmatch(validated.matchName);
    return this.formatToolResult(result);
  }

  // Settings handlers
  private async handleUpdateSettings(args: any) {
    const validated = UpdateSettingsSchema.parse(args);
    const result = await this.settingsTools.updateSettings(validated);
    return this.formatToolResult(result);
  }

  private async handleGetSettings() {
    const result = await this.settingsTools.getSettings();
    return this.formatToolResult(result);
  }

  private async handleResetSettings() {
    const result = await this.settingsTools.resetSettings();
    return this.formatToolResult(result);
  }

  private formatToolResult(result: any) {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2),
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Tinder MCP server running on stdio');
    
    // Attempt auto-login if configured
    if (process.env.AUTO_LOGIN === 'true') {
      await this.attemptAutoLogin();
    }
  }

  async cleanup() {
    await this.authTools.cleanup();
    await this.profileTools.cleanup();
    await this.discoveryTools.cleanup();
    await this.messagingTools.cleanup();
    await this.settingsTools.cleanup();
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.error('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.error('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the server
const server = new TinderMCPServer();
server.run().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
