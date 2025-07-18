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
      ]);

      await this.browserManager.waitForStability();

      // Select phone login option
      await TinderSelectors.clickElement(page, [
        'div:has-text("Log in with phone")',
        'button:has-text("Continue with Phone Number")',
        'div.lxn9zzn:has-text("Log in with phone")',
      ]);

      await this.browserManager.waitForStability();

      // Select country
      await this.selectCountry(credentials.countryCode);

      // Enter phone number
      await TinderSelectors.fillElement(
        page,
        TinderSelectors.AUTH.PHONE_INPUT,
        credentials.phoneNumber
      );

      // Click continue
      await TinderSelectors.clickElement(page, [
        TinderSelectors.AUTH.LOGIN_BUTTON,
        'div.c9iqosj:has-text("Continue")',
        'button:has-text("Get OTP")',
      ]);

      await this.browserManager.waitForStability();

      // Wait for OTP input to appear
      await page.waitForSelector([
        'input[aria-label*="OTP"]',
        'input[aria-label*="digit"]',
        'div.D\\(f\\) > div:nth-of-type(1) input',
      ].join(', '), { timeout: 30000 });

      return {
        success: true,
        message: 'Phone number submitted. Please provide OTP code.',
        data: { 
          step: 'otp_required',
          phoneNumber: credentials.phoneNumber,
          countryCode: credentials.countryCode,
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Login failed: ${error}`,
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
        throw new Error('Browser not initialized. Please start login process first.');
      }

      const { page } = this.browserContext;

      // Enter OTP code
      if (otpCode.length === 6) {
        // Try single input field first
        try {
          await TinderSelectors.fillElement(
            page,
            'input[aria-label*="OTP"], input[aria-label*="digit 1"]',
            otpCode
          );
        } catch {
          // Fall back to individual digit inputs
          for (let i = 0; i < 6; i++) {
            const digit = otpCode[i];
            await TinderSelectors.fillElement(
              page,
              TinderSelectors.buildOTPSelector(i + 1),
              digit
            );
          }
        }
      } else {
        throw new Error('OTP code must be 6 digits');
      }

      await this.browserManager.waitForStability();

      // Wait for navigation or next step
      await page.waitForTimeout(3000);

      // Check if login was successful
      if (await this.browserManager.isLoggedIn()) {
        const session = await this.browserManager.saveSession();
        return {
          success: true,
          message: 'Successfully logged in to Tinder',
          data: { 
            loggedIn: true,
            sessionSaved: true,
            userId: session.userId,
          },
        };
      }

      // Check if additional verification is needed
      const needsAppleId = await page.$('iframe[src*="appleid.apple.com"]');
      if (needsAppleId) {
        return {
          success: true,
          message: 'OTP verified. Apple ID authentication required.',
          data: { 
            step: 'apple_id_required',
            needsAppleId: true,
          },
        };
      }

      // Check for error messages
      const errorElement = await page.$('[data-testid="error-message"], .error, [role="alert"]');
      if (errorElement) {
        const errorText = await errorElement.textContent();
        throw new Error(`OTP verification failed: ${errorText}`);
      }

      return {
        success: false,
        message: 'OTP submitted but login status unclear',
        error: {
          code: 'OTP_UNCLEAR',
          message: 'Unable to determine login status after OTP submission',
          recoverable: true,
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `OTP submission failed: ${error}`,
        error: {
          code: 'OTP_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async loginWithAppleId(appleCredentials: NonNullable<LoginCredentials['appleId']>): Promise<TinderToolResult> {
    try {
      if (!this.browserContext) {
        throw new Error('Browser not initialized');
      }

      const { page } = this.browserContext;

      // Wait for Apple ID iframe
      const iframe = await page.waitForSelector('iframe[src*="appleid.apple.com"]', { timeout: 30000 });
      const appleFrame = await iframe.contentFrame();
      
      if (!appleFrame) {
        throw new Error('Could not access Apple ID frame');
      }

      // Fill Apple ID credentials
      await appleFrame.fill(TinderSelectors.AUTH.APPLE_ID_EMAIL, appleCredentials.email);
      await appleFrame.fill(TinderSelectors.AUTH.APPLE_ID_PASSWORD, appleCredentials.password);

      // Click continue
      await appleFrame.click(TinderSelectors.AUTH.APPLE_ID_CONTINUE);
      await this.browserManager.waitForStability();

      // Handle 2FA if required
      if (appleCredentials.twoFactorCode) {
        await this.submitApple2FA(appleCredentials.twoFactorCode, appleFrame);
      } else {
        // Wait for 2FA input to appear
        try {
          await appleFrame.waitForSelector('input[aria-label*="位数"]', { timeout: 10000 });
          return {
            success: true,
            message: 'Apple ID credentials submitted. 2FA code required.',
            data: { 
              step: 'apple_2fa_required',
              email: appleCredentials.email,
            },
          };
        } catch {
          // 2FA might not be required, continue
        }
      }

      // Wait for authentication to complete
      await page.waitForTimeout(5000);

      // Check if login was successful
      if (await this.browserManager.isLoggedIn()) {
        const session = await this.browserManager.saveSession();
        return {
          success: true,
          message: 'Successfully logged in with Apple ID',
          data: { 
            loggedIn: true,
            sessionSaved: true,
            method: 'apple_id',
          },
        };
      }

      return {
        success: false,
        message: 'Apple ID authentication completed but login status unclear',
        error: {
          code: 'APPLE_ID_UNCLEAR',
          message: 'Unable to determine login status after Apple ID authentication',
          recoverable: true,
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Apple ID login failed: ${error}`,
        error: {
          code: 'APPLE_ID_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async submitApple2FA(twoFactorCode: string, appleFrame: any): Promise<void> {
    if (twoFactorCode.length !== 6) {
      throw new Error('Apple 2FA code must be 6 digits');
    }

    // Enter 2FA code digit by digit
    for (let i = 0; i < 6; i++) {
      const digit = twoFactorCode[i];
      await appleFrame.fill(`input[aria-label*="位数 ${i + 1}"]`, digit);
    }

    // Click trust browser
    await appleFrame.click(TinderSelectors.AUTH.TRUST_BROWSER);
    await this.browserManager.waitForStability();
  }

  private async selectCountry(countryCode: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    
    const { page } = this.browserContext;

    // Click country selector
    await TinderSelectors.clickElement(page, [
      TinderSelectors.AUTH.COUNTRY_SELECTOR,
      'button:has-text("+1")',
      'div:has-text("US")',
    ]);

    await this.browserManager.waitForStability();

    // Search for country
    const countryMap: Record<string, string> = {
      '34': 'Spain',
      '1': 'United States',
      '44': 'United Kingdom',
      '33': 'France',
      '49': 'Germany',
      '86': 'China',
    };

    const countryName = countryMap[countryCode] || countryCode;

    // Try to search for country
    try {
      await TinderSelectors.fillElement(page, TinderSelectors.AUTH.COUNTRY_SEARCH, countryName);
      await page.waitForTimeout(1000);
    } catch {
      // Search might not be available, try direct selection
    }

    // Select country from list
    await TinderSelectors.clickElement(page, [
      `button:has-text("${countryName}")`,
      `div:has-text("${countryName}+${countryCode}")`,
      `[aria-label*="${countryName}"]`,
    ]);

    await this.browserManager.waitForStability();
  }

  async checkLoginStatus(): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      
      const isLoggedIn = await this.browserManager.isLoggedIn();
      const sessionInfo = await this.browserManager.cookieManager?.getSessionInfo();

      return {
        success: true,
        message: isLoggedIn ? 'User is logged in' : 'User is not logged in',
        data: {
          isLoggedIn,
          sessionInfo,
          currentUrl: await this.browserContext?.page.url(),
        },
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to check login status: ${error}`,
        error: {
          code: 'STATUS_CHECK_FAILED',
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
          message: 'No active session to logout from',
          data: { wasLoggedIn: false },
        };
      }

      // Clear cookies and close browser
      await this.browserManager.cookieManager?.clearCookies();
      await this.browserManager.close();
      this.browserContext = null;

      return {
        success: true,
        message: 'Successfully logged out and cleared session',
        data: { loggedOut: true },
      };
    } catch (error) {
      return {
        success: false,
        message: `Logout failed: ${error}`,
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
  countryCode: z.string().min(1, 'Country code is required'),
});

export const SubmitOTPSchema = z.object({
  otpCode: z.string().length(6, 'OTP code must be 6 digits'),
});

export const LoginWithAppleIdSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(1, 'Password is required'),
  twoFactorCode: z.string().length(6, '2FA code must be 6 digits').optional(),
});
