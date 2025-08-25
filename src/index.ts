#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool
} from "@modelcontextprotocol/sdk/types.js";
import { chromium, Browser, Page } from 'playwright';

// Browser management
let browser: Browser | null = null;
let page: Page | null = null;

const server = new Server({
  name: 'tinder-mcp',
  version: '1.0.0'
}, {
  capabilities: {
    tools: {}
  }
});

// Simplified tool definitions - only essential tools
const TOOLS: Tool[] = [
  {
    name: 'tinder_login',
    description: 'Login to Tinder with email and password',
    inputSchema: {
      type: 'object',
      properties: {
        email: { type: 'string', description: 'Your email address' },
        password: { type: 'string', description: 'Your password' }
      },
      required: ['email', 'password']
    }
  },
  {
    name: 'tinder_check_status',
    description: 'Check if logged in',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_swipe',
    description: 'Swipe on profiles',
    inputSchema: {
      type: 'object',
      properties: {
        action: { type: 'string', enum: ['like', 'pass'], description: 'Swipe action' },
        count: { type: 'number', minimum: 1, maximum: 20, default: 1, description: 'Number of swipes' }
      },
      required: ['action']
    }
  },
  {
    name: 'tinder_get_matches',
    description: 'Get your matches',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'tinder_send_message',
    description: 'Send message to a match',
    inputSchema: {
      type: 'object',
      properties: {
        matchName: { type: 'string', description: 'Name of the match' },
        message: { type: 'string', description: 'Message to send' }
      },
      required: ['matchName', 'message']
    }
  }
];

// Browser utilities
async function getBrowser() {
  if (!browser) {
    browser = await chromium.launch({
      headless: false, // Show browser for debugging
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }
  return browser;
}

async function getPage() {
  if (!page) {
    const browserInstance = await getBrowser();
    const context = await browserInstance.newContext({
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      viewport: { width: 1280, height: 720 }
    });
    page = await context.newPage();
  }
  return page;
}

// Simple login implementation
async function login(args: any) {
  const pageInstance = await getPage();
  
  try {
    await pageInstance.goto('https://tinder.com');
    await pageInstance.waitForTimeout(3000);
    
    // Click login button
    const loginButton = await pageInstance.$('button:has-text("Log in"), a:has-text("Log in")');
    if (loginButton) {
      await loginButton.click();
      await pageInstance.waitForTimeout(2000);
    }
    
    // Look for email option
    const emailOption = await pageInstance.$('div:has-text("Log in with email"), button:has-text("Log in with email")');
    if (emailOption) {
      await emailOption.click();
      await pageInstance.waitForTimeout(2000);
    }
    
    // Fill credentials
    await pageInstance.fill('input[type="email"], input[name="email"]', args.email);
    await pageInstance.waitForTimeout(500);
    await pageInstance.fill('input[type="password"], input[name="password"]', args.password);
    await pageInstance.waitForTimeout(500);
    
    // Submit
    const submitButton = await pageInstance.$('button:has-text("Log in"), button[type="submit"]');
    if (submitButton) {
      await submitButton.click();
    }
    
    await pageInstance.waitForTimeout(5000);
    
    return {
      content: [{
        type: 'text',
        text: `Login attempt completed. Current URL: ${pageInstance.url()}`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Login failed: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function checkStatus() {
  const pageInstance = await getPage();
  
  try {
    const currentUrl = pageInstance.url();
    const isLoggedIn = currentUrl.includes('app/recs') || currentUrl.includes('app/matches');
    
    return {
      content: [{
        type: 'text',
        text: `Status: ${isLoggedIn ? 'Logged in' : 'Not logged in'}\nURL: ${currentUrl}`
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

async function swipe(args: any) {
  const pageInstance = await getPage();
  const count = args.count || 1;
  
  try {
    let results = [];
    
    for (let i = 0; i < count; i++) {
      if (args.action === 'like') {
        // Try to find and click like button
        const likeButton = await pageInstance.$('button[aria-label*="Like"], button:has-text("Like"), [data-testid="gamepad-like"]');
        if (likeButton) {
          await likeButton.click();
          results.push('Liked');
        }
      } else if (args.action === 'pass') {
        // Try to find and click pass button
        const passButton = await pageInstance.$('button[aria-label*="Nope"], button:has-text("Nope"), [data-testid="gamepad-pass"]');
        if (passButton) {
          await passButton.click();
          results.push('Passed');
        }
      }
      
      await pageInstance.waitForTimeout(2000);
    }
    
    return {
      content: [{
        type: 'text',
        text: `Swiped ${count} time(s): ${results.join(', ')}`
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

async function getMatches() {
  const pageInstance = await getPage();
  
  try {
    // Navigate to matches
    await pageInstance.goto('https://tinder.com/app/matches');
    await pageInstance.waitForTimeout(3000);
    
    // Get match names
    const matches = await pageInstance.$$eval('[data-testid*="match-card"], .matchListItem', elements => {
      return elements.map(el => el.textContent || '').filter(text => text.length > 0);
    });
    
    return {
      content: [{
        type: 'text',
        text: `Found ${matches.length} matches:\n${matches.join('\n')}`
      }]
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Failed to get matches: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
}

async function sendMessage(args: any) {
  const pageInstance = await getPage();
  
  try {
    // Navigate to matches
    await pageInstance.goto('https://tinder.com/app/matches');
    await pageInstance.waitForTimeout(2000);
    
    // Find and click on match
    const matchElement = await pageInstance.$(`text="${args.matchName}"`);
    if (matchElement) {
      await matchElement.click();
      await pageInstance.waitForTimeout(2000);
      
      // Type message
      const messageInput = await pageInstance.$('textarea, input[placeholder*="Type a message"]');
      if (messageInput) {
        await messageInput.fill(args.message);
        await pageInstance.waitForTimeout(500);
        
        // Send message
        const sendButton = await pageInstance.$('button:has-text("Send"), button[type="submit"]');
        if (sendButton) {
          await sendButton.click();
        }
        
        return {
          content: [{
            type: 'text',
            text: `Message sent to ${args.matchName}: "${args.message}"`
          }]
        };
      }
    }
    
    return {
      content: [{
        type: 'text',
        text: `Could not find match: ${args.matchName}`
      }],
      isError: true
    };
  } catch (error) {
    return {
      content: [{
        type: 'text',
        text: `Failed to send message: ${error instanceof Error ? error.message : String(error)}`
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
    case 'tinder_login':
      return await login(args);
    case 'tinder_check_status':
      return await checkStatus();
    case 'tinder_swipe':
      return await swipe(args);
    case 'tinder_get_matches':
      return await getMatches();
    case 'tinder_send_message':
      return await sendMessage(args);
    default:
      return {
        content: [{
          type: 'text',
          text: `Unknown tool: ${name}`
        }],
        isError: true
      };
  }
});

// Cleanup on exit
process.on('SIGINT', async () => {
  if (page) await page.close();
  if (browser) await browser.close();
  process.exit(0);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Tinder MCP server running (simplified version)');
}

main().catch(console.error);