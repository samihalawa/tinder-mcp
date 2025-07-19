import { chromium } from 'playwright';

const cookies = [
    {
        "domain": "tinder.com",
        "name": "AWSALBCORS",
        "path": "/",
        "secure": true,
        "value": "V4brrUttuKuMnP3cWJ2Jr2uYygVmyOpur+k46vvWpsyyYahnnLUzo1o3HbqtmHO3NnS26sG/IxxgTXTtEq5xxubHccRFcYLzwNsJ71qDXl8LMi+GtRUZZYvHMZj3"
    },
    {
        "domain": ".tinder.com",
        "name": "_ga_CDPT3R4PG7",
        "path": "/",
        "secure": false,
        "value": "GS2.1.s1752846987$o1$g1$t1752848337$j58$l0$h0"
    },
    {
        "domain": ".tinder.com",
        "name": "_gid",
        "path": "/",
        "secure": false,
        "value": "GA1.2.710333626.1752846987"
    },
    {
        "domain": "tinder.com",
        "name": "lang",
        "path": "/",
        "secure": false,
        "value": "en"
    },
    {
        "domain": ".tinder.com",
        "name": "_ga",
        "path": "/",
        "secure": false,
        "value": "GA1.1.1597859611.1752846987"
    }
];

async function findConversations() {
    console.log('💬 Finding your Tinder conversations...');
    
    let browser, context, page;
    
    try {
        browser = await chromium.launch({
            headless: false, // Show browser to see what's happening
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        context = await browser.newContext({
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        });
        
        await context.addCookies(cookies);
        page = await context.newPage();
        
        // Navigate to Tinder
        await page.goto('https://tinder.com', { waitUntil: 'networkidle' });
        console.log('✅ Logged in to Tinder');
        
        // Wait for page to load
        await page.waitForTimeout(3000);
        
        // Try different ways to access messages
        const messageUrls = [
            'https://tinder.com/app/messages',
            'https://tinder.com/messages',
            'https://tinder.com/app/matches'
        ];
        
        for (const url of messageUrls) {
            try {
                console.log(`🔍 Trying: ${url}`);
                await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
                await page.waitForTimeout(2000);
                
                // Look for conversation elements
                const conversations = await page.evaluate(() => {
                    const selectors = [
                        '[data-testid="match-card"]',
                        '.messageListItem',
                        '.match-card',
                        '.messageList li',
                        '.matches-list li',
                        '[class*="match"]',
                        '[class*="message"]',
                        'li[role="button"]',
                        'div[role="button"]'
                    ];
                    
                    const found = [];
                    
                    selectors.forEach(selector => {
                        const elements = document.querySelectorAll(selector);
                        elements.forEach((el, index) => {
                            const text = el.textContent?.trim();
                            if (text && text.length > 5 && text.length < 200) {
                                found.push({
                                    selector,
                                    text: text.substring(0, 100),
                                    html: el.outerHTML.substring(0, 200)
                                });
                            }
                        });
                    });
                    
                    return found;
                });
                
                if (conversations.length > 0) {
                    console.log(`📱 Found ${conversations.length} potential conversations at ${url}:`);
                    conversations.forEach((conv, i) => {
                        console.log(`  ${i + 1}. ${conv.text}`);
                    });
                    break;
                } else {
                    console.log(`❌ No conversations found at ${url}`);
                }
                
            } catch (error) {
                console.log(`❌ Failed to load ${url}: ${error.message}`);
            }
        }
        
        // Take a screenshot to see current state
        await page.screenshot({ path: 'tinder-current-state.png', fullPage: true });
        console.log('📸 Screenshot saved as tinder-current-state.png');
        
        // Get current page info
        console.log(`📍 Final URL: ${page.url()}`);
        console.log(`📄 Final Title: ${await page.title()}`);
        
        // Wait a bit to see the browser
        console.log('⏳ Keeping browser open for 10 seconds...');
        await page.waitForTimeout(10000);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

findConversations();
