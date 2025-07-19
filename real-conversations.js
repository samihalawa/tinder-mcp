import { chromium } from 'playwright';

const cookies = [
    {"domain": "tinder.com", "name": "AWSALBCORS", "path": "/", "secure": true, "value": "V4brrUttuKuMnP3cWJ2Jr2uYygVmyOpur+k46vvWpsyyYahnnLUzo1o3HbqtmHO3NnS26sG/IxxgTXTtEq5xxubHccRFcYLzwNsJ71qDXl8LMi+GtRUZZYvHMZj3"},
    {"domain": ".tinder.com", "name": "_ga_CDPT3R4PG7", "path": "/", "secure": false, "value": "GS2.1.s1752846987$o1$g1$t1752848337$j58$l0$h0"},
    {"domain": ".tinder.com", "name": "_gid", "path": "/", "secure": false, "value": "GA1.2.710333626.1752846987"},
    {"domain": "tinder.com", "name": "lang", "path": "/", "secure": false, "value": "en"},
    {"domain": ".tinder.com", "name": "_ga", "path": "/", "secure": false, "value": "GA1.1.1597859611.1752846987"}
];

async function getRealConversations() {
    console.log('🔍 Actually finding your real Tinder conversations...');
    
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    await context.addCookies(cookies);
    const page = await context.newPage();
    
    try {
        // Go to main Tinder page
        await page.goto('https://tinder.com');
        await page.waitForTimeout(5000);
        
        console.log('Current URL:', page.url());
        
        // Look for any clickable elements that might lead to messages
        const allClickables = await page.evaluate(() => {
            const elements = document.querySelectorAll('a, button, [role="button"], [onclick]');
            const results = [];
            
            elements.forEach(el => {
                const text = el.textContent?.trim().toLowerCase();
                const href = el.getAttribute('href');
                const ariaLabel = el.getAttribute('aria-label')?.toLowerCase();
                
                if (text?.includes('message') || text?.includes('chat') || text?.includes('match') ||
                    href?.includes('message') || href?.includes('chat') || href?.includes('match') ||
                    ariaLabel?.includes('message') || ariaLabel?.includes('chat') || ariaLabel?.includes('match')) {
                    
                    results.push({
                        text: el.textContent?.trim() || '',
                        href: href || '',
                        ariaLabel: ariaLabel || '',
                        tagName: el.tagName
                    });
                }
            });
            
            return results;
        });
        
        console.log('Found message-related elements:', allClickables);
        
        // Try clicking on message-related elements
        for (const element of allClickables) {
            if (element.href && (element.href.includes('message') || element.href.includes('match'))) {
                try {
                    console.log(`Trying to navigate to: ${element.href}`);
                    await page.goto(`https://tinder.com${element.href}`);
                    await page.waitForTimeout(3000);
                    
                    // Look for actual conversation content
                    const conversations = await page.evaluate(() => {
                        // Look for various conversation patterns
                        const patterns = [
                            'div[data-testid*="match"]',
                            'div[data-testid*="message"]',
                            'li[role="button"]',
                            'div[role="button"]',
                            '.messageListItem',
                            '.match-card',
                            '[class*="conversation"]',
                            '[class*="chat"]'
                        ];
                        
                        const found = [];
                        patterns.forEach(pattern => {
                            const elements = document.querySelectorAll(pattern);
                            elements.forEach(el => {
                                const text = el.textContent?.trim();
                                if (text && text.length > 10) {
                                    found.push({
                                        pattern,
                                        text: text.substring(0, 200),
                                        hasImage: !!el.querySelector('img'),
                                        hasName: /[A-Z][a-z]+/.test(text)
                                    });
                                }
                            });
                        });
                        
                        return found;
                    });
                    
                    if (conversations.length > 0) {
                        console.log(`\n📱 FOUND ${conversations.length} CONVERSATIONS:`);
                        conversations.forEach((conv, i) => {
                            console.log(`${i + 1}. ${conv.text}`);
                            console.log(`   Pattern: ${conv.pattern}, Has Image: ${conv.hasImage}, Has Name: ${conv.hasName}\n`);
                        });
                        break;
                    }
                    
                } catch (error) {
                    console.log(`Failed to navigate to ${element.href}:`, error.message);
                }
            }
        }
        
        // Keep browser open to manually inspect
        console.log('\n⏳ Browser staying open for manual inspection...');
        await page.waitForTimeout(30000);
        
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await browser.close();
    }
}

getRealConversations();
