#!/usr/bin/env node

/**
 * Tinder MCP Server - Stdio Implementation
 * Provides Tinder API functionality via MCP protocol
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import logger from './utils/logger.js';
import apiGateway from './services/api-gateway.js';

class TinderMCPServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: 'tinder-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  private setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools = apiGateway.getAvailableTools();
      return { tools };
    });

    // Execute tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      
      try {
        const result = await apiGateway.executeTool(name, args || {});
        
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        const err = error as Error;
        logger.error(`Tool execution failed: ${err.message}`);
        
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${err.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  private setupErrorHandling() {
    this.server.onerror = (error) => {
      logger.error('MCP Server error:', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    logger.info('Tinder MCP Server running on stdio');
  }
}

// Start the server
if (import.meta.url === `file://${process.argv[1]}`) {
  const server = new TinderMCPServer();
  server.run().catch((error) => {
    logger.error('Failed to start server:', error);
    process.exit(1);
  });
}

export default TinderMCPServer;
