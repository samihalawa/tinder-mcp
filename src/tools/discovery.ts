import { z } from 'zod';
import { TinderSelectors } from '../utils/selectors.js';
import { BrowserManager } from '../utils/browser.js';
import { SwipeAction, DiscoveryCard, BoostStatus, SuperLikeStatus, TinderToolResult, BrowserContext } from '../types/tinder.js';

export class DiscoveryTools {
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

  async navigateToDiscovery(): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    // Navigate to discovery/explore tab
    await TinderSelectors.clickElement(page, [
      TinderSelectors.NAVIGATION.DISCOVERY_TAB,
      'a[href*="/recs"]',
      'button:has-text("Explore")',
      'svg[aria-label*="探索"]',
    ]);

    await this.browserManager.waitForStability();
    await this.browserManager.handlePopups();
  }

  async swipe(action: 'like' | 'pass' | 'superlike'): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToDiscovery();
      
      const { page } = this.browserContext!;

      // Get current profile info before swiping
      const currentProfile = await this.getCurrentProfile();

      // Perform swipe action
      let selector: string[];
      switch (action) {
        case 'like':
          selector = [
            TinderSelectors.DISCOVERY.LIKE_BUTTON,
            'div:nth-of-type(4) span.gamepad-icon-wrapper',
            'button[aria-label*="Like"]',
          ];
          break;
        case 'pass':
          selector = [
            TinderSelectors.DISCOVERY.PASS_BUTTON,
            'div:nth-of-type(2) span.gamepad-icon-wrapper',
            'button[aria-label*="Pass"]',
          ];
          break;
        case 'superlike':
          selector = [
            TinderSelectors.DISCOVERY.SUPER_LIKE_BUTTON,
            'div:nth-of-type(3) span.gamepad-icon-wrapper',
            'button[aria-label*="Super Like"]',
          ];
          break;
      }

      await TinderSelectors.clickElement(page, selector);
      await this.browserManager.waitForStability();

      // Check for match modal
      const isMatch = await this.checkForMatch();
      
      if (isMatch) {
        await this.handleMatchModal();
      }

      // Handle any other popups
      await this.browserManager.handlePopups();

      const swipeResult: SwipeAction = {
        profileId: currentProfile.id || 'unknown',
        action,
        timestamp: new Date(),
        isMatch,
      };

      return {
        success: true,
        message: `Successfully ${action}d profile${isMatch ? ' - It\'s a match!' : ''}`,
        data: {
          swipeAction: swipeResult,
          profile: currentProfile,
          isMatch,
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Swipe ${action} failed: ${error}`,
        error: {
          code: 'SWIPE_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async autoSwipe(options: {
    count: number;
    likeRatio: number; // 0-1, percentage of likes vs passes
    useSuperLikes: boolean;
    superLikeRatio: number; // 0-1, percentage of super likes vs regular likes
    delayBetweenSwipes: number; // milliseconds
  }): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToDiscovery();

      const results: SwipeAction[] = [];
      let matches = 0;

      for (let i = 0; i < options.count; i++) {
        try {
          // Determine swipe action based on ratios
          let action: 'like' | 'pass' | 'superlike';
          
          const random = Math.random();
          if (random < options.likeRatio) {
            // Should like - determine if super like
            if (options.useSuperLikes && Math.random() < options.superLikeRatio) {
              action = 'superlike';
            } else {
              action = 'like';
            }
          } else {
            action = 'pass';
          }

          // Perform swipe
          const swipeResult = await this.swipe(action);
          
          if (swipeResult.success && swipeResult.data) {
            results.push(swipeResult.data.swipeAction);
            if (swipeResult.data.isMatch) {
              matches++;
            }
          }

          // Wait between swipes to avoid detection
          if (i < options.count - 1) {
            await this.browserContext!.page.waitForTimeout(options.delayBetweenSwipes);
          }

        } catch (error) {
          console.warn(`Swipe ${i + 1} failed:`, error);
          // Continue with next swipe
        }
      }

      return {
        success: true,
        message: `Auto-swipe completed: ${results.length} swipes, ${matches} matches`,
        data: {
          totalSwipes: results.length,
          matches,
          swipeActions: results,
          stats: {
            likes: results.filter(r => r.action === 'like').length,
            passes: results.filter(r => r.action === 'pass').length,
            superLikes: results.filter(r => r.action === 'superlike').length,
          },
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Auto-swipe failed: ${error}`,
        error: {
          code: 'AUTO_SWIPE_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async getCurrentProfile(): Promise<DiscoveryCard['profile']> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    try {
      // Extract profile information from current card
      const profile: any = {
        id: `profile_${Date.now()}`, // Generate temporary ID
        photos: [],
      };

      // Get name and age
      try {
        const nameAge = await TinderSelectors.getText(page, [
          'h1[data-testid="profile-name"]',
          'div.StretchedBox h1',
          'div:has-text("已验证") + div',
        ]);
        if (nameAge) {
          const match = nameAge.match(/^(.+?)\s*(\d+)$/);
          if (match) {
            profile.name = match[1].trim();
            profile.age = parseInt(match[2]);
          } else {
            profile.name = nameAge;
          }
        }
      } catch {
        profile.name = 'Unknown';
      }

      // Get distance
      try {
        const distance = await TinderSelectors.getText(page, [
          'div:has-text("km away")',
          'div:has-text("miles away")',
          'span:has-text("公里")',
        ]);
        if (distance) {
          const distanceMatch = distance.match(/(\d+)/);
          if (distanceMatch) {
            profile.distance = parseInt(distanceMatch[1]);
          }
        }
      } catch {
        // Distance not available
      }

      // Get bio/description
      try {
        const bio = await TinderSelectors.getText(page, [
          'div[data-testid="profile-bio"]',
          'div.StretchedBox p',
          'div:has-text("About")',
        ]);
        if (bio) {
          profile.bio = bio;
        }
      } catch {
        // Bio not available
      }

      // Check if verified
      try {
        await TinderSelectors.findElement(page, [
          'div:has-text("已验证")',
          'div:has-text("Verified")',
          '[data-testid="verified-badge"]',
        ], 1000);
        profile.verified = true;
      } catch {
        profile.verified = false;
      }

      // Get photo count
      try {
        const photoElements = await page.$$('img[src*="tinder"], img[src*="profile"]');
        profile.photos = photoElements.map((_: any, index: number) => `photo_${index}`);
      } catch {
        profile.photos = ['photo_0'];
      }

      return profile;

    } catch (error) {
      console.warn('Failed to extract profile info:', error);
      return {
        id: `profile_${Date.now()}`,
        name: 'Unknown',
        photos: [],
      };
    }
  }

  private async checkForMatch(): Promise<boolean> {
    if (!this.browserContext) return false;
    const { page } = this.browserContext;

    try {
      // Look for match modal
      await page.waitForSelector([
        TinderSelectors.DISCOVERY.MATCH_MODAL,
        'div:has-text("It\'s a Match")',
        'div:has-text("配对成功")',
        'h1:has-text("Match")',
      ].join(', '), { timeout: 3000 });
      
      return true;
    } catch {
      return false;
    }
  }

  private async handleMatchModal(): Promise<void> {
    if (!this.browserContext) return;
    const { page } = this.browserContext;

    try {
      // Wait a moment to see the match
      await page.waitForTimeout(2000);

      // Close match modal or continue
      await TinderSelectors.clickElement(page, [
        'button:has-text("Continue Swiping")',
        'button:has-text("Keep Swiping")',
        'button:has-text("Send Message")',
        TinderSelectors.DISCOVERY.CLOSE_MODAL,
      ], 5000);

      await this.browserManager.waitForStability();
    } catch (error) {
      console.warn('Failed to handle match modal:', error);
    }
  }

  async useBoost(): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      const { page } = this.browserContext!;

      // Navigate to boost section
      await TinderSelectors.clickElement(page, [
        TinderSelectors.PREMIUM.BOOST_BUTTON,
        'button:has-text("Boost")',
        'nav button:nth-of-type(1)',
      ]);

      await this.browserManager.waitForStability();

      // Confirm boost usage
      await TinderSelectors.clickElement(page, [
        TinderSelectors.PREMIUM.BOOST_CONFIRM,
        'button:has-text("Use Boost")',
        'div.c9iqosj:has-text("确定")',
      ]);

      await this.browserManager.waitForStability();

      // Get boost status
      const boostStatus = await this.getBoostStatus();

      return {
        success: true,
        message: 'Boost activated successfully',
        data: {
          boostActivated: true,
          boostStatus,
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to use boost: ${error}`,
        error: {
          code: 'BOOST_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async getBoostStatus(): Promise<BoostStatus> {
    if (!this.browserContext) {
      return { isActive: false, boostsRemaining: 0 };
    }

    const { page } = this.browserContext;

    try {
      // Check boost count
      const boostCountText = await TinderSelectors.getText(page, [
        TinderSelectors.PREMIUM.BOOST_COUNT,
        'label:has-text("x")',
        'div[data-testid="boost-count"]',
      ]);

      let boostsRemaining = 0;
      if (boostCountText) {
        const match = boostCountText.match(/(\d+)/);
        if (match) {
          boostsRemaining = parseInt(match[1]);
        }
      }

      // Check if boost is currently active
      const isActive = await page.$('div:has-text("Boost Active")') !== null;

      return {
        isActive,
        boostsRemaining,
      };

    } catch (error) {
      console.warn('Failed to get boost status:', error);
      return { isActive: false, boostsRemaining: 0 };
    }
  }

  async getSuperLikeStatus(): Promise<SuperLikeStatus> {
    if (!this.browserContext) {
      return { superLikesRemaining: 0, dailyLimit: 1 };
    }

    const { page } = this.browserContext;

    try {
      // Check super like count
      const superLikeCountText = await TinderSelectors.getText(page, [
        TinderSelectors.PREMIUM.SUPER_LIKE_COUNT,
        'div:has-text("Super Like")',
        'label:has-text("剩余")',
      ]);

      let superLikesRemaining = 0;
      if (superLikeCountText) {
        const match = superLikeCountText.match(/(\d+)/);
        if (match) {
          superLikesRemaining = parseInt(match[1]);
        }
      }

      return {
        superLikesRemaining,
        dailyLimit: 1, // Default for free users
      };

    } catch (error) {
      console.warn('Failed to get super like status:', error);
      return { superLikesRemaining: 0, dailyLimit: 1 };
    }
  }

  async viewProfile(direction: 'next' | 'previous' = 'next'): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToDiscovery();
      
      const { page } = this.browserContext!;

      // Navigate through profile photos
      const selector = direction === 'next' 
        ? TinderSelectors.DISCOVERY.NEXT_PHOTO
        : TinderSelectors.DISCOVERY.PREV_PHOTO;

      await TinderSelectors.clickElement(page, selector);
      await this.browserManager.waitForStability();

      const profile = await this.getCurrentProfile();

      return {
        success: true,
        message: `Viewed ${direction} photo`,
        data: { profile },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to view profile: ${error}`,
        error: {
          code: 'VIEW_PROFILE_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async rewind(): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToDiscovery();
      
      const { page } = this.browserContext!;

      // Click rewind button
      await TinderSelectors.clickElement(page, [
        TinderSelectors.DISCOVERY.REWIND_BUTTON,
        'div:nth-of-type(1) span.gamepad-icon-wrapper',
        'button[aria-label*="Rewind"]',
      ]);

      await this.browserManager.waitForStability();

      return {
        success: true,
        message: 'Successfully rewound last swipe',
        data: { rewound: true },
      };

    } catch (error) {
      return {
        success: false,
        message: `Rewind failed: ${error}`,
        error: {
          code: 'REWIND_FAILED',
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
export const SwipeSchema = z.object({
  action: z.enum(['like', 'pass', 'superlike']),
});

export const AutoSwipeSchema = z.object({
  count: z.number().min(1).max(100),
  likeRatio: z.number().min(0).max(1),
  useSuperLikes: z.boolean().default(false),
  superLikeRatio: z.number().min(0).max(1).default(0.1),
  delayBetweenSwipes: z.number().min(1000).max(10000).default(3000),
});

export const ViewProfileSchema = z.object({
  direction: z.enum(['next', 'previous']).default('next'),
});
