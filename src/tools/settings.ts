import { z } from 'zod';
import { TinderSelectors } from '../utils/selectors.js';
import { BrowserManager } from '../utils/browser.js';
import { TinderSettings, TinderToolResult, BrowserContext } from '../types/tinder.js';

export class SettingsTools {
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

  async navigateToSettings(): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    // Navigate to profile first
    await TinderSelectors.clickElement(page, [
      TinderSelectors.SETTINGS.PROFILE_BUTTON,
      'nav a[href*="/profile"]',
      'button[aria-label*="Profile"]',
    ]);

    await this.browserManager.waitForStability();

    // Look for settings/preferences section
    try {
      await TinderSelectors.clickElement(page, [
        'button:has-text("Settings")',
        'button:has-text("Preferences")',
        'div:has-text("Discovery Settings")',
        'nav button',
      ], 5000);
    } catch {
      // Settings might be in a different location or already visible
    }

    await this.browserManager.waitForStability();
    await this.browserManager.handlePopups();
  }

  async updateSettings(settings: Partial<TinderSettings>): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToSettings();
      
      const { page } = this.browserContext!;

      const updatedFields: string[] = [];

      // Update age range
      if (settings.ageRange) {
        await this.updateAgeRange(settings.ageRange.min, settings.ageRange.max);
        updatedFields.push('ageRange');
      }

      // Update max distance
      if (settings.maxDistance !== undefined) {
        await this.updateMaxDistance(settings.maxDistance);
        updatedFields.push('maxDistance');
      }

      // Update gender preferences
      if (settings.showMe) {
        await this.updateGenderPreference('showMe', settings.showMe);
        updatedFields.push('showMe');
      }

      if (settings.interestedIn) {
        await this.updateGenderPreference('interestedIn', settings.interestedIn);
        updatedFields.push('interestedIn');
      }

      // Update toggle settings
      if (settings.globalMode !== undefined) {
        await this.updateToggleSetting('globalMode', settings.globalMode);
        updatedFields.push('globalMode');
      }

      if (settings.hideAge !== undefined) {
        await this.updateToggleSetting('hideAge', settings.hideAge);
        updatedFields.push('hideAge');
      }

      if (settings.hideDistance !== undefined) {
        await this.updateToggleSetting('hideDistance', settings.hideDistance);
        updatedFields.push('hideDistance');
      }

      if (settings.onlyShowWithPhotos !== undefined) {
        await this.updateToggleSetting('onlyShowWithPhotos', settings.onlyShowWithPhotos);
        updatedFields.push('onlyShowWithPhotos');
      }

      if (settings.recentlyActive !== undefined) {
        await this.updateToggleSetting('recentlyActive', settings.recentlyActive);
        updatedFields.push('recentlyActive');
      }

      // Save settings
      await this.saveSettings();

      return {
        success: true,
        message: `Settings updated successfully: ${updatedFields.join(', ')}`,
        data: {
          updatedFields,
          settings,
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to update settings: ${error}`,
        error: {
          code: 'UPDATE_SETTINGS_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  private async updateAgeRange(minAge: number, maxAge: number): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Find age range section
      await TinderSelectors.clickElement(page, [
        'div:has-text("Age Range")',
        'span:has-text("年龄偏好")',
        'div:has-text("年龄偏好")',
      ]);

      await this.browserManager.waitForStability();

      // Update minimum age
      const minSlider = await TinderSelectors.findElement(page, [
        TinderSelectors.SETTINGS.AGE_MIN_SLIDER,
        '[data-testid="min-age-handle"]',
        'input[aria-label*="最小年龄"]',
      ]);

      // Set slider value
      await minSlider.fill(minAge.toString());
      await page.keyboard.press('Enter');

      await this.browserManager.waitForStability();

      // Update maximum age
      const maxSlider = await TinderSelectors.findElement(page, [
        TinderSelectors.SETTINGS.AGE_MAX_SLIDER,
        '[data-testid="max-age-handle"]',
        'input[aria-label*="最大年龄"]',
      ]);

      await maxSlider.fill(maxAge.toString());
      await page.keyboard.press('Enter');

      await this.browserManager.waitForStability();

    } catch (error) {
      console.warn('Failed to update age range:', error);
    }
  }

  private async updateMaxDistance(distance: number): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Find distance section
      await TinderSelectors.clickElement(page, [
        'div:has-text("Distance")',
        'div:has-text("最大距离")',
        'span:has-text("Maximum Distance")',
      ]);

      await this.browserManager.waitForStability();

      // Update distance slider
      const distanceSlider = await TinderSelectors.findElement(page, [
        TinderSelectors.SETTINGS.DISTANCE_SLIDER,
        '[data-testid="distance-handle"]',
        'input[aria-label*="距离"]',
      ]);

      await distanceSlider.fill(distance.toString());
      await page.keyboard.press('Enter');

      await this.browserManager.waitForStability();

    } catch (error) {
      console.warn('Failed to update max distance:', error);
    }
  }

  private async updateGenderPreference(type: 'showMe' | 'interestedIn', preference: string): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Find gender preference section
      const sectionText = type === 'showMe' ? 'Show Me' : 'Interested In';
      await TinderSelectors.clickElement(page, [
        `div:has-text("${sectionText}")`,
        'button:has-text("感兴趣的是")',
        'div:has-text("Show me")',
      ]);

      await this.browserManager.waitForStability();

      // Select preference
      const preferenceMap: Record<string, string[]> = {
        men: ['Men', '男', 'button:has-text("Men")'],
        women: ['Women', '女', 'button:has-text("Women")'],
        everyone: ['Everyone', '所有人', 'button:has-text("Everyone")'],
      };

      const selectors = preferenceMap[preference] || [preference];
      
      for (const selector of selectors) {
        try {
          await TinderSelectors.clickElement(page, [
            `label:has-text("${selector}")`,
            `button:has-text("${selector}")`,
            `div:has-text("${selector}")`,
          ], 2000);
          break;
        } catch {
          continue;
        }
      }

      await this.browserManager.waitForStability();

    } catch (error) {
      console.warn(`Failed to update ${type}:`, error);
    }
  }

  private async updateToggleSetting(settingName: string, enabled: boolean): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Map setting names to UI text
      const settingMap: Record<string, string[]> = {
        globalMode: ['Global Mode', 'Passport', '全球模式'],
        hideAge: ['Hide Age', '隐藏年龄'],
        hideDistance: ['Hide Distance', '隐藏距离'],
        onlyShowWithPhotos: ['Only show people with photos', '有个人资料'],
        recentlyActive: ['Recently Active', '最近活跃'],
      };

      const settingTexts = settingMap[settingName] || [settingName];

      // Find the toggle switch for this setting
      for (const text of settingTexts) {
        try {
          // Look for the setting section
          const settingSection = await page.$(`div:has-text("${text}")`);
          if (!settingSection) continue;

          // Find toggle switch within or near this section
          const toggleSwitch = await settingSection.$('[data-testid="toggle-switch-input"]') ||
                              await page.$(`div:has-text("${text}") ~ * [data-testid="toggle-switch-input"]`) ||
                              await page.$(`[data-testid="toggle-switch-input"]`);

          if (toggleSwitch) {
            // Check current state
            const isChecked = await toggleSwitch.isChecked();
            
            // Toggle if needed
            if (isChecked !== enabled) {
              await toggleSwitch.click();
              await this.browserManager.waitForStability();
            }
            
            return;
          }
        } catch {
          continue;
        }
      }

      console.warn(`Could not find toggle for setting: ${settingName}`);

    } catch (error) {
      console.warn(`Failed to update toggle setting ${settingName}:`, error);
    }
  }

  private async saveSettings(): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Save settings
      await TinderSelectors.clickElement(page, [
        TinderSelectors.SETTINGS.SAVE_SETTINGS,
        'button:has-text("Save")',
        'button:has-text("Done")',
        'div.c9iqosj:has-text("保存")',
      ], 5000);

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
      console.warn('Failed to save settings:', error);
    }
  }

  async getSettings(): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToSettings();
      
      const settings = await this.extractCurrentSettings();

      return {
        success: true,
        message: 'Settings retrieved successfully',
        data: { settings },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to get settings: ${error}`,
        error: {
          code: 'GET_SETTINGS_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  private async extractCurrentSettings(): Promise<TinderSettings> {
    if (!this.browserContext) {
      throw new Error('Browser not initialized');
    }

    const { page } = this.browserContext;
    const settings: Partial<TinderSettings> = {};

    try {
      // Extract age range
      try {
        const ageRangeText = await TinderSelectors.getText(page, [
          'div:has-text("年龄偏好")',
          'div:has-text("Age Range")',
          'span:has-text("18 - 42")',
        ]);
        
        if (ageRangeText) {
          const match = ageRangeText.match(/(\d+)\s*-\s*(\d+)/);
          if (match) {
            settings.ageRange = {
              min: parseInt(match[1]),
              max: parseInt(match[2]),
            };
          }
        }
      } catch {
        // Default age range
        settings.ageRange = { min: 18, max: 55 };
      }

      // Extract max distance
      try {
        const distanceText = await TinderSelectors.getText(page, [
          'div:has-text("km")',
          'div:has-text("miles")',
          'span:has-text("Maximum Distance")',
        ]);
        
        if (distanceText) {
          const match = distanceText.match(/(\d+)/);
          if (match) {
            settings.maxDistance = parseInt(match[1]);
          }
        }
      } catch {
        settings.maxDistance = 50; // Default
      }

      // Extract gender preferences
      try {
        const genderText = await TinderSelectors.getText(page, [
          'button:has-text("感兴趣的是")',
          'div:has-text("Show Me")',
          'div:has-text("Interested In")',
        ]);
        
        if (genderText) {
          if (genderText.includes('女') || genderText.includes('Women')) {
            settings.showMe = 'women';
          } else if (genderText.includes('男') || genderText.includes('Men')) {
            settings.showMe = 'men';
          } else {
            settings.showMe = 'everyone';
          }
        }
      } catch {
        settings.showMe = 'women'; // Default
      }

      // Extract toggle settings
      const toggleSettings = [
        'globalMode',
        'hideAge',
        'hideDistance',
        'onlyShowWithPhotos',
        'recentlyActive',
      ];

      for (const toggleSetting of toggleSettings) {
        try {
          const isEnabled = await this.getToggleState(toggleSetting);
          (settings as any)[toggleSetting] = isEnabled;
        } catch {
          (settings as any)[toggleSetting] = false;
        }
      }

    } catch (error) {
      console.warn('Failed to extract some settings:', error);
    }

    return settings as TinderSettings;
  }

  private async getToggleState(settingName: string): Promise<boolean> {
    if (!this.browserContext) return false;
    const { page } = this.browserContext;

    const settingMap: Record<string, string[]> = {
      globalMode: ['Global Mode', 'Passport', '全球模式'],
      hideAge: ['Hide Age', '隐藏年龄'],
      hideDistance: ['Hide Distance', '隐藏距离'],
      onlyShowWithPhotos: ['Only show people with photos', '有个人资料'],
      recentlyActive: ['Recently Active', '最近活跃'],
    };

    const settingTexts = settingMap[settingName] || [settingName];

    for (const text of settingTexts) {
      try {
        const settingSection = await page.$(`div:has-text("${text}")`);
        if (!settingSection) continue;

        const toggleSwitch = await settingSection.$('[data-testid="toggle-switch-input"]') ||
                            await page.$(`div:has-text("${text}") ~ * [data-testid="toggle-switch-input"]`);

        if (toggleSwitch) {
          return await toggleSwitch.isChecked();
        }
      } catch {
        continue;
      }
    }

    return false;
  }

  async resetSettings(): Promise<TinderToolResult> {
    try {
      const defaultSettings: TinderSettings = {
        ageRange: { min: 18, max: 55 },
        maxDistance: 50,
        showMe: 'women',
        interestedIn: 'men',
        globalMode: false,
        hideAge: false,
        hideDistance: false,
        onlyShowWithPhotos: false,
        recentlyActive: false,
      };

      return await this.updateSettings(defaultSettings);

    } catch (error) {
      return {
        success: false,
        message: `Failed to reset settings: ${error}`,
        error: {
          code: 'RESET_SETTINGS_FAILED',
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
export const UpdateSettingsSchema = z.object({
  ageRange: z.object({
    min: z.number().min(18).max(100),
    max: z.number().min(18).max(100),
  }).optional(),
  maxDistance: z.number().min(1).max(160).optional(),
  showMe: z.enum(['men', 'women', 'everyone']).optional(),
  interestedIn: z.enum(['men', 'women', 'everyone']).optional(),
  globalMode: z.boolean().optional(),
  hideAge: z.boolean().optional(),
  hideDistance: z.boolean().optional(),
  onlyShowWithPhotos: z.boolean().optional(),
  recentlyActive: z.boolean().optional(),
}).refine(data => {
  if (data.ageRange && data.ageRange.min >= data.ageRange.max) {
    return false;
  }
  return true;
}, {
  message: "Minimum age must be less than maximum age",
});
