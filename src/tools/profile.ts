import { z } from 'zod';
import { TinderSelectors } from '../utils/selectors.js';
import { BrowserManager } from '../utils/browser.js';
import { ProfileSetupData, TinderToolResult, BrowserContext } from '../types/tinder.js';

export class ProfileTools {
  private browserManager: BrowserManager;
  private browserContext: BrowserContext | null = null;

  constructor() {
    this.browserManager = new BrowserManager();
  }

  async initializeBrowser(): Promise<void> {
    if (!this.browserContext) {
      const session = await this.browserManager.loadSession();
      this.browserContext = await this.browserManager.initialize(session || undefined);
      await this.browserManager.navigateToTinder();
    }
  }

  async setupProfile(profileData: ProfileSetupData): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      const { page } = this.browserContext!;

      // Navigate to profile
      await this.navigateToProfile();

      // Upload photos if provided
      if (profileData.photos && profileData.photos.length > 0) {
        await this.uploadPhotos(profileData.photos);
      }

      // Update bio
      if (profileData.bio) {
        await this.updateBio(profileData.bio);
      }

      // Update job information
      if (profileData.job || profileData.company) {
        await this.updateJobInfo(profileData.job, profileData.company);
      }

      // Update education
      if (profileData.education || profileData.school) {
        await this.updateEducation(profileData.education, profileData.school);
      }

      // Update location
      if (profileData.location) {
        await this.updateLocation(profileData.location);
      }

      // Update interests
      if (profileData.interests && profileData.interests.length > 0) {
        await this.updateInterests(profileData.interests);
      }

      // Update languages
      if (profileData.languages && profileData.languages.length > 0) {
        await this.updateLanguages(profileData.languages);
      }

      // Update other profile details
      if (profileData.height) {
        await this.updateHeight(profileData.height);
      }

      if (profileData.zodiacSign) {
        await this.updateZodiacSign(profileData.zodiacSign);
      }

      if (profileData.personalityType) {
        await this.updatePersonalityType(profileData.personalityType);
      }

      if (profileData.relationshipType) {
        await this.updateRelationshipType(profileData.relationshipType);
      }

      // Save profile
      await this.saveProfile();

      return {
        success: true,
        message: 'Profile setup completed successfully',
        data: { 
          profileUpdated: true,
          updatedFields: Object.keys(profileData),
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Profile setup failed: ${error}`,
        error: {
          code: 'PROFILE_SETUP_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  private async navigateToProfile(): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    // Click profile button
    await TinderSelectors.clickElement(page, [
      TinderSelectors.SETTINGS.PROFILE_BUTTON,
      'nav a[href*="/profile"]',
      'button[aria-label*="Profile"]',
    ]);

    await this.browserManager.waitForStability();

    // Click edit profile if needed
    try {
      await TinderSelectors.clickElement(page, [
        'button:has-text("Edit Info")',
        'div.c9iqosj:has-text("编辑信息")',
        'a:has-text("Edit")',
      ], 5000);
      await this.browserManager.waitForStability();
    } catch {
      // Already in edit mode or different UI
    }
  }

  private async uploadPhotos(photoPaths: string[]): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    for (let i = 0; i < Math.min(photoPaths.length, 9); i++) {
      const photoPath = photoPaths[i];
      
      try {
        // Find photo upload slot
        const uploadSelector = [
          `li:nth-of-type(${i + 1}) input[type="file"]`,
          'input[type="file"]',
          'button:has-text("Add Photo")',
        ];

        // Upload photo
        const fileInput = await TinderSelectors.findElement(page, uploadSelector);
        await fileInput.setInputFiles(photoPath);

        await this.browserManager.waitForStability(3000);

        // Handle any crop/edit modals
        try {
          await TinderSelectors.clickElement(page, [
            'button:has-text("Save")',
            'button:has-text("Done")',
            'div.c9iqosj:has-text("保存")',
          ], 5000);
        } catch {
          // No crop modal appeared
        }

        await this.browserManager.waitForStability();
      } catch (error) {
        console.warn(`Failed to upload photo ${i + 1}: ${error}`);
      }
    }
  }

  private async updateBio(bio: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Find and click bio section
      await TinderSelectors.clickElement(page, [
        TinderSelectors.PROFILE.BIO_INPUT,
        'textarea[aria-label*="About"]',
        'div:has-text("About me")',
      ]);

      await this.browserManager.waitForStability();

      // Clear existing bio and enter new one
      await page.keyboard.press('Meta+A');
      await TinderSelectors.fillElement(page, TinderSelectors.PROFILE.BIO_INPUT, bio);

      await this.browserManager.waitForStability();
    } catch (error) {
      console.warn(`Failed to update bio: ${error}`);
    }
  }

  private async updateJobInfo(job?: string, company?: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      if (job) {
        await TinderSelectors.fillElement(page, TinderSelectors.PROFILE.JOB_INPUT, job);
        await this.browserManager.waitForStability();
      }

      if (company) {
        await TinderSelectors.fillElement(page, TinderSelectors.PROFILE.COMPANY_INPUT, company);
        await this.browserManager.waitForStability();
      }
    } catch (error) {
      console.warn(`Failed to update job info: ${error}`);
    }
  }

  private async updateEducation(education?: string, school?: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      if (school) {
        // Click add education section
        await TinderSelectors.clickElement(page, [
          'section:has-text("Education") a',
          'button:has-text("Add Education")',
          'span:has-text("添加 教育情况")',
        ]);

        await this.browserManager.waitForStability();

        // Fill school name
        await TinderSelectors.fillElement(page, TinderSelectors.PROFILE.SCHOOL_INPUT, school);
        await this.browserManager.waitForStability();

        // Select from dropdown if available
        try {
          await TinderSelectors.clickElement(page, [
            `button:has-text("${school}")`,
            `li:has-text("${school}")`,
          ], 3000);
        } catch {
          // No dropdown or exact match
        }
      }
    } catch (error) {
      console.warn(`Failed to update education: ${error}`);
    }
  }

  private async updateLocation(location: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Click add location section
      await TinderSelectors.clickElement(page, [
        'section:has-text("Location") a',
        'button:has-text("Add Location")',
      ]);

      await this.browserManager.waitForStability();

      // Fill location
      await TinderSelectors.fillElement(page, TinderSelectors.PROFILE.LOCATION_INPUT, location);
      await this.browserManager.waitForStability();

      // Select from dropdown
      try {
        await TinderSelectors.clickElement(page, [
          `button:has-text("${location}")`,
          `li:has-text("${location}")`,
        ], 3000);
      } catch {
        // No dropdown match
      }
    } catch (error) {
      console.warn(`Failed to update location: ${error}`);
    }
  }

  private async updateInterests(interests: string[]): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Click interests section
      await TinderSelectors.clickElement(page, [
        'section:has-text("Interests") a',
        'button:has-text("Add Interests")',
      ]);

      await this.browserManager.waitForStability();

      // Select interests
      for (const interest of interests.slice(0, 5)) { // Limit to 5 interests
        try {
          await TinderSelectors.clickElement(page, [
            `div:has-text("${interest}")`,
            `button:has-text("${interest}")`,
            `[aria-label="${interest}"]`,
          ], 2000);
          await this.browserManager.waitForStability(500);
        } catch {
          console.warn(`Interest "${interest}" not found`);
        }
      }

      // Save interests
      await TinderSelectors.clickElement(page, [
        TinderSelectors.PROFILE.DONE_BUTTON,
        'button:has-text("Complete")',
      ]);

    } catch (error) {
      console.warn(`Failed to update interests: ${error}`);
    }
  }

  private async updateLanguages(languages: string[]): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Click languages section
      await TinderSelectors.clickElement(page, [
        'section:has-text("Languages") span',
        'button:has-text("Add Language")',
        'span:has-text("添加语言")',
      ]);

      await this.browserManager.waitForStability();

      // Select languages
      for (const language of languages.slice(0, 3)) { // Limit to 3 languages
        try {
          // Search for language
          await TinderSelectors.fillElement(page, [
            'input[aria-label*="Search"]',
            'input[placeholder*="Search"]',
          ], language);

          await this.browserManager.waitForStability(1000);

          // Select language
          await TinderSelectors.clickElement(page, [
            `div:has-text("${language}")`,
            `button:has-text("${language}")`,
          ], 2000);

          await this.browserManager.waitForStability();
        } catch {
          console.warn(`Language "${language}" not found`);
        }
      }

      // Save languages
      await TinderSelectors.clickElement(page, TinderSelectors.PROFILE.DONE_BUTTON);

    } catch (error) {
      console.warn(`Failed to update languages: ${error}`);
    }
  }

  private async updateHeight(height: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Click height section
      await TinderSelectors.clickElement(page, [
        'section:has-text("Height") span',
        'button:has-text("Add Height")',
      ]);

      await this.browserManager.waitForStability();

      // Enter height
      await TinderSelectors.fillElement(page, TinderSelectors.PROFILE.HEIGHT_INPUT, height);
      await page.keyboard.press('Enter');

      await this.browserManager.waitForStability();
    } catch (error) {
      console.warn(`Failed to update height: ${error}`);
    }
  }

  private async updateZodiacSign(zodiacSign: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Click zodiac section
      await TinderSelectors.clickElement(page, [
        'section:has-text("Zodiac") span',
        'button:has-text("Add Zodiac")',
      ]);

      await this.browserManager.waitForStability();

      // Select zodiac sign
      await TinderSelectors.clickElement(page, [
        `div:has-text("${zodiacSign}")`,
        `button:has-text("${zodiacSign}")`,
      ]);

      await this.browserManager.waitForStability();
    } catch (error) {
      console.warn(`Failed to update zodiac sign: ${error}`);
    }
  }

  private async updatePersonalityType(personalityType: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Click personality type section
      await TinderSelectors.clickElement(page, [
        'section:has-text("Personality") span',
        'button:has-text("Add Personality")',
      ]);

      await this.browserManager.waitForStability();

      // Select personality type
      await TinderSelectors.clickElement(page, [
        `div:has-text("${personalityType}")`,
        `button:has-text("${personalityType}")`,
      ]);

      await this.browserManager.waitForStability();
    } catch (error) {
      console.warn(`Failed to update personality type: ${error}`);
    }
  }

  private async updateRelationshipType(relationshipType: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Click relationship type section
      await TinderSelectors.clickElement(page, [
        'section:has-text("Looking for") span',
        'button:has-text("Add Relationship Type")',
      ]);

      await this.browserManager.waitForStability();

      // Select relationship type
      await TinderSelectors.clickElement(page, [
        `div:has-text("${relationshipType}")`,
        `button:has-text("${relationshipType}")`,
      ]);

      await this.browserManager.waitForStability();
    } catch (error) {
      console.warn(`Failed to update relationship type: ${error}`);
    }
  }

  private async saveProfile(): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Save profile changes
      await TinderSelectors.clickElement(page, [
        TinderSelectors.PROFILE.SAVE_BUTTON,
        TinderSelectors.PROFILE.DONE_BUTTON,
        'button:has-text("Save Changes")',
      ]);

      await this.browserManager.waitForStability();

      // Handle any confirmation dialogs
      try {
        await TinderSelectors.clickElement(page, [
          'button:has-text("Confirm")',
          'button:has-text("Yes")',
          'div.c9iqosj:has-text("确定")',
        ], 3000);
      } catch {
        // No confirmation needed
      }

    } catch (error) {
      console.warn(`Failed to save profile: ${error}`);
    }
  }

  async getProfile(): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      const { page } = this.browserContext!;

      await this.navigateToProfile();

      // Extract profile information
      const profile = {
        photos: await this.extractPhotos(),
        bio: await this.extractBio(),
        basicInfo: await this.extractBasicInfo(),
        interests: await this.extractInterests(),
        languages: await this.extractLanguages(),
      };

      return {
        success: true,
        message: 'Profile information retrieved successfully',
        data: profile,
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to get profile: ${error}`,
        error: {
          code: 'GET_PROFILE_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  private async extractPhotos(): Promise<string[]> {
    if (!this.browserContext) return [];
    const { page } = this.browserContext;

    try {
      const photos = await page.$$eval('img[src*="tinder"], img[src*="profile"]', (imgs: HTMLImageElement[]) =>
        imgs.map((img: HTMLImageElement) => img.src).filter((src: string) => src.includes('tinder') || src.includes('profile'))
      );
      return photos;
    } catch {
      return [];
    }
  }

  private async extractBio(): Promise<string> {
    if (!this.browserContext) return '';
    const { page } = this.browserContext;

    try {
      const bio = await TinderSelectors.getText(page, [
        TinderSelectors.PROFILE.BIO_INPUT,
        'div[data-testid="bio"]',
        'textarea[aria-label*="About"]',
      ]);
      return bio || '';
    } catch {
      return '';
    }
  }

  private async extractBasicInfo(): Promise<Record<string, string>> {
    if (!this.browserContext) return {};
    const { page } = this.browserContext;

    const info: Record<string, string> = {};

    try {
      // Extract job
      const job = await TinderSelectors.getText(page, TinderSelectors.PROFILE.JOB_INPUT);
      if (job) info.job = job;

      // Extract company
      const company = await TinderSelectors.getText(page, TinderSelectors.PROFILE.COMPANY_INPUT);
      if (company) info.company = company;

      // Extract school
      const school = await TinderSelectors.getText(page, TinderSelectors.PROFILE.SCHOOL_INPUT);
      if (school) info.school = school;

      // Extract location
      const location = await TinderSelectors.getText(page, TinderSelectors.PROFILE.LOCATION_INPUT);
      if (location) info.location = location;

    } catch (error) {
      console.warn('Failed to extract some basic info:', error);
    }

    return info;
  }

  private async extractInterests(): Promise<string[]> {
    if (!this.browserContext) return [];
    const { page } = this.browserContext;

    try {
      const interests = await page.$$eval(
        'div[data-testid="interest"], .interest-tag, div:has-text("Interest")',
        (elements: Element[]) => elements.map((el: Element) => el.textContent?.trim()).filter(Boolean)
      );
      return interests as string[];
    } catch {
      return [];
    }
  }

  private async extractLanguages(): Promise<string[]> {
    if (!this.browserContext) return [];
    const { page } = this.browserContext;

    try {
      const languages = await page.$$eval(
        'div[data-testid="language"], .language-tag',
        (elements: Element[]) => elements.map((el: Element) => el.textContent?.trim()).filter(Boolean)
      );
      return languages as string[];
    } catch {
      return [];
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
export const ProfileSetupSchema = z.object({
  photos: z.array(z.string()).optional(),
  bio: z.string().max(500).optional(),
  job: z.string().optional(),
  company: z.string().optional(),
  education: z.string().optional(),
  school: z.string().optional(),
  location: z.string().optional(),
  interests: z.array(z.string()).max(5).optional(),
  languages: z.array(z.string()).max(3).optional(),
  height: z.string().optional(),
  zodiacSign: z.string().optional(),
  personalityType: z.string().optional(),
  relationshipType: z.string().optional(),
});
