#!/usr/bin/env node

import { spawn } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';

async function testMCPServer() {
  console.log('Testing MCP server...');
  
  // Start the MCP server
  const server = spawn('node', ['dist/index.js'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  let serverOutput = '';
  server.stderr.on('data', (data) => {
    serverOutput += data.toString();
    console.log('Server:', data.toString().trim());
  });
  
  server.stdout.on('data', (data) => {
    console.log('Server response:', data.toString());
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Test list tools request
  const listToolsRequest = {
    jsonrpc: '2.0',
    id: 1,
    method: 'tools/list'
  };
  
  console.log('Sending list tools request...');
  server.stdin.write(JSON.stringify(listToolsRequest) + '\n');
  
  // Wait for response
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Test check login status (this should work even without browsers in MCP environment)
  const checkStatusRequest = {
    jsonrpc: '2.0',
    id: 2,
    method: 'tools/call',
    params: {
      name: 'tinder_check_login_status',
      arguments: {}
    }
  };
  
  console.log('Sending check login status request...');
  server.stdin.write(JSON.stringify(checkStatusRequest) + '\n');
  
  // Wait for response
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Clean up
  server.kill();
  
  console.log('\n✅ MCP server test completed');
  console.log('Server output:', serverOutput);
}

testMCPServer().catch(console.error);
