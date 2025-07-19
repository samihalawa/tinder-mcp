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

async function testAuth() {
    console.log('🔐 Testing Tinder authentication with cookies...');
    
    let browser, context, page;
    
    try {
        // Launch browser
        browser = await chromium.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        context = await browser.newContext({
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        });
        
        // Add cookies
        await context.addCookies(cookies);
        console.log('✅ Cookies loaded');
        
        page = await context.newPage();
        
        // Navigate to Tinder
        await page.goto('https://tinder.com', { waitUntil: 'networkidle' });
        console.log('✅ Navigated to Tinder');
        
        // Check if logged in
        await page.waitForTimeout(3000);
        
        const isLoggedIn = await page.evaluate(() => {
            const discoveryFeed = document.querySelector('[data-testid="discovery-feed"]');
            const profileButton = document.querySelector('nav a[href*="/profile"]');
            const gamepad = document.querySelector('[data-testid="gamepad"]');
            const mainContent = document.querySelector('#main-content');
            
            return !!(discoveryFeed || profileButton || gamepad || mainContent);
        });
        
        console.log(`🔍 Login Status: ${isLoggedIn ? '✅ LOGGED IN' : '❌ NOT LOGGED IN'}`);
        console.log(`📍 Current URL: ${page.url()}`);
        console.log(`📄 Page Title: ${await page.title()}`);
        
        if (isLoggedIn) {
            // Try to get matches/conversations
            console.log('💬 Attempting to find conversations...');
            
            // Look for matches/messages section
            try {
                await page.click('nav a[href*="/messages"], button[aria-label*="Messages"], [data-testid="messages"]', { timeout: 5000 });
                await page.waitForTimeout(2000);
                
                const conversations = await page.evaluate(() => {
                    const matchElements = document.querySelectorAll('[data-testid="match-card"], .messageListItem, .match-card');
                    const matches = [];
                    
                    matchElements.forEach((el, index) => {
                        const nameEl = el.querySelector('h3, .name, [data-testid="match-name"]');
                        const messageEl = el.querySelector('.lastMessage, .message-preview, p');
                        
                        if (nameEl) {
                            matches.push({
                                name: nameEl.textContent?.trim() || `Match ${index + 1}`,
                                lastMessage: messageEl?.textContent?.trim() || 'No message preview',
                                element: el.outerHTML.substring(0, 200) + '...'
                            });
                        }
                    });
                    
                    return matches;
                });
                
                console.log(`📱 Found ${conversations.length} conversations:`);
                conversations.forEach((conv, i) => {
                    console.log(`  ${i + 1}. ${conv.name}: "${conv.lastMessage}"`);
                });
                
                if (conversations.length === 0) {
                    console.log('🔍 No conversations found. Checking page structure...');
                    const pageStructure = await page.evaluate(() => {
                        const selectors = [
                            '[data-testid="match-card"]',
                            '.messageListItem',
                            '.match-card',
                            'nav a[href*="/messages"]',
                            '[data-testid="messages"]',
                            '.messages',
                            '.matches'
                        ];
                        
                        return selectors.map(sel => ({
                            selector: sel,
                            found: document.querySelectorAll(sel).length
                        }));
                    });
                    
                    console.log('Page structure:', pageStructure);
                }
                
            } catch (error) {
                console.log('❌ Could not access messages section:', error.message);
            }
        }
        
    } catch (error) {
        console.error('❌ Authentication test failed:', error.message);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

testAuth();
