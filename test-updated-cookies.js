import { chromium } from 'playwright';

const updatedCookies = [
    {
        "domain": "tinder.com",
        "expirationDate": 1753478646.143553,
        "hostOnly": true,
        "httpOnly": false,
        "name": "AWSALBCORS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "ODfGQo74ZCeIKn8ofRP0VtRikj3PWuQEZRDxg2YYzsjLhOOpc93jLNYpD7/XsotbACZW/AGrLedkK85qG2+APirqZGXlPx2/zmIOgfJTHbVoF7td8gyFKR6USs9L"
    },
    {
        "domain": ".tinder.com",
        "expirationDate": 1787433441.292083,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga_CDPT3R4PG7",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GS2.1.s1752872206$o3$g1$t1752873441$j60$l0$h0"
    },
    {
        "domain": ".tinder.com",
        "expirationDate": 1752958606,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gid",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GA1.2.710333626.1752846987"
    },
    {
        "domain": "tinder.com",
        "expirationDate": 1753451809.776144,
        "hostOnly": true,
        "httpOnly": false,
        "name": "lang",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "en"
    },
    {
        "domain": ".tinder.com",
        "expirationDate": 1787432206.657158,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GA1.1.1597859611.1752846987"
    },
    {
        "domain": ".tinder.com",
        "expirationDate": 1760622987,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_gcl_au",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "1.1.1718873042.1752846987"
    },
    {
        "domain": "tinder.com",
        "expirationDate": 1753478646.143497,
        "hostOnly": true,
        "httpOnly": false,
        "name": "AWSALB",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "ODfGQo74ZCeIKn8ofRP0VtRikj3PWuQEZRDxg2YYzsjLhOOpc93jLNYpD7/XsotbACZW/AGrLedkK85qG2+APirqZGXlPx2/zmIOgfJTHbVoF7td8gyFKR6USs9L"
    }
];

async function testUpdatedAuth() {
    console.log('🔐 Testing with your updated cookies...');
    
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    let authToken = null;
    let foundConversations = [];
    
    // Monitor API calls for auth token
    context.on('request', request => {
        const headers = request.headers();
        const url = request.url();
        
        if (url.includes('api.gotinder.com')) {
            console.log('📡 API Call:', url);
            
            if (headers['x-auth-token']) {
                authToken = headers['x-auth-token'];
                console.log('✅ FOUND AUTH TOKEN:', authToken.substring(0, 20) + '...');
            }
        }
    });
    
    context.on('response', async response => {
        const url = response.url();
        if (url.includes('api.gotinder.com') && response.status() === 200) {
            try {
                const data = await response.json();
                
                // Check for matches/conversations in response
                if (data.data?.matches) {
                    console.log(`\n💬 FOUND ${data.data.matches.length} MATCHES IN API RESPONSE:`);
                    data.data.matches.forEach((match, i) => {
                        const name = match.person?.name || 'Unknown';
                        const lastMsg = match.messages?.[0]?.message || 'No messages';
                        const lastActivity = match.last_activity_date || 'No activity';
                        
                        console.log(`  ${i + 1}. ${name}`);
                        console.log(`     Last: ${lastMsg}`);
                        console.log(`     Activity: ${lastActivity}\n`);
                        
                        foundConversations.push({
                            name,
                            lastMessage: lastMsg,
                            lastActivity,
                            matchId: match._id
                        });
                    });
                }
                
                // Check for profile data
                if (data.data?.name) {
                    console.log(`👤 PROFILE: ${data.data.name}`);
                }
                
            } catch (e) {
                // Ignore JSON parse errors
            }
        }
    });
    
    await context.addCookies(updatedCookies);
    const page = await context.newPage();
    
    try {
        // Navigate to Tinder
        await page.goto('https://tinder.com', { waitUntil: 'networkidle' });
        console.log('✅ Loaded Tinder with updated cookies');
        
        await page.waitForTimeout(3000);
        
        // Check localStorage for auth token
        const storageToken = await page.evaluate(() => {
            return localStorage.getItem('TinderWeb/APIToken');
        });
        
        if (storageToken && storageToken !== '') {
            authToken = storageToken;
            console.log('✅ FOUND TOKEN IN STORAGE:', authToken.substring(0, 20) + '...');
        }
        
        // Try to navigate to app sections
        const appUrls = [
            'https://tinder.com/app/recs',
            'https://tinder.com/app/matches',
            'https://tinder.com/app/messages'
        ];
        
        for (const url of appUrls) {
            try {
                console.log(`🔍 Trying: ${url}`);
                await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
                await page.waitForTimeout(2000);
                
                if (authToken) break;
            } catch (error) {
                console.log(`❌ Failed: ${url}`);
            }
        }
        
        // If we have auth token, make direct API calls
        if (authToken) {
            console.log('\n🚀 Making direct API calls with auth token...');
            
            const apiResult = await page.evaluate(async (token) => {
                try {
                    const response = await fetch('https://api.gotinder.com/v2/matches', {
                        headers: {
                            'X-Auth-Token': token,
                            'Content-Type': 'application/json',
                            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
                        }
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        return { success: true, data };
                    } else {
                        return { success: false, status: response.status, error: await response.text() };
                    }
                } catch (error) {
                    return { success: false, error: error.message };
                }
            }, authToken);
            
            if (apiResult.success && apiResult.data?.data?.matches) {
                console.log(`\n🎉 SUCCESS! Found ${apiResult.data.data.matches.length} conversations via API:`);
                apiResult.data.data.matches.forEach((match, i) => {
                    const name = match.person?.name || 'Unknown';
                    const lastActivity = match.last_activity_date || 'No activity';
                    console.log(`  ${i + 1}. ${name} - ${lastActivity}`);
                });
            } else {
                console.log('❌ API call failed:', apiResult.error || apiResult.status);
            }
        }
        
        console.log('\n📋 SUMMARY:');
        console.log(`Auth Token: ${authToken ? '✅ Found' : '❌ Not found'}`);
        console.log(`Conversations: ${foundConversations.length} found`);
        
        if (authToken) {
            console.log(`\n💾 Your Auth Token: ${authToken}`);
        }
        
        console.log('\n⏳ Browser staying open for 30 seconds...');
        await page.waitForTimeout(30000);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await browser.close();
    }
}

testUpdatedAuth();
