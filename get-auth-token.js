import { chromium } from 'playwright';

async function getAuthToken() {
    console.log('🔐 Getting your Tinder auth token...');
    console.log('📝 You will need to manually log in when the browser opens');
    
    const browser = await chromium.launch({ 
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    const page = await context.newPage();
    
    let authToken = null;
    let userId = null;
    
    // Monitor for auth token
    page.on('request', request => {
        const headers = request.headers();
        if (headers['x-auth-token']) {
            authToken = headers['x-auth-token'];
            console.log('✅ FOUND AUTH TOKEN:', authToken);
        }
    });
    
    page.on('response', async response => {
        const url = response.url();
        if (url.includes('api.gotinder.com') && response.status() === 200) {
            try {
                const data = await response.json();
                if (data.data && data.data.user) {
                    userId = data.data.user._id;
                    console.log('✅ FOUND USER ID:', userId);
                }
            } catch (e) {
                // Ignore JSON parse errors
            }
        }
    });
    
    try {
        // Go to Tinder
        await page.goto('https://tinder.com');
        
        console.log('\n🚨 MANUAL ACTION REQUIRED:');
        console.log('1. Click "Log in" in the browser');
        console.log('2. Complete the login process (phone/SMS/etc.)');
        console.log('3. Wait until you see the main Tinder interface');
        console.log('4. The script will automatically detect your auth token');
        console.log('\n⏳ Waiting for you to log in...');
        
        // Wait for auth token to be found
        while (!authToken) {
            await page.waitForTimeout(1000);
            
            // Check localStorage periodically
            const token = await page.evaluate(() => {
                return localStorage.getItem('TinderWeb/APIToken');
            });
            
            if (token && token !== '') {
                authToken = token;
                console.log('✅ FOUND TOKEN IN STORAGE:', authToken);
                break;
            }
        }
        
        if (authToken) {
            console.log('\n🎉 SUCCESS! Auth token found.');
            console.log('🔑 Token:', authToken);
            
            // Now test API calls
            console.log('\n🚀 Testing API calls...');
            
            const apiCalls = [
                'https://api.gotinder.com/v2/profile',
                'https://api.gotinder.com/v2/matches',
                'https://api.gotinder.com/v2/meta'
            ];
            
            for (const apiUrl of apiCalls) {
                try {
                    const response = await page.evaluate(async (url, token) => {
                        const res = await fetch(url, {
                            headers: {
                                'X-Auth-Token': token,
                                'Content-Type': 'application/json'
                            }
                        });
                        
                        return {
                            status: res.status,
                            data: await res.json()
                        };
                    }, apiUrl, authToken);
                    
                    console.log(`📡 ${apiUrl}: ${response.status}`);
                    
                    if (response.status === 200) {
                        if (apiUrl.includes('matches') && response.data.data?.matches) {
                            console.log(`\n💬 FOUND ${response.data.data.matches.length} MATCHES:`);
                            response.data.data.matches.forEach((match, i) => {
                                const name = match.person?.name || 'Unknown';
                                const lastActivity = match.last_activity_date || 'No activity';
                                console.log(`  ${i + 1}. ${name} - ${lastActivity}`);
                            });
                        }
                        
                        if (apiUrl.includes('profile') && response.data.data) {
                            console.log(`\n👤 PROFILE: ${response.data.data.name || 'Unknown'}`);
                        }
                    }
                    
                } catch (error) {
                    console.log(`❌ ${apiUrl}: ${error.message}`);
                }
            }
            
            // Save token for future use
            console.log('\n💾 Save this token for future API calls:');
            console.log(`X-Auth-Token: ${authToken}`);
            
        } else {
            console.log('❌ No auth token found. Please try logging in again.');
        }
        
        console.log('\n⏳ Browser will stay open for 60 seconds...');
        await page.waitForTimeout(60000);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await browser.close();
    }
}

getAuthToken();
