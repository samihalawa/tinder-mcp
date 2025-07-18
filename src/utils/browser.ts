import { chromium, Browser, BrowserContext, Page } from 'playwright';
import { TinderSession, BrowserContext as TinderBrowserContext } from '../types/tinder.js';
import { CookieManager } from './cookies.js';

export class BrowserManager {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private page: Page | null = null;
  public cookieManager: CookieManager;

  constructor() {
    this.cookieManager = new CookieManager();
  }

  async initialize(session?: TinderSession): Promise<TinderBrowserContext> {
    // Launch browser with realistic settings
    this.browser = await chromium.launch({
      headless: process.env.HEADLESS !== 'false',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor',
      ],
    });

    // Create context with realistic user agent and viewport
    this.context = await this.browser.newContext({
      userAgent: session?.userAgent || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      viewport: { width: 1379, height: 801 },
      locale: 'en-US',
      timezoneId: 'Europe/Madrid',
      permissions: ['geolocation', 'notifications'],
      geolocation: { latitude: 40.4168, longitude: -3.7038 }, // Madrid coordinates
    });

    // Load existing cookies if available
    if (session?.cookies) {
      await this.context.addCookies(session.cookies);
    }

    // Create page
    this.page = await this.context.newPage();

    // Set up request/response interceptors
    await this.setupInterceptors();

    const tinderSession: TinderSession = session || {
      cookies: [],
      userAgent: await this.page.evaluate(() => navigator.userAgent),
      isLoggedIn: false,
      lastActivity: new Date(),
    };

    return {
      page: this.page,
      context: this.context,
      session: tinderSession,
    };
  }

  private async setupInterceptors() {
    if (!this.page) return;

    // Block unnecessary resources to speed up loading
    await this.page.route('**/*', (route) => {
      const resourceType = route.request().resourceType();
      if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
        // Allow profile images but block other media
        if (resourceType === 'image' && route.request().url().includes('tinder')) {
          route.continue();
        } else {
          route.abort();
        }
      } else {
        route.continue();
      }
    });

    // Log API requests for debugging
    this.page.on('response', (response) => {
      if (response.url().includes('api.gotinder.com')) {
        console.log(`API Response: ${response.status()} ${response.url()}`);
      }
    });

    // Handle console errors
    this.page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.error(`Browser console error: ${msg.text()}`);
      }
    });
  }

  async navigateToTinder(): Promise<void> {
    if (!this.page) throw new Error('Browser not initialized');
    
    await this.page.goto('https://tinder.com/', {
      waitUntil: 'networkidle',
      timeout: 30000,
    });

    // Wait for the page to fully load
    await this.page.waitForLoadState('domcontentloaded');
    await this.waitForStability();
  }

  async waitForStability(timeout = 5000): Promise<void> {
    if (!this.page) return;
    
    // Wait for network to be idle and no pending animations
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000); // Additional stability wait
    
    // Wait for any loading spinners to disappear
    try {
      await this.page.waitForSelector('[data-testid="loading"], .loading', {
        state: 'hidden',
        timeout: timeout,
      });
    } catch {
      // Loading spinner might not exist, continue
    }
  }

  async saveSession(): Promise<TinderSession> {
    if (!this.context || !this.page) {
      throw new Error('Browser not initialized');
    }

    const cookies = await this.context.cookies();
    const userAgent = await this.page.evaluate(() => navigator.userAgent);
    
    // Check if user is logged in by looking for profile elements
    const isLoggedIn = await this.isLoggedIn();

    const session: TinderSession = {
      cookies,
      userAgent,
      isLoggedIn,
      lastActivity: new Date(),
    };

    // Save cookies to file
    await this.cookieManager.saveCookies(cookies);

    return session;
  }

  async loadSession(): Promise<TinderSession | null> {
    try {
      const cookies = await this.cookieManager.loadCookies();
      if (!cookies || cookies.length === 0) return null;

      return {
        cookies,
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        isLoggedIn: false, // Will be verified after loading
        lastActivity: new Date(),
      };
    } catch (error) {
      console.error('Failed to load session:', error);
      return null;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    if (!this.page) return false;

    try {
      // Check for profile button or discovery feed
      await this.page.waitForSelector([
        'nav a[href*="/profile"]',
        'button[aria-label*="Profile"]',
        'div[data-testid="discovery-feed"]',
        '#main-content',
      ].join(', '), { timeout: 5000 });
      
      return true;
    } catch {
      return false;
    }
  }

  async handlePopups(): Promise<void> {
    if (!this.page) return;

    const popupSelectors = [
      'button:has-text("Not now")',
      'button:has-text("算了")',
      'button:has-text("Maybe Later")',
      'button:has-text("Skip")',
      'button[aria-label*="Close"]',
      'svg[aria-label*="关闭"]',
      '[data-testid="close-button"]',
    ];

    for (const selector of popupSelectors) {
      try {
        const element = await this.page.$(selector);
        if (element && await element.isVisible()) {
          await element.click();
          await this.waitForStability(2000);
        }
      } catch {
        // Continue if popup not found
      }
    }
  }

  async takeScreenshot(name: string): Promise<string> {
    if (!this.page) throw new Error('Browser not initialized');
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `screenshot-${name}-${timestamp}.png`;
    const path = `./screenshots/${filename}`;
    
    await this.page.screenshot({ path, fullPage: true });
    return path;
  }

  async getPageInfo(): Promise<{ url: string; title: string }> {
    if (!this.page) throw new Error('Browser not initialized');
    
    return {
      url: this.page.url(),
      title: await this.page.title(),
    };
  }

  async close(): Promise<void> {
    if (this.page) {
      await this.page.close();
      this.page = null;
    }
    
    if (this.context) {
      await this.context.close();
      this.context = null;
    }
    
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  // Utility methods for common actions
  async scrollToElement(selector: string): Promise<void> {
    if (!this.page) return;
    
    const element = await this.page.$(selector);
    if (element) {
      await element.scrollIntoViewIfNeeded();
    }
  }

  async waitForElementToBeVisible(selector: string, timeout = 10000): Promise<boolean> {
    if (!this.page) return false;
    
    try {
      await this.page.waitForSelector(selector, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  async waitForElementToBeHidden(selector: string, timeout = 10000): Promise<boolean> {
    if (!this.page) return false;
    
    try {
      await this.page.waitForSelector(selector, { state: 'hidden', timeout });
      return true;
    } catch {
      return false;
    }
  }

  async retryAction<T>(
    action: () => Promise<T>,
    maxRetries = 3,
    delay = 1000
  ): Promise<T> {
    let lastError: Error;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await action();
      } catch (error) {
        lastError = error as Error;
        if (i < maxRetries - 1) {
          await this.page?.waitForTimeout(delay);
        }
      }
    }
    
    throw lastError!;
  }
}
