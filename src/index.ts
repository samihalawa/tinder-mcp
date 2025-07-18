import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

// Import tool classes
import { AuthTools } from './tools/auth.js';
import { ProfileTools } from './tools/profile.js';
import { DiscoveryTools } from './tools/discovery.js';
import { MessagingTools } from './tools/messaging.js';
import { SettingsTools } from './tools/settings.js';

// Configuration schema for Smithery
export const configSchema = z.object({
  tinderCookies: z.string().optional().describe("JSON string of Tinder session cookies for automatic authentication"),
  tinderPhone: z.string().optional().describe("Phone number for Tinder login (e.g., '680821181')"),
  tinderCountryCode: z.string().default('1').describe("Country code for phone login (e.g., '34' for Spain)"),
  tinderAppleEmail: z.string().optional().describe("Apple ID email for authentication"),
  tinderApplePassword: z.string().optional().describe("Apple ID password for authentication"),
  headless: z.boolean().default(true).describe("Run browser in headless mode"),
  autoLogin: z.boolean().default(false).describe("Automatically login when server starts"),
  loginMethod: z.enum(['cookies', 'phone', 'apple']).default('cookies').describe("Preferred login method"),
  swipeDelay: z.number().min(1000).max(10000).default(3000).describe("Default delay between swipes in milliseconds"),
  debugMode: z.boolean().default(false).describe("Enable debug logging and screenshots")
});

export default function createTinderServer({ config }: { config: z.infer<typeof configSchema> }) {
  const server = new McpServer({
    name: 'Tinder MCP Server',
    version: '1.0.0'
  });

  // Initialize tool classes
  const authTools = new AuthTools();
  const profileTools = new ProfileTools();
  const discoveryTools = new DiscoveryTools();
  const messagingTools = new MessagingTools();
  const settingsTools = new SettingsTools();

  // Set environment variables from config
  if (config.tinderCookies) process.env.TINDER_COOKIES = config.tinderCookies;
  if (config.tinderPhone) process.env.TINDER_PHONE = config.tinderPhone;
  if (config.tinderCountryCode) process.env.TINDER_COUNTRY_CODE = config.tinderCountryCode;
  if (config.tinderAppleEmail) process.env.TINDER_APPLE_EMAIL = config.tinderAppleEmail;
  if (config.tinderApplePassword) process.env.TINDER_APPLE_PASSWORD = config.tinderApplePassword;
  process.env.HEADLESS = config.headless.toString();
  process.env.AUTO_LOGIN = config.autoLogin.toString();
  process.env.LOGIN_METHOD = config.loginMethod;
  process.env.SWIPE_DELAY = config.swipeDelay.toString();
  process.env.DEBUG_MODE = config.debugMode.toString();

  // Authentication tools
  server.tool(
    'tinder_login_phone',
    'Login to Tinder using phone number and OTP verification',
    {
      phoneNumber: z.string().describe('Phone number without country code (e.g., "680821181")'),
      countryCode: z.string().default('1').describe('Country code (e.g., "34" for Spain)')
    },
    async ({ phoneNumber, countryCode }: { phoneNumber: string; countryCode: string }) => {
      const result = await authTools.loginWithPhone({ phoneNumber, countryCode });
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_submit_otp',
    'Submit OTP code received via SMS for phone login',
    {
      otpCode: z.string().regex(/^\d{6}$/).describe('6-digit OTP code from SMS')
    },
    async ({ otpCode }: { otpCode: string }) => {
      const result = await authTools.submitOTP(otpCode);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_login_apple_id',
    'Login to Tinder using Apple ID (alternative authentication method)',
    {
      email: z.string().email().describe('Apple ID email address'),
      password: z.string().describe('Apple ID password'),
      twoFactorCode: z.string().regex(/^\d{6}$/).optional().describe('6-digit 2FA code (optional)')
    },
    async ({ email, password, twoFactorCode }: { email: string; password: string; twoFactorCode?: string }) => {
      const result = await authTools.loginWithAppleId({ email, password, twoFactorCode });
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_login_cookies',
    'Login to Tinder using saved cookies from browser session (fastest method)',
    {
      cookies: z.string().describe('JSON string of cookies array from browser DevTools')
    },
    async ({ cookies }: { cookies: string }) => {
      const result = await authTools.loginWithCookies(cookies);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_check_login_status',
    'Check if currently logged in to Tinder',
    {},
    async () => {
      const result = await authTools.checkLoginStatus();
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_logout',
    'Logout from Tinder and clear session',
    {},
    async () => {
      const result = await authTools.logout();
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  // Profile management tools
  server.tool(
    'tinder_setup_profile',
    'Setup or update Tinder profile with photos, bio, and personal information',
    {
      photos: z.array(z.string()).optional().describe('Array of photo file paths to upload'),
      bio: z.string().max(500).optional().describe('Profile bio/description (max 500 characters)'),
      job: z.string().optional().describe('Job title'),
      company: z.string().optional().describe('Company name'),
      education: z.string().optional().describe('Education level'),
      school: z.string().optional().describe('School/university name'),
      location: z.string().optional().describe('Location/city'),
      interests: z.array(z.string()).max(5).optional().describe('Array of interests (max 5)'),
      languages: z.array(z.string()).max(3).optional().describe('Array of languages spoken (max 3)'),
      height: z.string().optional().describe('Height in cm (e.g., "180")'),
      zodiacSign: z.string().optional().describe('Zodiac sign'),
      relationshipType: z.string().optional().describe('Looking for relationship type')
    },
    async (params: any) => {
      const result = await profileTools.setupProfile(params);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_get_profile',
    'Get current profile information and settings',
    {},
    async () => {
      const result = await profileTools.getProfile();
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  // Discovery and swiping tools
  server.tool(
    'tinder_swipe',
    'Perform a manual swipe action on the current profile',
    {
      action: z.enum(['like', 'pass', 'superlike']).describe('Swipe action to perform')
    },
    async ({ action }: { action: 'like' | 'pass' | 'superlike' }) => {
      const result = await discoveryTools.swipe(action);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_auto_swipe',
    'Automatically swipe through multiple profiles with strategic behavior',
    {
      count: z.number().min(1).max(100).describe('Number of profiles to swipe (1-100)'),
      likeRatio: z.number().min(0).max(1).describe('Ratio of likes vs passes (0.0-1.0)'),
      useSuperLikes: z.boolean().default(false).describe('Whether to use super likes strategically'),
      superLikeRatio: z.number().min(0).max(1).default(0.1).describe('Ratio of super likes vs regular likes'),
      delayBetweenSwipes: z.number().min(1000).max(10000).default(3000).describe('Delay between swipes in milliseconds')
    },
    async (params: any) => {
      const result = await discoveryTools.autoSwipe(params);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_use_boost',
    'Activate a Tinder Boost to increase profile visibility for 30 minutes',
    {},
    async () => {
      const result = await discoveryTools.useBoost();
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_view_profile',
    'Navigate through photos of the current profile being shown',
    {
      direction: z.enum(['next', 'previous']).default('next').describe('Direction to navigate photos')
    },
    async ({ direction }: { direction: 'next' | 'previous' }) => {
      const result = await discoveryTools.viewProfile(direction);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_rewind',
    'Rewind the last swipe action (undo last swipe)',
    {},
    async () => {
      const result = await discoveryTools.rewind();
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  // Messaging tools
  server.tool(
    'tinder_get_matches',
    'Get list of current matches with basic information',
    {},
    async () => {
      const result = await messagingTools.getMatches();
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_send_message',
    'Send a text message to a specific match',
    {
      matchName: z.string().describe('Name of the match to message (must match exactly)'),
      message: z.string().max(500).describe('Message content to send (max 500 characters)')
    },
    async ({ matchName, message }: { matchName: string; message: string }) => {
      const result = await messagingTools.sendMessage(matchName, message);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_send_emoji',
    'Send an emoji reaction to a match',
    {
      matchName: z.string().describe('Name of the match to send emoji to'),
      emoji: z.string().describe('Emoji to send (e.g., "🥰", "😍", "❤️")')
    },
    async ({ matchName, emoji }: { matchName: string; emoji: string }) => {
      const result = await messagingTools.sendEmoji(matchName, emoji);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_share_contact',
    'Share contact information (phone/WhatsApp) with a match',
    {
      matchName: z.string().describe('Name of the match to share contact with'),
      contactInfo: z.object({
        phoneNumber: z.string().describe('Phone number to share (without country code)'),
        countryCode: z.string().describe('Country code (e.g., "34" for Spain)'),
        type: z.enum(['whatsapp', 'phone']).describe('Type of contact to share')
      })
    },
    async ({ matchName, contactInfo }: { matchName: string; contactInfo: any }) => {
      const result = await messagingTools.shareContact(matchName, contactInfo);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_get_conversation',
    'Get conversation history with a specific match',
    {
      matchName: z.string().describe('Name of the match to get conversation for')
    },
    async ({ matchName }: { matchName: string }) => {
      const result = await messagingTools.getConversation(matchName);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_unmatch',
    'Unmatch with a specific person (removes them from matches)',
    {
      matchName: z.string().describe('Name of the match to unmatch with')
    },
    async ({ matchName }: { matchName: string }) => {
      const result = await messagingTools.unmatch(matchName);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  // Settings tools
  server.tool(
    'tinder_update_settings',
    'Update Tinder discovery and preference settings',
    {
      ageRange: z.object({
        min: z.number().min(18).max(100).describe('Minimum age preference'),
        max: z.number().min(18).max(100).describe('Maximum age preference')
      }).optional(),
      maxDistance: z.number().min(1).max(160).optional().describe('Maximum distance in km'),
      showMe: z.enum(['men', 'women', 'everyone']).optional().describe('Gender preference to show'),
      interestedIn: z.enum(['men', 'women', 'everyone']).optional().describe('Gender you are interested in'),
      globalMode: z.boolean().optional().describe('Enable global/passport mode'),
      hideAge: z.boolean().optional().describe('Hide your age from profile'),
      hideDistance: z.boolean().optional().describe('Hide distance from profile'),
      onlyShowWithPhotos: z.boolean().optional().describe('Only show profiles with photos'),
      recentlyActive: z.boolean().optional().describe('Only show recently active users')
    },
    async (params: any) => {
      const result = await settingsTools.updateSettings(params);
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_get_settings',
    'Get current Tinder settings and preferences',
    {},
    async () => {
      const result = await settingsTools.getSettings();
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'tinder_reset_settings',
    'Reset all settings to default values',
    {},
    async () => {
      const result = await settingsTools.resetSettings();
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  // Auto-login if configured
  if (config.autoLogin && config.tinderCookies) {
    authTools.loginWithCookies(config.tinderCookies).catch(console.error);
  }

  return server.server;
}
