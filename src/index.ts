#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool
} from "@modelcontextprotocol/sdk/types.js";
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import * as fs from 'fs/promises';
import * as path from 'path';

// Browser session management
let context: BrowserContext | null = null;
let page: Page | null = null;

const server = new Server({
  name: 'tinder-mcp',
  version: '2.0.0',
  description: 'Flexible browser automation for Tinder'
}, {
  capabilities: {
    tools: {}
  }
});

// Flexible browser automation tools
const TOOLS: Tool[] = [
  {
    name: 'browser_open',
    description: 'Open browser and navigate to a URL (starts a persistent session)',
    inputSchema: {
      type: 'object',
      properties: {
        url: { 
          type: 'string', 
          description: 'URL to navigate to (default: https://tinder.com)',
          default: 'https://tinder.com'
        },
        headless: { 
          type: 'boolean', 
          description: 'Run browser in headless mode',
          default: false
        }
      }
    }
  },
  {
    name: 'browser_navigate',
    description: 'Navigate to a URL in the current browser session',
    inputSchema: {
      type: 'object',
      properties: {
        url: { type: 'string', description: 'URL to navigate to' }
      },
      required: ['url']
    }
  },
  {
    name: 'browser_click',
    description: 'Click on an element by selector or text',
    inputSchema: {
      type: 'object',
      properties: {
        selector: { type: 'string', description: 'CSS selector, text, or aria-label to click' },
        timeout: { type: 'number', description: 'Timeout in milliseconds', default: 5000 }
      },
      required: ['selector']
    }
  },
  {
    name: 'browser_type',
    description: 'Type text into an input field',
    inputSchema: {
      type: 'object',
      properties: {
        selector: { type: 'string', description: 'CSS selector for the input field' },
        text: { type: 'string', description: 'Text to type' },
        clear: { type: 'boolean', description: 'Clear field before typing', default: true }
      },
      required: ['selector', 'text']
    }
  },
  {
    name: 'browser_wait',
    description: 'Wait for an element or condition',
    inputSchema: {
      type: 'object',
      properties: {
        selector: { type: 'string', description: 'CSS selector to wait for (optional)' },
        timeout: { type: 'number', description: 'Timeout in milliseconds', default: 5000 },
        state: { 
          type: 'string', 
          enum: ['visible', 'hidden', 'attached', 'detached'],
          description: 'State to wait for',
          default: 'visible'
        }
      }
    }
  },
  {
    name: 'browser_screenshot',
    description: 'Take a screenshot of the current page',
    inputSchema: {
      type: 'object',
      properties: {
        fullPage: { type: 'boolean', description: 'Capture full page', default: false },
        path: { type: 'string', description: 'Optional path to save screenshot' }
      }
    }
  },
  {
    name: 'browser_get_text',
    description: 'Get text content from elements',
    inputSchema: {
      type: 'object',
      properties: {
        selector: { type: 'string', description: 'CSS selector to get text from' },
        all: { type: 'boolean', description: 'Get all matching elements', default: false }
      },
      required: ['selector']
    }
  },
  {
    name: 'browser_status',
    description: 'Get current browser status and page info',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'browser_close',
    description: 'Close the browser session',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'browser_press_key',
    description: 'Press keyboard keys (like Enter, Escape, ArrowRight)',
    inputSchema: {
      type: 'object',
      properties: {
        key: { type: 'string', description: 'Key to press (e.g., Enter, Escape, ArrowRight, ArrowLeft)' }
      },
      required: ['key']
    }
  },
  {
    name: 'browser_swipe',
    description: 'Perform swipe gestures (for Tinder cards)',
    inputSchema: {
      type: 'object',
      properties: {
        direction: { 
          type: 'string', 
          enum: ['left', 'right', 'up', 'down'],
          description: 'Swipe direction'
        },
        distance: { type: 'number', description: 'Swipe distance in pixels', default: 200 }
      },
      required: ['direction']
    }
  },
  {
    name: 'browser_find_elements',
    description: 'Find all elements matching a selector and get their info',
    inputSchema: {
      type: 'object',
      properties: {
        selector: { type: 'string', description: 'CSS selector to find' },
        attributes: { 
          type: 'array',
          items: { type: 'string' },
          description: 'Attributes to extract from elements',
          default: ['text', 'href', 'class']
        }
      },
      required: ['selector']
    }
  }
];

// Tool implementations
async function openBrowser(args: any) {
  try {
    // Close existing session if any
    if (context) {
      await context.close();
      context = null;
      page = null;
    }

    // Create persistent context for session management
    const userDataDir = process.env.TINDER_USER_DATA_DIR || './tinder-session';
    context = await chromium.launchPersistentContext(userDataDir, {
      headless: args.headless || false,
      viewport: { width: 1280, height: 720 },
      locale: 'en-US',
      permissions: ['geolocation', 'notifications'],
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    });

    page = await context.newPage();
    await page.goto(args.url || 'https://tinder.com');
    await page.waitForTimeout(2000);

    const url = page.url();
    const title = await page.title();

    return {
      content: [{
        type: 'text',
        text: `✅ Browser opened\nURL: ${url}\nTitle: ${title}\n\nSession saved to: ${userDataDir}`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Failed to open browser: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function navigate(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    await page.goto(args.url);
    await page.waitForLoadState('domcontentloaded');
    
    return {
      content: [{
        type: 'text',
        text: `✅ Navigated to: ${args.url}\nTitle: ${await page.title()}`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Navigation failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function click(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    // Try different selector strategies
    let element = null;
    
    // Try as CSS selector first
    try {
      element = await page.waitForSelector(args.selector, { 
        timeout: args.timeout || 5000,
        state: 'visible'
      });
    } catch {
      // Try as text
      element = await page.locator(`text="${args.selector}"`).first();
      if (!await element.isVisible({ timeout: 1000 }).catch(() => false)) {
        // Try as partial text
        element = await page.locator(`text=/${args.selector}/i`).first();
        if (!await element.isVisible({ timeout: 1000 }).catch(() => false)) {
          // Try as aria-label
          element = await page.locator(`[aria-label*="${args.selector}" i]`).first();
        }
      }
    }

    if (element) {
      await element.click();
      return {
        content: [{
          type: 'text',
          text: `✅ Clicked: ${args.selector}`
        }]
      };
    } else {
      throw new Error(`Element not found: ${args.selector}`);
    }
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Click failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function type(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    const element = await page.waitForSelector(args.selector, { 
      timeout: 5000,
      state: 'visible'
    });

    if (args.clear) {
      await element.fill('');
    }
    
    await element.type(args.text, { delay: 50 });
    
    return {
      content: [{
        type: 'text',
        text: `✅ Typed "${args.text}" into ${args.selector}`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Type failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function wait(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    if (args.selector) {
      await page.waitForSelector(args.selector, {
        timeout: args.timeout || 5000,
        state: args.state || 'visible'
      });
      return {
        content: [{
          type: 'text',
          text: `✅ Element found: ${args.selector} (${args.state || 'visible'})`
        }]
      };
    } else {
      await page.waitForTimeout(args.timeout || 5000);
      return {
        content: [{
          type: 'text',
          text: `✅ Waited ${args.timeout || 5000}ms`
        }]
      };
    }
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Wait failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function screenshot(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    const screenshotPath = args.path || `screenshot-${Date.now()}.png`;
    const buffer = await page.screenshot({
      fullPage: args.fullPage || false,
      path: screenshotPath
    });

    return {
      content: [{
        type: 'text',
        text: `✅ Screenshot saved to: ${screenshotPath}\nSize: ${buffer.length} bytes`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Screenshot failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function getText(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    if (args.all) {
      const texts = await page.$$eval(args.selector, elements => 
        elements.map(el => el.textContent?.trim()).filter(text => text)
      );
      return {
        content: [{
          type: 'text',
          text: `Found ${texts.length} elements:\n${texts.join('\n')}`
        }]
      };
    } else {
      const text = await page.textContent(args.selector);
      return {
        content: [{
          type: 'text',
          text: `Text: ${text || '(empty)'}`
        }]
      };
    }
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Get text failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function getStatus() {
  if (!page || !context) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session active'
      }]
    };
  }

  try {
    const url = page.url();
    const title = await page.title();
    const cookies = await context.cookies();
    
    return {
      content: [{
        type: 'text',
        text: `✅ Browser Status:
URL: ${url}
Title: ${title}
Cookies: ${cookies.length} stored
Session: Active`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Status check failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function closeBrowser() {
  try {
    if (context) {
      await context.close();
      context = null;
      page = null;
    }
    
    return {
      content: [{
        type: 'text',
        text: '✅ Browser closed. Session data saved for next time.'
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Close failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function pressKey(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    await page.keyboard.press(args.key);
    return {
      content: [{
        type: 'text',
        text: `✅ Pressed key: ${args.key}`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Key press failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function swipe(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    const viewport = page.viewportSize();
    if (!viewport) throw new Error('No viewport size');

    const centerX = viewport.width / 2;
    const centerY = viewport.height / 2;
    const distance = args.distance || 200;

    let endX = centerX;
    let endY = centerY;

    switch (args.direction) {
      case 'left':
        endX = centerX - distance;
        break;
      case 'right':
        endX = centerX + distance;
        break;
      case 'up':
        endY = centerY - distance;
        break;
      case 'down':
        endY = centerY + distance;
        break;
    }

    await page.mouse.move(centerX, centerY);
    await page.mouse.down();
    await page.mouse.move(endX, endY, { steps: 10 });
    await page.mouse.up();

    return {
      content: [{
        type: 'text',
        text: `✅ Swiped ${args.direction} (${distance}px)`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Swipe failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function findElements(args: any) {
  if (!page) {
    return {
      content: [{
        type: 'text',
        text: '❌ No browser session. Run browser_open first.'
      }],
      isError: true
    };
  }

  try {
    const elements = await page.$$eval(args.selector, (els, attrs) => {
      return els.map(el => {
        const result: any = {};
        attrs.forEach((attr: string) => {
          if (attr === 'text') {
            result.text = el.textContent?.trim();
          } else {
            result[attr] = el.getAttribute(attr);
          }
        });
        return result;
      });
    }, args.attributes || ['text', 'href', 'class']);

    return {
      content: [{
        type: 'text',
        text: `Found ${elements.length} elements:\n${JSON.stringify(elements, null, 2)}`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Find elements failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

// Request handlers
server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  switch (name) {
    case 'browser_open':
      return await openBrowser(args);
    case 'browser_navigate':
      return await navigate(args);
    case 'browser_click':
      return await click(args);
    case 'browser_type':
      return await type(args);
    case 'browser_wait':
      return await wait(args);
    case 'browser_screenshot':
      return await screenshot(args);
    case 'browser_get_text':
      return await getText(args);
    case 'browser_status':
      return await getStatus();
    case 'browser_close':
      return await closeBrowser();
    case 'browser_press_key':
      return await pressKey(args);
    case 'browser_swipe':
      return await swipe(args);
    case 'browser_find_elements':
      return await findElements(args);
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Tinder MCP Server running - Flexible browser automation');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});