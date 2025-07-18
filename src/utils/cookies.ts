import { promises as fs } from 'fs';
import { join } from 'path';
import CryptoJS from 'crypto-js';

export class CookieManager {
  private readonly cookiesDir = './data';
  private readonly cookiesFile = 'tinder-cookies.json';
  private readonly encryptionKey = process.env.COOKIE_ENCRYPTION_KEY || 'tinder-mcp-default-key';

  constructor() {
    this.ensureDataDirectory();
  }

  private async ensureDataDirectory(): Promise<void> {
    try {
      await fs.mkdir(this.cookiesDir, { recursive: true });
    } catch (error) {
      console.error('Failed to create data directory:', error);
    }
  }

  async saveCookies(cookies: any[]): Promise<void> {
    try {
      const cookiesPath = join(this.cookiesDir, this.cookiesFile);
      const cookiesData = JSON.stringify(cookies, null, 2);
      
      // Encrypt sensitive cookie data
      const encryptedData = CryptoJS.AES.encrypt(cookiesData, this.encryptionKey).toString();
      
      await fs.writeFile(cookiesPath, encryptedData, 'utf8');
      console.log(`Saved ${cookies.length} cookies to ${cookiesPath}`);
    } catch (error) {
      console.error('Failed to save cookies:', error);
      throw error;
    }
  }

  async loadCookies(): Promise<any[] | null> {
    try {
      const cookiesPath = join(this.cookiesDir, this.cookiesFile);
      
      // Check if file exists
      try {
        await fs.access(cookiesPath);
      } catch {
        return null; // File doesn't exist
      }

      const encryptedData = await fs.readFile(cookiesPath, 'utf8');
      
      // Decrypt cookie data
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey);
      const cookiesData = decryptedBytes.toString(CryptoJS.enc.Utf8);
      
      if (!cookiesData) {
        console.error('Failed to decrypt cookies - invalid key?');
        return null;
      }

      const cookies = JSON.parse(cookiesData);
      console.log(`Loaded ${cookies.length} cookies from ${cookiesPath}`);
      
      // Filter out expired cookies
      const now = Date.now() / 1000;
      const validCookies = cookies.filter((cookie: any) => {
        if (cookie.expirationDate && cookie.expirationDate < now) {
          return false;
        }
        return true;
      });

      if (validCookies.length !== cookies.length) {
        console.log(`Filtered out ${cookies.length - validCookies.length} expired cookies`);
      }

      return validCookies;
    } catch (error) {
      console.error('Failed to load cookies:', error);
      return null;
    }
  }

  async clearCookies(): Promise<void> {
    try {
      const cookiesPath = join(this.cookiesDir, this.cookiesFile);
      await fs.unlink(cookiesPath);
      console.log('Cleared saved cookies');
    } catch (error) {
      if ((error as any).code !== 'ENOENT') {
        console.error('Failed to clear cookies:', error);
      }
    }
  }

  async getCookieValue(name: string): Promise<string | null> {
    const cookies = await this.loadCookies();
    if (!cookies) return null;

    const cookie = cookies.find((c: any) => c.name === name);
    return cookie ? cookie.value : null;
  }

  async hasCookies(): Promise<boolean> {
    const cookies = await this.loadCookies();
    return cookies !== null && cookies.length > 0;
  }

  async getSessionInfo(): Promise<{
    hasSession: boolean;
    cookieCount: number;
    lastSaved?: Date;
  }> {
    try {
      const cookiesPath = join(this.cookiesDir, this.cookiesFile);
      const stats = await fs.stat(cookiesPath);
      const cookies = await this.loadCookies();
      
      return {
        hasSession: cookies !== null && cookies.length > 0,
        cookieCount: cookies?.length || 0,
        lastSaved: stats.mtime,
      };
    } catch {
      return {
        hasSession: false,
        cookieCount: 0,
      };
    }
  }

  // Extract specific Tinder cookies for API usage
  async getTinderAuthCookies(): Promise<{
    sessionId?: string;
    authToken?: string;
    userId?: string;
  }> {
    const cookies = await this.loadCookies();
    if (!cookies) return {};

    const result: any = {};
    
    for (const cookie of cookies) {
      switch (cookie.name) {
        case 'session_id':
        case 'tinder_session':
          result.sessionId = cookie.value;
          break;
        case 'auth_token':
        case 'tinder_auth':
          result.authToken = cookie.value;
          break;
        case 'user_id':
        case 'tinder_user_id':
          result.userId = cookie.value;
          break;
      }
    }

    return result;
  }

  // Backup and restore functionality
  async backupCookies(backupName?: string): Promise<string> {
    const cookies = await this.loadCookies();
    if (!cookies) throw new Error('No cookies to backup');

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFileName = `tinder-cookies-backup-${backupName || timestamp}.json`;
    const backupPath = join(this.cookiesDir, backupFileName);

    const cookiesData = JSON.stringify(cookies, null, 2);
    const encryptedData = CryptoJS.AES.encrypt(cookiesData, this.encryptionKey).toString();
    
    await fs.writeFile(backupPath, encryptedData, 'utf8');
    console.log(`Backed up cookies to ${backupPath}`);
    
    return backupPath;
  }

  async restoreCookies(backupPath: string): Promise<void> {
    try {
      const encryptedData = await fs.readFile(backupPath, 'utf8');
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey);
      const cookiesData = decryptedBytes.toString(CryptoJS.enc.Utf8);
      
      if (!cookiesData) {
        throw new Error('Failed to decrypt backup - invalid key?');
      }

      const cookies = JSON.parse(cookiesData);
      await this.saveCookies(cookies);
      console.log(`Restored cookies from ${backupPath}`);
    } catch (error) {
      console.error('Failed to restore cookies:', error);
      throw error;
    }
  }

  // Cookie validation and health check
  async validateCookies(): Promise<{
    valid: boolean;
    issues: string[];
    recommendations: string[];
  }> {
    const cookies = await this.loadCookies();
    const issues: string[] = [];
    const recommendations: string[] = [];

    if (!cookies || cookies.length === 0) {
      return {
        valid: false,
        issues: ['No cookies found'],
        recommendations: ['Login to Tinder to establish a session'],
      };
    }

    const now = Date.now() / 1000;
    const expiredCookies = cookies.filter(c => c.expirationDate && c.expirationDate < now);
    
    if (expiredCookies.length > 0) {
      issues.push(`${expiredCookies.length} cookies have expired`);
      recommendations.push('Re-authenticate to refresh session');
    }

    // Check for essential Tinder cookies
    const essentialCookies = ['AWSALB', 'AWSALBCORS', '_ga', 'lang'];
    const missingEssential = essentialCookies.filter(name => 
      !cookies.some(c => c.name === name)
    );

    if (missingEssential.length > 0) {
      issues.push(`Missing essential cookies: ${missingEssential.join(', ')}`);
      recommendations.push('Complete login process to get all required cookies');
    }

    // Check cookie age
    const oldestCookie = cookies.reduce((oldest, cookie) => {
      const cookieAge = now - (cookie.expirationDate || now);
      const oldestAge = now - (oldest.expirationDate || now);
      return cookieAge > oldestAge ? cookie : oldest;
    });

    const daysSinceOldest = (now - (oldestCookie.expirationDate || now)) / (24 * 60 * 60);
    if (daysSinceOldest > 7) {
      recommendations.push('Consider refreshing session - cookies are over a week old');
    }

    return {
      valid: issues.length === 0,
      issues,
      recommendations,
    };
  }
}
