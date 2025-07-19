import { chromium } from 'playwright';

const cookies = [
    {
        "domain": "tinder.com",
        "name": "AWSALBCORS",
        "path": "/",
        "secure": true,
        "value": "ODfGQo74ZCeIKn8ofRP0VtRikj3PWuQEZRDxg2YYzsjLhOOpc93jLNYpD7/XsotbACZW/AGrLedkK85qG2+APirqZGXlPx2/zmIOgfJTHbVoF7td8gyFKR6USs9L"
    },
    {
        "domain": ".tinder.com",
        "name": "_ga_CDPT3R4PG7",
        "path": "/",
        "secure": false,
        "value": "GS2.1.s1752872206$o3$g1$t1752873441$j60$l0$h0"
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
    },
    {
        "domain": ".tinder.com",
        "name": "_gcl_au",
        "path": "/",
        "secure": false,
        "value": "1.1.1718873042.1752846987"
    },
    {
        "domain": "tinder.com",
        "name": "AWSALB",
        "path": "/",
        "secure": false,
        "value": "ODfGQo74ZCeIKn8ofRP0VtRikj3PWuQEZRDxg2YYzsjLhOOpc93jLNYpD7/XsotbACZW/AGrLedkK85qG2+APirqZGXlPx2/zmIOgfJTHbVoF7td8gyFKR6USs9L"
    }
];

async function testAuth() {
    console.log('🔐 Testing authentication with your cookies...');
    
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    let authToken = null;
    let apiData = [];
    
    // Monitor all network activity
    context.on('request', request => {
        const url = request.url();
        const headers = request.headers();
        
        if (url.includes('api.gotinder.com')) {
            console.log('📡 API Request:', url);
            
            if (headers['x-auth-token']) {
                authToken = headers['x-auth-token'];
                console.log('✅ AUTH TOKEN FOUND:', authToken);
            }
        }
    });
    
    context.on('response', async response => {
        const url = response.url();
        if (url.includes('api.gotinder.com') && response.status() === 200) {
            console.log('📥 API Response:', response.status(), url);
            
            try {
                const data = await response.json();
                
                if (data.data?.matches) {
                    console.log(`\n💬 CONVERSATIONS FOUND: ${data.data.matches.length}`);
                    data.data.matches.forEach((match, i) => {
                        const name = match.person?.name || 'Unknown';
                        const bio = match.person?.bio || 'No bio';
                        const lastActivity = match.last_activity_date || 'No activity';
                        
                        console.log(`\n${i + 1}. 👤 ${name}`);
                        console.log(`   📝 ${bio.substring(0, 50)}${bio.length > 50 ? '...' : ''}`);
                        console.log(`   ⏰ ${lastActivity}`);
                        
                        if (match.messages && match.messages.length > 0) {
                            const lastMsg = match.messages[0];
                            console.log(`   💬 "${lastMsg.message}"`);
                        }
                    });
                }
                
                if (data.data?.name) {
                    console.log(`\n👤 YOUR PROFILE: ${data.data.name}`);
                }
                
                apiData.push({ url, data });
                
            } catch (e) {
                // Ignore JSON parse errors
            }
        }
    });
    
    await context.addCookies(cookies);
    const page = await context.newPage();
    
    try {
        // Navigate to Tinder
        await page.goto('https://tinder.com');
        await page.waitForTimeout(3000);
        
        console.log('Current URL:', page.url());
        console.log('Page Title:', await page.title());
        
        // Check for auth token in storage
        const storageToken = await page.evaluate(() => {
            const token = localStorage.getItem('TinderWeb/APIToken');
            const allStorage = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                allStorage[key] = localStorage.getItem(key);
            }
            return { token, allStorage };
        });
        
        console.log('Storage token:', storageToken.token);
        console.log('All localStorage:', storageToken.allStorage);
        
        if (storageToken.token && storageToken.token !== '') {
            authToken = storageToken.token;
            console.log('✅ FOUND AUTH TOKEN IN STORAGE');
        }
        
        // Try app URLs
        const urls = [
            'https://tinder.com/app/recs',
            'https://tinder.com/app/matches',
            'https://tinder.com/app/messages'
        ];
        
        for (const url of urls) {
            try {
                console.log(`\n🔍 Navigating to: ${url}`);
                await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
                await page.waitForTimeout(3000);
                
                console.log('New URL:', page.url());
                
                if (authToken) {
                    console.log('✅ Auth token available, breaking...');
                    break;
                }
            } catch (error) {
                console.log(`❌ Failed to load ${url}: ${error.message}`);
            }
        }
        
        // If we have auth token, make API calls
        if (authToken) {
            console.log('\n🚀 Making API calls with token...');
            
            const matchesResult = await page.evaluate(async (token) => {
                try {
                    const response = await fetch('https://api.gotinder.com/v2/matches', {
                        headers: {
                            'X-Auth-Token': token,
                            'Content-Type': 'application/json'
                        }
                    });
                    
                    const data = await response.json();
                    return { status: response.status, data };
                } catch (error) {
                    return { error: error.message };
                }
            }, authToken);
            
            console.log('Matches API result:', matchesResult);
            
            if (matchesResult.data?.data?.matches) {
                console.log(`\n🎉 SUCCESS! ${matchesResult.data.data.matches.length} conversations found!`);
            }
        } else {
            console.log('❌ No auth token found');
        }
        
        console.log('\n⏳ Keeping browser open for inspection...');
        await page.waitForTimeout(60000);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await browser.close();
    }
}

testAuth();
