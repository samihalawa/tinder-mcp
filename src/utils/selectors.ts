import { Page } from 'playwright';

export class TinderSelectors {
  // Authentication selectors
  static readonly AUTH = {
    PHONE_INPUT: '#phone_number',
    COUNTRY_SELECTOR: 'div.Bdrsbstart\\(0\\)\\!',
    COUNTRY_SEARCH: 'input[placeholder*="Search"], input[aria-label*="Search"]',
    COUNTRY_OPTION: (country: string) => `button:has-text("${country}")`,
    LOGIN_BUTTON: 'button:has-text("Continue"), button:has-text("Log in")',
    OTP_INPUT: (digit: number) => `input[aria-label*="digit ${digit}"], input:nth-of-type(${digit})`,
    OTP_CONTAINER: 'div.D\\(f\\) > div:nth-of-type(1) input',
    APPLE_ID_EMAIL: '#account_name_text_field',
    APPLE_ID_PASSWORD: '#password_text_field',
    APPLE_ID_CONTINUE: '#sign-in',
    APPLE_ID_2FA: 'input[aria-label*="位数"]',
    TRUST_BROWSER: 'button:has-text("Trust"), button:has-text("信任")',
  };

  // Profile management selectors
  static readonly PROFILE = {
    PHOTO_UPLOAD: 'input[type="file"], button:has-text("Add Photo")',
    PHOTO_CONTAINER: 'div[data-testid="photo-slot"], li:nth-of-type(1) path',
    BIO_INPUT: 'textarea[aria-label*="About"], #\\:r4l\\:',
    NAME_INPUT: 'input[aria-label*="Name"]',
    JOB_INPUT: '#job_title',
    COMPANY_INPUT: '#company',
    SCHOOL_INPUT: '#\\:r5p\\:',
    LOCATION_INPUT: '#\\:r6d\\:',
    HEIGHT_INPUT: 'input[aria-label*="厘米"], input[type="number"]',
    INTERESTS_CONTAINER: 'fieldset div[role="button"]',
    LANGUAGES_CONTAINER: '#section-de_37 > div',
    SAVE_BUTTON: 'button:has-text("Save"), button:has-text("保存")',
    DONE_BUTTON: 'button:has-text("Done"), button:has-text("完成")',
    PREVIEW_BUTTON: 'button:has-text("Preview"), button:has-text("预览")',
  };

  // Discovery and swiping selectors
  static readonly DISCOVERY = {
    CARD_CONTAINER: 'div.Wc\\(\\$transform\\) section div:nth-of-type(1) > div',
    PROFILE_PHOTO: '#carousel-item-0 > div, div[aria-label*="个人资料照片"]',
    NEXT_PHOTO: 'button.End\\(0\\) > svg, button[aria-label*="下一张照片"]',
    PREV_PHOTO: 'button.Start\\(0\\) > svg, button[aria-label*="上一张照片"]',
    LIKE_BUTTON: 'div:nth-of-type(4) span.gamepad-icon-wrapper, button[aria-label*="Like"]',
    PASS_BUTTON: 'div:nth-of-type(2) span.gamepad-icon-wrapper, button[aria-label*="Pass"]',
    SUPER_LIKE_BUTTON: 'div:nth-of-type(3) span.gamepad-icon-wrapper, button[aria-label*="Super Like"]',
    REWIND_BUTTON: 'div:nth-of-type(1) span.gamepad-icon-wrapper, button[aria-label*="Rewind"]',
    PROFILE_INFO: 'div.StretchedBox > div, div[data-testid="profile-info"]',
    MATCH_MODAL: 'div[data-testid="match-modal"], div:has-text("It\'s a Match")',
    CLOSE_MODAL: 'button[aria-label*="Close"], svg[aria-label*="关闭"]',
  };

  // Messaging selectors
  static readonly MESSAGING = {
    MATCHES_TAB: '#o609274768, button:has-text("Matches"), button:has-text("配对")',
    MESSAGES_TAB: '#o775463182, button:has-text("Messages"), button:has-text("消息")',
    MATCH_CARD: '[data-testid="likesYouCard"], button span > div',
    CONVERSATION_INPUT: '#o1224954181, textarea[aria-label*="Type a message"], input[placeholder*="Type"]',
    SEND_BUTTON: 'button[aria-label*="Send"], button:has-text("Send"), button.button',
    EMOJI_BUTTON: 'button[aria-label*="Emoji"], path[aria-label*="表情"]',
    EMOJI_PICKER: 'div[data-testid="emoji-picker"], button:has-text("🥰")',
    MESSAGE_BUBBLE: 'div[data-testid="message"], div.message',
    CONTACT_SHARE: 'div:has-text("WhatsApp"), div:has-text("分享我的whatsapp")',
    PHONE_INPUT_MODAL: '#contact-card-input',
    COUNTRY_CODE_MODAL: 'button:has-text("+34"), button:has-text("Spain")',
  };

  // Settings selectors
  static readonly SETTINGS = {
    PROFILE_BUTTON: 'nav a > div > div, button[aria-label*="Profile"]',
    SETTINGS_BUTTON: 'button[aria-label*="Settings"], nav button',
    AGE_MIN_SLIDER: '[data-testid="min-age-handle"]',
    AGE_MAX_SLIDER: '[data-testid="max-age-handle"]',
    DISTANCE_SLIDER: '[data-testid="distance-handle"]',
    TOGGLE_SWITCH: '[data-testid="toggle-switch-input"]',
    GENDER_PREFERENCE: 'li label, div[role="radio"]',
    SAVE_SETTINGS: 'button:has-text("Save"), div.c9iqosj',
    BACK_BUTTON: 'button[aria-label*="Back"], path[aria-label*="返回"]',
  };

  // Boost and premium features
  static readonly PREMIUM = {
    BOOST_BUTTON: 'button:has-text("Boost"), nav button:nth-of-type(1)',
    BOOST_CONFIRM: 'button:has-text("确定"), button:has-text("Confirm")',
    SUPER_LIKE_COUNT: 'div:has-text("Super Like"), label:has-text("x")',
    BOOST_COUNT: 'label:has-text("x"), div[data-testid="boost-count"]',
    PREMIUM_MODAL: 'div[data-testid="premium-modal"], div:has-text("Tinder Gold")',
    CLOSE_PREMIUM: 'button:has-text("Not now"), button:has-text("算了")',
  };

  // Navigation selectors
  static readonly NAVIGATION = {
    DISCOVERY_TAB: 'a[href="/app/recs"], button:has-text("Explore")',
    LIKES_TAB: 'a[href="/app/likes-you"], button:has-text("Likes")',
    MESSAGES_TAB: 'a[href="/app/messages"], button:has-text("Messages")',
    PROFILE_TAB: 'a[href="/app/profile"], button:has-text("Profile")',
    BACK_TO_DISCOVERY: 'button[aria-label*="返回探索页面"]',
  };

  // Utility methods for finding elements with fallbacks
  static async findElement(page: Page, selectors: string | string[], timeout = 10000) {
    const selectorList = Array.isArray(selectors) ? selectors : [selectors];
    
    for (const selector of selectorList) {
      try {
        const element = await page.waitForSelector(selector, { timeout: timeout / selectorList.length });
        if (element) return element;
      } catch (error) {
        continue;
      }
    }
    
    throw new Error(`None of the selectors found: ${selectorList.join(', ')}`);
  }

  static async clickElement(page: Page, selectors: string | string[], timeout = 10000) {
    const element = await this.findElement(page, selectors, timeout);
    await element.click();
    return element;
  }

  static async fillElement(page: Page, selectors: string | string[], value: string, timeout = 10000) {
    const element = await this.findElement(page, selectors, timeout);
    await element.fill(value);
    return element;
  }

  static async getText(page: Page, selectors: string | string[], timeout = 10000) {
    const element = await this.findElement(page, selectors, timeout);
    return await element.textContent();
  }

  static async waitForNavigation(page: Page, expectedUrl?: string, timeout = 30000) {
    if (expectedUrl) {
      await page.waitForURL(expectedUrl, { timeout });
    } else {
      await page.waitForLoadState('networkidle', { timeout });
    }
  }

  // Dynamic selector builders
  static buildCountrySelector(countryName: string) {
    return [
      `button:has-text("${countryName}")`,
      `div:has-text("${countryName}")`,
      `[aria-label*="${countryName}"]`,
    ];
  }

  static buildOTPSelector(position: number) {
    return [
      `input[aria-label*="digit ${position}"]`,
      `input:nth-of-type(${position})`,
      `div.D\\(f\\) > div:nth-of-type(${position}) input`,
    ];
  }

  static buildEmojiSelector(emoji: string) {
    return [
      `button:has-text("${emoji}")`,
      `[aria-label="${emoji}"]`,
      `div:has-text("${emoji}")`,
    ];
  }
}
