import { z } from 'zod';
import { TinderSelectors } from '../utils/selectors.js';
import { BrowserManager } from '../utils/browser.js';
import { TinderMatch, TinderMessage, TinderToolResult, BrowserContext } from '../types/tinder.js';

export class MessagingTools {
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

  async navigateToMessages(): Promise<void> {
    if (!this.browserContext) throw new Error('Browser not initialized');
    const { page } = this.browserContext;

    // Navigate to messages tab
    await TinderSelectors.clickElement(page, [
      TinderSelectors.MESSAGING.MESSAGES_TAB,
      TinderSelectors.NAVIGATION.MESSAGES_TAB,
      'a[href*="/messages"]',
      'button:has-text("Messages")',
    ]);

    await this.browserManager.waitForStability();
    await this.browserManager.handlePopups();
  }

  async getMatches(): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToMessages();
      
      const { page } = this.browserContext!;

      // Navigate to matches/likes section
      await TinderSelectors.clickElement(page, [
        TinderSelectors.MESSAGING.MATCHES_TAB,
        'button:has-text("Matches")',
        'button:has-text("配对")',
      ]);

      await this.browserManager.waitForStability();

      // Extract matches
      const matches = await this.extractMatches();

      return {
        success: true,
        message: `Found ${matches.length} matches`,
        data: { matches },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to get matches: ${error}`,
        error: {
          code: 'GET_MATCHES_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  private async extractMatches(): Promise<TinderMatch[]> {
    if (!this.browserContext) return [];
    const { page } = this.browserContext;

    try {
      const matches: TinderMatch[] = [];

      // Get match cards
      const matchElements = await page.$$('[data-testid="likesYouCard"], button span > div, li a');

      for (let i = 0; i < Math.min(matchElements.length, 20); i++) {
        try {
          const element = matchElements[i];
          
          // Extract match information
          const nameElement = await element.$('div, span, h3');
          const name = nameElement ? await nameElement.textContent() : `Match ${i + 1}`;
          
          // Get profile image
          const imgElement = await element.$('img');
          const photoUrl = imgElement ? await imgElement.getAttribute('src') : '';

          const match: TinderMatch = {
            id: `match_${i}_${Date.now()}`,
            profile: {
              id: `profile_${i}_${Date.now()}`,
              name: name?.trim() || `Match ${i + 1}`,
              photos: photoUrl ? [photoUrl] : [],
            },
            matchedAt: new Date(),
          };

          matches.push(match);
        } catch (error) {
          console.warn(`Failed to extract match ${i}:`, error);
        }
      }

      return matches;
    } catch (error) {
      console.warn('Failed to extract matches:', error);
      return [];
    }
  }

  async sendMessage(matchName: string, message: string): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToMessages();
      
      const { page } = this.browserContext!;

      // Find and click on the match
      const matchFound = await this.selectMatch(matchName);
      if (!matchFound) {
        return {
          success: false,
          message: `Match "${matchName}" not found`,
          error: {
            code: 'MATCH_NOT_FOUND',
            message: `Could not find match with name: ${matchName}`,
            recoverable: true,
          },
        };
      }

      await this.browserManager.waitForStability();

      // Type message
      await TinderSelectors.fillElement(page, [
        TinderSelectors.MESSAGING.CONVERSATION_INPUT,
        'textarea[aria-label*="Type"]',
        'input[placeholder*="Type"]',
      ], message);

      await this.browserManager.waitForStability();

      // Send message
      await TinderSelectors.clickElement(page, [
        TinderSelectors.MESSAGING.SEND_BUTTON,
        'button[aria-label*="Send"]',
        'button.button',
      ]);

      await this.browserManager.waitForStability();

      return {
        success: true,
        message: `Message sent to ${matchName}`,
        data: {
          matchName,
          message,
          sentAt: new Date(),
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to send message: ${error}`,
        error: {
          code: 'SEND_MESSAGE_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async sendEmoji(matchName: string, emoji: string): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToMessages();
      
      const { page } = this.browserContext!;

      // Find and click on the match
      const matchFound = await this.selectMatch(matchName);
      if (!matchFound) {
        return {
          success: false,
          message: `Match "${matchName}" not found`,
          error: {
            code: 'MATCH_NOT_FOUND',
            message: `Could not find match with name: ${matchName}`,
            recoverable: true,
          },
        };
      }

      await this.browserManager.waitForStability();

      // Click emoji button
      await TinderSelectors.clickElement(page, [
        TinderSelectors.MESSAGING.EMOJI_BUTTON,
        'button[aria-label*="Emoji"]',
        'path[aria-label*="表情"]',
      ]);

      await this.browserManager.waitForStability();

      // Select emoji
      await TinderSelectors.clickElement(page, [
        `button:has-text("${emoji}")`,
        `[aria-label="${emoji}"]`,
        TinderSelectors.buildEmojiSelector(emoji)[0],
      ]);

      await this.browserManager.waitForStability();

      // Send emoji
      await TinderSelectors.clickElement(page, TinderSelectors.MESSAGING.SEND_BUTTON);

      await this.browserManager.waitForStability();

      return {
        success: true,
        message: `Emoji ${emoji} sent to ${matchName}`,
        data: {
          matchName,
          emoji,
          sentAt: new Date(),
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to send emoji: ${error}`,
        error: {
          code: 'SEND_EMOJI_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  async shareContact(matchName: string, contactInfo: {
    phoneNumber: string;
    countryCode: string;
    type: 'whatsapp' | 'phone';
  }): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToMessages();
      
      const { page } = this.browserContext!;

      // Find and click on the match
      const matchFound = await this.selectMatch(matchName);
      if (!matchFound) {
        return {
          success: false,
          message: `Match "${matchName}" not found`,
          error: {
            code: 'MATCH_NOT_FOUND',
            message: `Could not find match with name: ${matchName}`,
            recoverable: true,
          },
        };
      }

      await this.browserManager.waitForStability();

      // Click contact share button
      await TinderSelectors.clickElement(page, [
        TinderSelectors.MESSAGING.CONTACT_SHARE,
        'div:has-text("WhatsApp")',
        'div:has-text("分享我的whatsapp")',
      ]);

      await this.browserManager.waitForStability();

      // Select country code
      await TinderSelectors.clickElement(page, [
        TinderSelectors.MESSAGING.COUNTRY_CODE_MODAL,
        'button:has-text("US +1")',
        'div:has-text("US")',
      ]);

      await this.browserManager.waitForStability();

      // Search and select country
      const countryMap: Record<string, string> = {
        '34': 'Spain',
        '1': 'United States',
        '44': 'United Kingdom',
      };

      const countryName = countryMap[contactInfo.countryCode] || contactInfo.countryCode;
      
      try {
        await TinderSelectors.fillElement(page, 'input[aria-label*="Search"]', countryName);
        await page.waitForTimeout(1000);
        await TinderSelectors.clickElement(page, `button:has-text("${countryName}")`);
      } catch {
        // Fallback to direct selection
        await TinderSelectors.clickElement(page, `button:has-text("+${contactInfo.countryCode}")`);
      }

      await this.browserManager.waitForStability();

      // Enter phone number
      await TinderSelectors.fillElement(page, [
        TinderSelectors.MESSAGING.PHONE_INPUT_MODAL,
        'input[aria-label*="Phone"]',
        'input[type="tel"]',
      ], contactInfo.phoneNumber);

      await this.browserManager.waitForStability();

      // Add/Send contact
      await TinderSelectors.clickElement(page, [
        'button:has-text("Add")',
        'button:has-text("Send")',
        'div.c9iqosj:has-text("添加")',
      ]);

      await this.browserManager.waitForStability();

      // Send the contact card
      await TinderSelectors.clickElement(page, TinderSelectors.MESSAGING.SEND_BUTTON);

      await this.browserManager.waitForStability();

      return {
        success: true,
        message: `Contact shared with ${matchName}`,
        data: {
          matchName,
          contactInfo,
          sharedAt: new Date(),
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to share contact: ${error}`,
        error: {
          code: 'SHARE_CONTACT_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  private async selectMatch(matchName: string): Promise<boolean> {
    if (!this.browserContext) return false;
    const { page } = this.browserContext;

    try {
      // Try different approaches to find the match
      const selectors = [
        `button:has-text("${matchName}")`,
        `div:has-text("${matchName}")`,
        `a:has-text("${matchName}")`,
        `span:has-text("${matchName}")`,
        `[aria-label*="${matchName}"]`,
      ];

      for (const selector of selectors) {
        try {
          await TinderSelectors.clickElement(page, selector, 3000);
          return true;
        } catch {
          continue;
        }
      }

      // Fallback: try to find match in list
      const matchElements = await page.$$('[data-testid="likesYouCard"], button span > div, li a');
      
      for (const element of matchElements) {
        try {
          const text = await element.textContent();
          if (text && text.toLowerCase().includes(matchName.toLowerCase())) {
            await element.click();
            return true;
          }
        } catch {
          continue;
        }
      }

      return false;
    } catch (error) {
      console.warn(`Failed to select match ${matchName}:`, error);
      return false;
    }
  }

  async getConversation(matchName: string): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToMessages();
      
      const { page } = this.browserContext!;

      // Find and click on the match
      const matchFound = await this.selectMatch(matchName);
      if (!matchFound) {
        return {
          success: false,
          message: `Match "${matchName}" not found`,
          error: {
            code: 'MATCH_NOT_FOUND',
            message: `Could not find match with name: ${matchName}`,
            recoverable: true,
          },
        };
      }

      await this.browserManager.waitForStability();

      // Extract conversation messages
      const messages = await this.extractMessages();

      return {
        success: true,
        message: `Retrieved ${messages.length} messages from ${matchName}`,
        data: {
          matchName,
          messages,
          messageCount: messages.length,
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to get conversation: ${error}`,
        error: {
          code: 'GET_CONVERSATION_FAILED',
          message: error instanceof Error ? error.message : String(error),
          recoverable: true,
        },
      };
    }
  }

  private async extractMessages(): Promise<TinderMessage[]> {
    if (!this.browserContext) return [];
    const { page } = this.browserContext;

    try {
      const messages: TinderMessage[] = [];

      // Get message elements
      const messageElements = await page.$$([
        TinderSelectors.MESSAGING.MESSAGE_BUBBLE,
        'div[data-testid="message"]',
        'div.message',
        'div[role="listitem"]',
      ].join(', '));

      for (let i = 0; i < messageElements.length; i++) {
        try {
          const element = messageElements[i];
          
          // Extract message content
          const content = await element.textContent();
          if (!content?.trim()) continue;

          // Determine if message is from current user
          const isFromMe = await this.isMessageFromMe(element);

          const message: TinderMessage = {
            id: `message_${i}_${Date.now()}`,
            matchId: 'current_match',
            content: content.trim(),
            sentAt: new Date(), // Would need to extract actual timestamp
            isFromMe,
            type: 'text',
          };

          messages.push(message);
        } catch (error) {
          console.warn(`Failed to extract message ${i}:`, error);
        }
      }

      return messages.reverse(); // Most recent first
    } catch (error) {
      console.warn('Failed to extract messages:', error);
      return [];
    }
  }

  private async isMessageFromMe(messageElement: any): Promise<boolean> {
    try {
      // Check for indicators that message is from current user
      const classList = await messageElement.evaluate((el: Element) => el.className);
      const parentClass = await messageElement.evaluate((el: Element) => el.parentElement?.className || '');
      
      // Common patterns for sent messages
      return classList.includes('sent') || 
             classList.includes('outgoing') || 
             parentClass.includes('sent') ||
             parentClass.includes('right');
    } catch {
      return false;
    }
  }

  async unmatch(matchName: string): Promise<TinderToolResult> {
    try {
      await this.initializeBrowser();
      await this.navigateToMessages();
      
      const { page } = this.browserContext!;

      // Find and click on the match
      const matchFound = await this.selectMatch(matchName);
      if (!matchFound) {
        return {
          success: false,
          message: `Match "${matchName}" not found`,
          error: {
            code: 'MATCH_NOT_FOUND',
            message: `Could not find match with name: ${matchName}`,
            recoverable: true,
          },
        };
      }

      await this.browserManager.waitForStability();

      // Click match options/settings
      await TinderSelectors.clickElement(page, [
        'button[aria-label*="Options"]',
        'button[aria-label*="Settings"]',
        'div.Mend\\(16px\\)--ml svg',
        'svg[aria-label*="配对选项"]',
      ]);

      await this.browserManager.waitForStability();

      // Click unmatch option
      await TinderSelectors.clickElement(page, [
        'button:has-text("Unmatch")',
        'div:has-text("Unmatch")',
        'button:has-text("取消配对")',
      ]);

      await this.browserManager.waitForStability();

      // Confirm unmatch
      await TinderSelectors.clickElement(page, [
        'button:has-text("Confirm")',
        'button:has-text("Yes")',
        'button:has-text("确认")',
      ]);

      await this.browserManager.waitForStability();

      return {
        success: true,
        message: `Successfully unmatched with ${matchName}`,
        data: {
          matchName,
          unmatchedAt: new Date(),
        },
      };

    } catch (error) {
      return {
        success: false,
        message: `Failed to unmatch: ${error}`,
        error: {
          code: 'UNMATCH_FAILED',
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
export const SendMessageSchema = z.object({
  matchName: z.string().min(1, 'Match name is required'),
  message: z.string().min(1, 'Message content is required').max(500, 'Message too long'),
});

export const SendEmojiSchema = z.object({
  matchName: z.string().min(1, 'Match name is required'),
  emoji: z.string().min(1, 'Emoji is required'),
});

export const ShareContactSchema = z.object({
  matchName: z.string().min(1, 'Match name is required'),
  contactInfo: z.object({
    phoneNumber: z.string().min(1, 'Phone number is required'),
    countryCode: z.string().min(1, 'Country code is required'),
    type: z.enum(['whatsapp', 'phone']),
  }),
});

export const GetConversationSchema = z.object({
  matchName: z.string().min(1, 'Match name is required'),
});

export const UnmatchSchema = z.object({
  matchName: z.string().min(1, 'Match name is required'),
});
