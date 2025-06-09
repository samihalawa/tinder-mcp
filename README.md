# Tinder MCP Server

A powerful Model Context Protocol (MCP) server that brings Tinder's API capabilities to AI assistants and automation tools. Built with TypeScript and Express, this server provides a secure, efficient bridge between MCP clients and the Tinder platform.

## What is this?

This MCP server enables AI assistants (like Claude) and automation tools to interact with Tinder programmatically. Whether you're building a dating assistant, analyzing match patterns, or creating automated workflows, this server provides the infrastructure you need.

## Key Features

### Core Capabilities
- **Smart Authentication**: Seamless SMS and Facebook authentication flows with automatic token management
- **Full API Coverage**: Complete access to Tinder's functionality - profiles, matches, messages, likes, and more
- **Intelligent Rate Limiting**: Built-in protection against API limits with configurable thresholds
- **Performance Caching**: Response caching for improved speed and reduced API calls
- **Enterprise Security**: JWT-based authentication, input sanitization, and HTTPS enforcement

### MCP Protocol Support
- **HTTP Transport**: Full support for Smithery's HTTP-based MCP protocol
- **Tool Discovery**: Dynamic tool registration and discovery
- **Resource Management**: Efficient handling of API resources
- **Configuration Flexibility**: Runtime configuration through Smithery interface

## Quick Start

### Deploy on Smithery

The easiest way to use this server is through [Smithery](https://smithery.ai):

1. Visit the server page on Smithery
2. Click "Deploy"
3. Configure your Tinder API credentials
4. Start using with any MCP client

### Local Development

```bash
# Clone the repository
git clone https://github.com/samihalawa/tinder-mcp-server.git
cd tinder-mcp-server

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Start development server
npm run dev
```

### Docker Deployment

```bash
# Build the image
docker build -t tinder-mcp-server .

# Run the container
docker run -p 3000:3000 -e TOKEN_SECRET=your-secret tinder-mcp-server
```

## Available Tools

### Authentication Tools
- `authenticate_sms` - Start SMS-based authentication flow
- `authenticate_facebook` - Authenticate using Facebook credentials
- `verify_captcha` - Handle CAPTCHA challenges
- `refresh_auth` - Refresh authentication tokens

### Profile Management
- `get_user_profile` - Retrieve detailed user profiles
- `update_profile` - Modify your profile information
- `get_recommendations` - Get potential match suggestions
- `get_matches` - List all current matches

### Interaction Tools
- `like_user` - Express interest in a profile
- `super_like_user` - Send a Super Like
- `pass_user` - Skip a profile
- `boost_profile` - Increase profile visibility
- `send_message` - Send messages to matches
- `get_messages` - Retrieve conversation history

### System Tools
- `clear_cache` - Clear cached responses
- `get_rate_limits` - Check current rate limit status
- `server_status` - Get server health information

## API Endpoints

The server exposes both MCP-compliant endpoints and REST API routes:

### MCP Endpoint
- `POST /mcp` - Main MCP protocol endpoint (Smithery compatible)

### REST Endpoints
- Authentication: `/mcp/auth/*`
- User operations: `/mcp/user/*`
- Interactions: `/mcp/interaction/*`
- System info: `/mcp/info`

## Configuration

Configure the server through environment variables or Smithery's UI:

```env
# Server Configuration
PORT=3000
NODE_ENV=production

# Security
TOKEN_SECRET=your-secret-key
TOKEN_EXPIRY=24h

# Tinder API
TINDER_API_KEY=your-api-key
TINDER_API_BASE_URL=https://api.gotinder.com

# Performance
CACHE_TTL=300
RATE_LIMIT_MAX_REQUESTS=100
```

## Architecture

The server is built with a modular, scalable architecture:

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│ MCP Client  │────▶│  API Gateway │────▶│ Tinder API  │
└─────────────┘     └──────────────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    │             │
              ┌─────▼────┐  ┌────▼─────┐
              │  Cache   │  │   Rate   │
              │ Manager  │  │  Limiter │
              └──────────┘  └──────────┘
```

### Core Components
- **API Gateway**: Central request router and MCP protocol handler
- **Authentication Service**: Manages all auth flows and token lifecycle
- **Request Handler**: Validates, transforms, and forwards API requests
- **Cache Manager**: In-memory caching with configurable TTL
- **Rate Limiter**: User and global rate limiting protection
- **Error Handler**: Standardized error responses and logging

## Development

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test suite
npm test -- --testPathPattern=integration
```

### Code Quality
```bash
# Lint code
npm run lint

# Format code
npm run format
```

### Building
```bash
# Build TypeScript
npm run build

# Start production server
npm start
```

## Security Best Practices

- All sensitive data is stored in environment variables
- JWT tokens for secure session management
- Input validation and sanitization on all endpoints
- HTTPS enforcement in production
- Rate limiting to prevent abuse
- Comprehensive error handling without exposing internals

## Contributing

Contributions are welcome! Please ensure:
- All tests pass
- Code follows the existing style
- New features include tests
- Documentation is updated

## License

MIT License - see LICENSE file for details

## Support

- **Issues**: [GitHub Issues](https://github.com/samihalawa/tinder-mcp-server/issues)
- **Documentation**: [MCP Protocol Docs](https://modelcontextprotocol.io)
- **Smithery**: [Deploy on Smithery](https://smithery.ai)

---

Built with TypeScript, Express, and the Model Context Protocol