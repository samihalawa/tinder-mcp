import { z } from 'zod';
import { TinderSelectors } from '../utils/selectors.js';
import { BrowserManager } from '../utils/browser.js';
import { LoginCredentials, TinderToolResult, BrowserContext } from '../types/tinder.js';

export class AuthTools {
  private browserManager: BrowserManager;
  private browserContext: BrowserContext | null = null;

  constructor() {
    this.browserManager = new BrowserManager();
  }

  async initializeBrowser(): Promise<void> {
    if (!this.browserContext) {
      const session = await this.browserManager.loadSession();
      this.browserContext = await this.browserManager.initialize(session || undefined);
    }
  }

  async loginWithCookies(cookiesJson: string): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      const { page, context } = this.browserContext!;

      // Parse cookies from JSON string
      let cookies;
      try {
        cookies = JSON.parse(cookiesJson);
      } catch (error) {
        return {
          success: false,
          message: 'Invalid cookies JSON format',
          error: {
            code: 'INVALID_COOKIES_FORMAT',
            message: 'Cookies must be valid JSON array',
            recoverable: false,
          },
        };
      }

      // Navigate to Tinder first
      await this.browserManager.navigateToTinder();
      await this.browserManager.waitForStability();

      // Add cookies to the browser context
      await context.addCookies(cookies);

      // Refresh the page to apply cookies
      await page.reload();
      await this.browserManager.waitForStability();

      // Check if login was successful
      const isLoggedIn = await this.browserManager.isLoggedIn();
      
      if (isLoggedIn) {
        // Save the session for future use
        await this.browserManager.saveSession();
        
        return {
          success: true,
          message: 'Successfully logged in using cookies',
          data: { 
            loginMethod: 'cookies',
            cookiesCount: cookies.length,
            timestamp: new Date().toISOString()
          },
        };
      } else {
        return {
          success: false,
          message: 'Cookie login failed - cookies may be expired or invalid',
          error: {
            code: 'COOKIE_LOGIN_FAILED',
            message: 'Unable to authenticate with provided cookies',
            recoverable: true,
          },
        };
      }
    } catch (error) {
      return {
        success: false,
        message: `Cookie login failed: ${error instanceof Error ? error.message : String(error)}`,
        error: {
          code: 'COOKIE_LOGIN_ERROR',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async loginWithPhone(credentials: LoginCredentials): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      const { page } = this.browserContext!;

      // Navigate to Tinder
      await this.browserManager.navigateToTinder();
      await this.browserManager.waitForStability();

      // Check if already logged in
      if (await this.browserManager.isLoggedIn()) {
        return {
          success: true,
          message: 'Already logged in to Tinder',
          data: { alreadyLoggedIn: true },
        };
      }

      // Click login button
      await TinderSelectors.clickElement(page, [
        'button:has-text("Log in")',
        'div.c9iqosj:has-text("Log in")',
        'a:has-text("Log in")',
        'span.P\\(0\\)', // From recordings
      ]);

      await this.browserManager.waitForStability();

      // Select phone login option
      await TinderSelectors.clickElement(page, [
        'div:has-text("Log in with phone")',
        'div:nth-of-type(3) div.lxn9zzn > div > div', // From recordings
        'button:has-text("Phone")',
        'button:has-text("Continue with Phone Number")',
        'div.lxn9zzn:has-text("Log in with phone")',
      ]);

      await this.browserManager.waitForStability();

      // Handle country code selection
      if (credentials.countryCode && credentials.countryCode !== '1') {
        await TinderSelectors.clickElement(page, [
          TinderSelectors.AUTH.COUNTRY_SELECTOR,
          'div.Bdrsbstart\\(0\\)\\!', // From recordings
        ]);

        await this.browserManager.waitForStability();

        // Search for country
        const countrySearchSelectors = [
          TinderSelectors.AUTH.COUNTRY_SEARCH,
          'input[placeholder*="Search"]',
          'input', // From recordings
        ];

        await TinderSelectors.fillElement(page, countrySearchSelectors, credentials.countryCode);
        await page.keyboard.press('Enter');

        await this.browserManager.waitForStability();

        // Select the country
        await TinderSelectors.clickElement(page, [
          `button:has-text("+${credentials.countryCode}")`,
          `div:has-text("+${credentials.countryCode}")`,
          'div.H\\(255px\\)--ml button', // From recordings
        ]);
      }

      // Enter phone number
      await TinderSelectors.fillElement(page, [
        TinderSelectors.AUTH.PHONE_INPUT,
        '#phone_number', // From recordings
      ], credentials.phoneNumber);

      await this.browserManager.waitForStability();

      // Click continue/login button
      await TinderSelectors.clickElement(page, [
        TinderSelectors.AUTH.LOGIN_BUTTON,
        '#o787701392 > div > div > div.Ta\\(c\\) > div', // From recordings
        'button:has-text("Continue")',
      ]);

      await this.browserManager.waitForStability();

      return {
        success: true,
        message: 'Phone number submitted successfully. Please check SMS for OTP.',
        data: {
          phoneNumber: credentials.phoneNumber,
          countryCode: credentials.countryCode,
          nextStep: 'submitOTP',
        },
      };
    } catch (error) {
      return {
        success: false,
        message: `Phone login failed: ${error instanceof Error ? error.message : String(error)}`,
        error: {
          code: 'LOGIN_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async submitOTP(otpCode: string): Promise<TinderToolResult> {
    try {
      if (!this.browserContext) {
        throw new Error('Browser not initialized. Please login with phone first.');
      }

      const { page } = this.browserContext;

      // Wait for OTP input fields
      await this.browserManager.waitForStability();

      // Handle different OTP input formats
      const otpDigits = otpCode.split('');
      
      // Try individual digit inputs first (from recordings)
      try {
        for (let i = 0; i < otpDigits.length; i++) {
          const digitSelectors = [
            `input:nth-of-type(${i + 1})`,
            `#content input:nth-of-type(${i + 1})`, // From recordings
            TinderSelectors.buildOTPSelector(i + 1)[0],
          ];
          
          await TinderSelectors.fillElement(page, digitSelectors, otpDigits[i]);
          await page.waitForTimeout(200); // Small delay between digits
        }
      } catch (error) {
        // Fallback to single input field
        await TinderSelectors.fillElement(page, [
          TinderSelectors.AUTH.OTP_CONTAINER,
          'div.D\\(f\\) > div:nth-of-type(1) input', // From recordings
          'input[type="text"]',
        ], otpCode);
      }

      await this.browserManager.waitForStability();

      // Submit OTP
      await TinderSelectors.clickElement(page, [
        'button:has-text("Continue")',
        'button:nth-of-type(2)', // From recordings
        'button[type="submit"]',
      ]);

      await this.browserManager.waitForStability();

      // Check if login was successful
      const isLoggedIn = await this.browserManager.isLoggedIn();
      
      if (isLoggedIn) {
        // Save session
        await this.browserManager.saveSession();
        
        return {
          success: true,
          message: 'OTP verified successfully. Login complete.',
          data: { 
            loginComplete: true,
            timestamp: new Date().toISOString()
          },
        };
      } else {
        return {
          success: false,
          message: 'OTP verification failed. Please check the code and try again.',
          error: {
            code: 'OTP_VERIFICATION_FAILED',
            message: 'Invalid OTP code',
            recoverable: true,
          },
        };
      }
    } catch (error) {
      return {
        success: false,
        message: `OTP submission failed: ${error instanceof Error ? error.message : String(error)}`,
        error: {
          code: 'OTP_SUBMISSION_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async loginWithAppleId(credentials: { email: string; password: string; twoFactorCode?: string }): Promise<TinderToolResult> {
    try {
      if (!this.browserContext) {
        await this.initializeBrowser();
      }

      const { page } = this.browserContext!;

      // Navigate to Tinder if not already there
      await this.browserManager.navigateToTinder();
      await this.browserManager.waitForStability();

      // Look for Apple ID login option
      await TinderSelectors.clickElement(page, [
        'button:has-text("Apple")',
        'div:has-text("Apple")',
        '#o787701392 div.c9iqosj', // From recordings
      ]);

      await this.browserManager.waitForStability();

      // Fill Apple ID credentials
      await TinderSelectors.fillElement(page, [
        TinderSelectors.AUTH.APPLE_ID_EMAIL,
        '#account_name_text_field', // From recordings
      ], credentials.email);

      await TinderSelectors.fillElement(page, [
        TinderSelectors.AUTH.APPLE_ID_PASSWORD,
        '#password_text_field', // From recordings
      ], credentials.password);

      // Click continue
      await TinderSelectors.clickElement(page, [
        TinderSelectors.AUTH.APPLE_ID_CONTINUE,
        '#continue-password', // From recordings
        'button:has-text("Continue")',
      ]);

      await this.browserManager.waitForStability();

      // Handle 2FA if provided
      if (credentials.twoFactorCode) {
        const twoFADigits = credentials.twoFactorCode.split('');
        
        for (let i = 0; i < twoFADigits.length; i++) {
          await TinderSelectors.fillElement(page, [
            `input:nth-of-type(${i + 1})`,
            `#content input:nth-of-type(${i + 1})`, // From recordings
          ], twoFADigits[i]);
        }

        await TinderSelectors.clickElement(page, [
          'button:has-text("Continue")',
          'button:nth-of-type(2)', // From recordings
        ]);

        await this.browserManager.waitForStability();
      }

      // Handle trust browser prompt
      try {
        await TinderSelectors.clickElement(page, [
          TinderSelectors.AUTH.TRUST_BROWSER,
          'button:has-text("Trust")',
        ], 5000);
      } catch (error) {
        // Trust prompt may not appear, continue
      }

      await this.browserManager.waitForStability();

      // Check if login was successful
      const isLoggedIn = await this.browserManager.isLoggedIn();
      
      if (isLoggedIn) {
        await this.browserManager.saveSession();
        
        return {
          success: true,
          message: 'Apple ID login successful',
          data: { 
            loginMethod: 'apple_id',
            timestamp: new Date().toISOString()
          },
        };
      } else {
        return {
          success: false,
          message: 'Apple ID login failed',
          error: {
            code: 'APPLE_LOGIN_FAILED',
            message: 'Unable to authenticate with Apple ID',
            recoverable: true,
          },
        };
      }
    } catch (error) {
      return {
        success: false,
        message: `Apple ID login failed: ${error instanceof Error ? error.message : String(error)}`,
        error: {
          code: 'APPLE_LOGIN_ERROR',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async checkLoginStatus(): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      const isLoggedIn = await this.browserManager.isLoggedIn();
      
      return {
        success: true,
        message: isLoggedIn ? 'User is logged in' : 'User is not logged in',
        data: { 
          isLoggedIn,
          timestamp: new Date().toISOString()
        },
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to check login status: ${error instanceof Error ? error.message : String(error)}`,
        error: {
          code: 'LOGIN_STATUS_CHECK_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async logout(): Promise<TinderToolResult> {
    try {
      if (!this.browserContext) {
        return {
          success: true,
          message: 'Already logged out',
          data: { alreadyLoggedOut: true },
        };
      }

      const { page } = this.browserContext;

      // Navigate to profile/settings
      await TinderSelectors.clickElement(page, [
        TinderSelectors.SETTINGS.PROFILE_BUTTON,
        'nav a > div > div', // From recordings
        'button[aria-label*="Profile"]',
      ]);

      await this.browserManager.waitForStability();

      // Find and click logout
      await TinderSelectors.clickElement(page, [
        'button:has-text("Logout")',
        'button:has-text("Log out")',
        'div:has-text("Logout")',
      ]);

      await this.browserManager.waitForStability();

      // Clear saved session
      await this.browserManager.cookieManager.clearCookies();

      return {
        success: true,
        message: 'Successfully logged out',
        data: { 
          loggedOut: true,
          timestamp: new Date().toISOString()
        },
      };
    } catch (error) {
      return {
        success: false,
        message: `Logout failed: ${error instanceof Error ? error.message : String(error)}`,
        error: {
          code: 'LOGOUT_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async cleanup(): Promise<void> {
    if (this.browserContext) {
      await this.browserManager.close();
      this.browserContext = null;
    }
  }
}

// Zod schemas for validation
export const LoginWithPhoneSchema = z.object({
  phoneNumber: z.string().min(1, 'Phone number is required'),
  countryCode: z.string().default('1'),
});

export const SubmitOTPSchema = z.object({
  otpCode: z.string().regex(/^\d{6}$/, 'OTP must be 6 digits'),
});

export const LoginWithAppleIdSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(1, 'Password is required'),
  twoFactorCode: z.string().regex(/^\d{6}$/, '2FA code must be 6 digits').optional(),
});

export const LoginWithCookiesSchema = z.object({
  cookies: z.string().min(1, 'Cookies JSON is required'),
});
