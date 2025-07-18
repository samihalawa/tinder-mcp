#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Testing Tinder MCP Server...\n');

// Start the MCP server
const serverPath = join(__dirname, 'dist', 'index.js');
const server = spawn('node', [serverPath], {
  stdio: ['pipe', 'pipe', 'pipe']
});

// Test the server by sending a list tools request
const listToolsRequest = {
  jsonrpc: '2.0',
  id: 1,
  method: 'tools/list',
  params: {}
};

// Send the request
server.stdin.write(JSON.stringify(listToolsRequest) + '\n');

// Handle server output
server.stdout.on('data', (data) => {
  try {
    const response = JSON.parse(data.toString());
    if (response.result && response.result.tools) {
      console.log('✅ MCP Server is working!');
      console.log(`📋 Found ${response.result.tools.length} tools:`);
      
      // Group tools by category
      const categories = {
        'Authentication': [],
        'Profile': [],
        'Discovery': [],
        'Messaging': [],
        'Settings': []
      };

      response.result.tools.forEach(tool => {
        if (tool.name.includes('login') || tool.name.includes('logout') || tool.name.includes('otp') || tool.name.includes('apple')) {
          categories['Authentication'].push(tool.name);
        } else if (tool.name.includes('profile')) {
          categories['Profile'].push(tool.name);
        } else if (tool.name.includes('swipe') || tool.name.includes('boost') || tool.name.includes('rewind') || tool.name.includes('view')) {
          categories['Discovery'].push(tool.name);
        } else if (tool.name.includes('message') || tool.name.includes('match') || tool.name.includes('emoji') || tool.name.includes('contact') || tool.name.includes('conversation') || tool.name.includes('unmatch')) {
          categories['Messaging'].push(tool.name);
        } else if (tool.name.includes('settings')) {
          categories['Settings'].push(tool.name);
        }
      });

      Object.entries(categories).forEach(([category, tools]) => {
        if (tools.length > 0) {
          console.log(`\n🔧 ${category}:`);
          tools.forEach(tool => console.log(`   - ${tool}`));
        }
      });

      console.log('\n🎉 Tinder MCP Tool is ready for use!');
      console.log('\n📖 Usage:');
      console.log('   1. Add to your MCP client configuration');
      console.log('   2. Use tools like tinder_login_phone, tinder_swipe, etc.');
      console.log('   3. Check README.md for detailed examples');
      
    } else {
      console.log('❌ Unexpected response format');
      console.log(data.toString());
    }
  } catch (error) {
    console.log('📝 Server output:', data.toString());
  }
  
  // Clean shutdown
  server.kill();
  process.exit(0);
});

server.stderr.on('data', (data) => {
  const output = data.toString();
  if (output.includes('Tinder MCP server running')) {
    console.log('🚀 Server started successfully');
  } else if (!output.includes('DeprecationWarning')) {
    console.log('⚠️  Server stderr:', output);
  }
});

server.on('error', (error) => {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
});

// Timeout after 10 seconds
setTimeout(() => {
  console.log('⏰ Test timeout - killing server');
  server.kill();
  process.exit(1);
}, 10000);
