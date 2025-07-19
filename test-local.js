#!/usr/bin/env node

import { chromium } from 'playwright';

async function testBrowser() {
  console.log('Testing browser launch...');
  
  try {
    const browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage'
      ]
    });
    
    console.log('✅ Browser launched successfully');
    
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      viewport: { width: 1280, height: 720 }
    });
    
    const page = await context.newPage();
    console.log('✅ Page created successfully');
    
    await page.goto('https://tinder.com');
    console.log('✅ Navigated to Tinder');
    
    const title = await page.title();
    const url = page.url();
    
    console.log(`Page title: ${title}`);
    console.log(`Current URL: ${url}`);
    
    await browser.close();
    console.log('✅ Browser closed successfully');
    
    console.log('\n🎉 All tests passed! The Tinder MCP server should work correctly.');
    
  } catch (error) {
    console.error('❌ Browser test failed:', error.message);
    console.error('\nTo fix this, run: npx playwright install');
  }
}

testBrowser();
