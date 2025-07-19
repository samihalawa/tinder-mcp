import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

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

  // Mock tool implementations for Smithery compatibility
  // Note: Full browser automation requires local deployment with Playwright

  // Authentication tools
  server.tool(
    'tinder_login_phone',
    'Login to Tinder using phone number and OTP verification',
    {
      phoneNumber: z.string().describe('Phone number without country code (e.g., "680821181")'),
      countryCode: z.string().default('1').describe('Country code (e.g., "34" for Spain)')
    },
    async ({ phoneNumber, countryCode }: { phoneNumber: string; countryCode: string }) => {
      return { 
        content: [{ 
          type: 'text', 
          text: JSON.stringify({
            success: false,
            message: "Browser automation requires local deployment. Please use cookie authentication instead.",
            data: { phoneNumber, countryCode }
          }, null, 2) 
        }] 
      };
    }
  );

  server.tool(
    'tinder_submit_otp',
    'Submit OTP code received via SMS for phone login',
    {
      otpCode: z.string().regex(/^\d{6}$/).describe('6-digit OTP code from SMS')
    },
    async ({ otpCode }: { otpCode: string }) => {
      return { 
        content: [{ 
          type: 'text', 
          text: JSON.stringify({
            success: false,
            message: "Browser automation requires local deployment. Please use cookie authentication instead.",
            data: { otpCode }
          }, null, 2) 
        }] 
      };
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
      return { 
        content: [{ 
          type: 'text', 
          text: JSON.stringify({
            success: false,
            message: "Browser automation requires local deployment. Please use cookie authentication instead.",
            data: { email, hasTwoFactor: !!twoFactorCode }
          }, null, 2) 
        }] 
      };
    }
  );

  server.tool(
    'tinder_login_cookies',
    'Login to Tinder using saved cookies from browser session (recommended for Smithery)',
    {
      cookies: z.string().describe('JSON string of cookies array from browser DevTools')
    },
    async ({ cookies }: { cookies: string }) => {
      try {
        const parsedCookies = JSON.parse(cookies);
        return { 
          content: [{ 
            type: 'text', 
            text: JSON.stringify({
              success: true,
              message: "Cookie authentication configured successfully. Note: Full browser automation requires local deployment.",
              data: { 
                cookieCount: parsedCookies.length,
                domains: [...new Set(parsedCookies.map((c: any) => c.domain))],
                note: "For full functionality, deploy locally with Playwright support"
              }
            }, null, 2) 
          }] 
        };
      } catch (error) {
        return { 
          content: [{ 
            type: 'text', 
            text: JSON.stringify({
              success: false,
              message: "Invalid cookie format. Please provide valid JSON array of cookies.",
              error: error instanceof Error ? error.message : String(error)
            }, null, 2) 
          }] 
        };
      }
    }
  );

  server.tool(
    'tinder_check_login_status',
    'Check if currently logged in to Tinder',
    {},
    async () => {
      return { 
        content: [{ 
          type: 'text', 
          text: JSON.stringify({
            success: true,
            message: "Status check available. Full browser automation requires local deployment.",
            data: { 
              isLoggedIn: config.tinderCookies ? true : false,
              authMethod: config.tinderCookies ? "cookies" : "none",
              note: "Deploy locally for full browser automation"
            }
          }, null, 2) 
        }] 
      };
    }
  );

  server.tool(
    'tinder_logout',
    'Logout from Tinder and clear session',
    {},
    async () => {
      return { 
        content: [{ 
          type: 'text', 
          text: JSON.stringify({
            success: true,
            message: "Logout functionality available with local deployment.",
            data: { note: "Deploy locally for full browser automation" }
          }, null, 2) 
        }] 
      };
    }
  );

  // Add all other tools with similar mock implementations
  const mockTools = [
    'tinder_setup_profile', 'tinder_get_profile', 'tinder_swipe', 'tinder_auto_swipe',
    'tinder_use_boost', 'tinder_view_profile', 'tinder_rewind', 'tinder_get_matches',
    'tinder_send_message', 'tinder_send_emoji', 'tinder_share_contact', 
    'tinder_get_conversation', 'tinder_unmatch', 'tinder_update_settings',
    'tinder_get_settings', 'tinder_reset_settings'
  ];

  mockTools.forEach(toolName => {
    server.tool(
      toolName,
      `${toolName.replace('tinder_', '').replace('_', ' ')} - Full functionality requires local deployment`,
      {},
      async (params: any) => {
        return { 
          content: [{ 
            type: 'text', 
            text: JSON.stringify({
              success: false,
              message: "This tool requires browser automation. Please deploy locally with Playwright for full functionality.",
              tool: toolName,
              params,
              note: "Smithery deployment supports configuration and cookie authentication only"
            }, null, 2) 
          }] 
        };
      }
    );
  });

  return server.server;
}
