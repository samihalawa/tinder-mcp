import { chromium } from 'playwright';
import fetch from 'node-fetch';

const cookies = [
    {"domain": "tinder.com", "name": "AWSALBCORS", "path": "/", "secure": true, "value": "V4brrUttuKuMnP3cWJ2Jr2uYygVmyOpur+k46vvWpsyyYahnnLUzo1o3HbqtmHO3NnS26sG/IxxgTXTtEq5xxubHccRFcYLzwNsJ71qDXl8LMi+GtRUZZYvHMZj3"},
    {"domain": ".tinder.com", "name": "_ga_CDPT3R4PG7", "path": "/", "secure": false, "value": "GS2.1.s1752846987$o1$g1$t1752848337$j58$l0$h0"},
    {"domain": ".tinder.com", "name": "_gid", "path": "/", "secure": false, "value": "GA1.2.710333626.1752846987"},
    {"domain": "tinder.com", "name": "lang", "path": "/", "secure": false, "value": "en"},
    {"domain": ".tinder.com", "name": "_ga", "path": "/", "secure": false, "value": "GA1.1.1597859611.1752846987"},
    {"domain": ".tinder.com", "name": "_gcl_au", "path": "/", "secure": false, "value": "1.1.1718873042.1752846987"}
];

async function extractAuthTokens() {
    console.log('🔐 Extracting Tinder auth tokens from your session...');
    
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    await context.addCookies(cookies);
    const page = await context.newPage();
    
    let authToken = null;
    let userId = null;
    let apiCalls = [];
    
    // Intercept network requests to capture API calls
    page.on('request', request => {
        const url = request.url();
        if (url.includes('api.gotinder.com') || url.includes('tinder.com/api')) {
            const headers = request.headers();
            console.log('📡 API Request:', url);
            console.log('🔑 Headers:', headers);
            
            if (headers['x-auth-token']) {
                authToken = headers['x-auth-token'];
                console.log('✅ Found X-Auth-Token:', authToken.substring(0, 20) + '...');
            }
            
            apiCalls.push({
                url,
                method: request.method(),
                headers
            });
        }
    });
    
    page.on('response', response => {
        const url = response.url();
        if (url.includes('api.gotinder.com') || url.includes('tinder.com/api')) {
            console.log('📥 API Response:', response.status(), url);
        }
    });
    
    try {
        // Navigate to Tinder and trigger API calls
        await page.goto('https://tinder.com', { waitUntil: 'networkidle' });
        await page.waitForTimeout(3000);
        
        // Try to navigate to app sections that trigger API calls
        const appUrls = [
            'https://tinder.com/app/recs',
            'https://tinder.com/app/matches',
            'https://tinder.com/app/profile'
        ];
        
        for (const url of appUrls) {
            try {
                console.log(`🔍 Trying: ${url}`);
                await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
                await page.waitForTimeout(2000);
                
                if (authToken) break;
            } catch (error) {
                console.log(`❌ Failed to load ${url}`);
            }
        }
        
        // If no auth token found, try to extract from localStorage/sessionStorage
        if (!authToken) {
            console.log('🔍 Checking browser storage for tokens...');
            
            const storageData = await page.evaluate(() => {
                const data = {};
                
                // Check localStorage
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    const value = localStorage.getItem(key);
                    if (key.toLowerCase().includes('token') || key.toLowerCase().includes('auth')) {
                        data[`localStorage.${key}`] = value;
                    }
                }
                
                // Check sessionStorage
                for (let i = 0; i < sessionStorage.length; i++) {
                    const key = sessionStorage.key(i);
                    const value = sessionStorage.getItem(key);
                    if (key.toLowerCase().includes('token') || key.toLowerCase().includes('auth')) {
                        data[`sessionStorage.${key}`] = value;
                    }
                }
                
                return data;
            });
            
            console.log('💾 Storage data:', storageData);
        }
        
        // Try to make direct API calls if we have tokens
        if (authToken) {
            console.log('\n🚀 Testing API calls with extracted token...');
            
            const apiEndpoints = [
                'https://api.gotinder.com/v2/matches',
                'https://api.gotinder.com/v2/profile',
                'https://api.gotinder.com/v2/meta'
            ];
            
            for (const endpoint of apiEndpoints) {
                try {
                    console.log(`📡 Calling: ${endpoint}`);
                    
                    const response = await fetch(endpoint, {
                        headers: {
                            'X-Auth-Token': authToken,
                            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    });
                    
                    console.log(`📥 Response: ${response.status} ${response.statusText}`);
                    
                    if (response.ok) {
                        const data = await response.json();
                        console.log(`✅ Success! Data:`, JSON.stringify(data, null, 2));
                        
                        if (endpoint.includes('matches') && data.data?.matches) {
                            console.log(`\n💬 FOUND ${data.data.matches.length} MATCHES:`);
                            data.data.matches.forEach((match, i) => {
                                console.log(`${i + 1}. ${match.person?.name || 'Unknown'} - Last message: ${match.last_activity_date || 'No activity'}`);
                            });
                        }
                    } else {
                        const errorText = await response.text();
                        console.log(`❌ Error: ${errorText}`);
                    }
                    
                } catch (error) {
                    console.log(`❌ API call failed: ${error.message}`);
                }
            }
        } else {
            console.log('❌ No auth token found. API calls not possible.');
        }
        
        console.log('\n📋 Summary:');
        console.log(`Auth Token: ${authToken ? '✅ Found' : '❌ Not found'}`);
        console.log(`API Calls Intercepted: ${apiCalls.length}`);
        
        // Keep browser open for manual inspection
        console.log('\n⏳ Browser staying open for 30 seconds...');
        await page.waitForTimeout(30000);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await browser.close();
    }
}

extractAuthTokens();
