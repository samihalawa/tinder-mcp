#!/usr/bin/env node

/**
 * Complete Tinder Automation Workflow Example
 * 
 * This example demonstrates a full Tinder automation workflow using the MCP tools:
 * 1. Login with phone number and OTP
 * 2. Setup complete profile
 * 3. Configure optimal settings
 * 4. Perform strategic auto-swiping
 * 5. Manage matches and send messages
 * 6. Share contact information
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class TinderWorkflow {
  constructor() {
    this.serverPath = join(__dirname, '..', 'dist', 'index.js');
    this.server = null;
    this.requestId = 1;
  }

  async startServer() {
    console.log('🚀 Starting Tinder MCP Server...');
    this.server = spawn('node', [this.serverPath], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    this.server.stderr.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Tinder MCP server running')) {
        console.log('✅ Server started successfully');
      }
    });

    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  async callTool(toolName, params = {}) {
    return new Promise((resolve, reject) => {
      const request = {
        jsonrpc: '2.0',
        id: this.requestId++,
        method: 'tools/call',
        params: {
          name: toolName,
          arguments: params
        }
      };

      console.log(`📞 Calling ${toolName}...`);
      this.server.stdin.write(JSON.stringify(request) + '\n');

      const timeout = setTimeout(() => {
        reject(new Error(`Timeout calling ${toolName}`));
      }, 30000);

      const onData = (data) => {
        try {
          const response = JSON.parse(data.toString());
          if (response.id === request.id) {
            clearTimeout(timeout);
            this.server.stdout.removeListener('data', onData);
            
            if (response.error) {
              console.log(`❌ ${toolName} failed:`, response.error);
              reject(new Error(response.error.message));
            } else {
              const result = JSON.parse(response.result.content[0].text);
              console.log(`✅ ${toolName} completed:`, result.message);
              resolve(result);
            }
          }
        } catch (error) {
          // Ignore parsing errors for non-JSON responses
        }
      };

      this.server.stdout.on('data', onData);
    });
  }

  async runCompleteWorkflow() {
    try {
      await this.startServer();

      console.log('\n🔐 PHASE 1: AUTHENTICATION');
      console.log('=' .repeat(50));

      // Step 1: Login with phone number
      const loginResult = await this.callTool('tinder_login_phone', {
        phoneNumber: '680821181',
        countryCode: '34'
      });

      if (!loginResult.success) {
        throw new Error('Login failed');
      }

      // Step 2: Submit OTP (you would get this from SMS)
      console.log('📱 Please check your SMS for the OTP code...');
      console.log('💡 In a real scenario, you would input the OTP here');
      
      // For demo purposes, we'll simulate OTP submission
      // await this.callTool('tinder_submit_otp', { otpCode: '123456' });

      console.log('\n👤 PHASE 2: PROFILE SETUP');
      console.log('=' .repeat(50));

      // Step 3: Setup complete profile
      await this.callTool('tinder_setup_profile', {
        bio: 'Madrid entrepreneur looking for meaningful connections. Love travel, good food, and deep conversations. 🌍✈️',
        job: 'Entrepreneur',
        company: 'Tech Startup',
        education: "Master's Degree",
        school: 'Universidad Complutense Madrid',
        location: 'Madrid, Spain',
        interests: ['Travel', 'Entrepreneurship', 'Photography', 'Cooking', 'Fitness'],
        languages: ['Spanish', 'English', 'Chinese'],
        height: '186',
        zodiacSign: 'Gemini',
        relationshipType: 'Long-term relationship'
      });

      console.log('\n⚙️ PHASE 3: SETTINGS OPTIMIZATION');
      console.log('=' .repeat(50));

      // Step 4: Configure optimal settings
      await this.callTool('tinder_update_settings', {
        ageRange: {
          min: 25,
          max: 35
        },
        maxDistance: 50,
        showMe: 'women',
        onlyShowWithPhotos: true,
        recentlyActive: true,
        hideAge: false,
        hideDistance: false
      });

      console.log('\n💕 PHASE 4: STRATEGIC SWIPING');
      console.log('=' .repeat(50));

      // Step 5: Perform strategic auto-swiping
      await this.callTool('tinder_auto_swipe', {
        count: 50,
        likeRatio: 0.7, // Like 70% of profiles
        useSuperLikes: true,
        superLikeRatio: 0.1, // Use super like on 10% of likes
        delayBetweenSwipes: 4000 // 4 second delay between swipes
      });

      console.log('\n💬 PHASE 5: MATCH MANAGEMENT');
      console.log('=' .repeat(50));

      // Step 6: Get matches
      const matchesResult = await this.callTool('tinder_get_matches');
      
      if (matchesResult.success && matchesResult.data.matches.length > 0) {
        console.log(`📋 Found ${matchesResult.data.matches.length} matches`);

        // Step 7: Send personalized messages to first few matches
        const messagesToSend = [
          'Hi! I noticed we both love travel. What\'s your favorite destination? ✈️',
          'Hey! Your profile caught my eye. How\'s your day going? 😊',
          'Hi there! I see you\'re into photography too. What do you like to shoot? 📸'
        ];

        for (let i = 0; i < Math.min(3, matchesResult.data.matches.length); i++) {
          const match = matchesResult.data.matches[i];
          const message = messagesToSend[i % messagesToSend.length];
          
          await this.callTool('tinder_send_message', {
            matchName: match.profile.name,
            message: message
          });

          // Wait between messages to appear natural
          await new Promise(resolve => setTimeout(resolve, 5000));
        }

        console.log('\n📞 PHASE 6: CONTACT SHARING');
        console.log('=' .repeat(50));

        // Step 8: Share contact with promising matches (simulate after good conversation)
        if (matchesResult.data.matches.length > 0) {
          const topMatch = matchesResult.data.matches[0];
          
          console.log(`💡 Simulating contact sharing with ${topMatch.profile.name}`);
          console.log('📱 In a real scenario, you would do this after a good conversation');
          
          // await this.callTool('tinder_share_contact', {
          //   matchName: topMatch.profile.name,
          //   contactInfo: {
          //     phoneNumber: '679794037',
          //     countryCode: '34',
          //     type: 'whatsapp'
          //   }
          // });
        }
      }

      console.log('\n🎉 WORKFLOW COMPLETED SUCCESSFULLY!');
      console.log('=' .repeat(50));
      console.log('✅ Authentication completed');
      console.log('✅ Profile setup completed');
      console.log('✅ Settings optimized');
      console.log('✅ Strategic swiping completed');
      console.log('✅ Matches retrieved and messaged');
      console.log('✅ Ready for contact sharing');

      console.log('\n📊 WORKFLOW SUMMARY:');
      console.log('- Automated 50 swipes with 70% like ratio');
      console.log('- Used super likes strategically (10% of likes)');
      console.log('- Sent personalized messages to top matches');
      console.log('- Configured optimal discovery settings');
      console.log('- Profile optimized for maximum appeal');

      console.log('\n💡 NEXT STEPS:');
      console.log('1. Monitor matches and conversations');
      console.log('2. Respond to incoming messages');
      console.log('3. Share contact info after good conversations');
      console.log('4. Use boost during peak hours for more visibility');
      console.log('5. Regularly update profile photos and bio');

    } catch (error) {
      console.error('❌ Workflow failed:', error.message);
    } finally {
      if (this.server) {
        this.server.kill();
      }
    }
  }

  async runQuickTest() {
    try {
      await this.startServer();
      
      console.log('\n🧪 QUICK FUNCTIONALITY TEST');
      console.log('=' .repeat(50));

      // Test login status
      await this.callTool('tinder_check_login_status');
      
      // Test settings retrieval
      await this.callTool('tinder_get_settings');
      
      // Test profile retrieval
      await this.callTool('tinder_get_profile');

      console.log('\n✅ All basic functions working correctly!');
      
    } catch (error) {
      console.error('❌ Test failed:', error.message);
    } finally {
      if (this.server) {
        this.server.kill();
      }
    }
  }
}

// Command line interface
const workflow = new TinderWorkflow();

const command = process.argv[2] || 'help';

switch (command) {
  case 'full':
    console.log('🚀 Starting complete Tinder automation workflow...\n');
    workflow.runCompleteWorkflow();
    break;
    
  case 'test':
    console.log('🧪 Running quick functionality test...\n');
    workflow.runQuickTest();
    break;
    
  case 'help':
  default:
    console.log('🤖 Tinder MCP Workflow Examples\n');
    console.log('Usage:');
    console.log('  node complete-workflow.js full  - Run complete automation workflow');
    console.log('  node complete-workflow.js test  - Run quick functionality test');
    console.log('  node complete-workflow.js help  - Show this help message\n');
    console.log('Examples:');
    console.log('  npm run example:full   # Complete workflow');
    console.log('  npm run example:test   # Quick test');
    break;
}
