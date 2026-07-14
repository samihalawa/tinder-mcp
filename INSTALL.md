# Tinder MCP Installation Guide

## Overview
Tinder MCP is a **LOCAL** MCP server that runs on your computer. It uses browser automation (Playwright) to interact with Tinder's web interface, so it needs to run locally where it can control a browser.

## Installation Methods

### Method 1: Desktop Extension (DXT) - EASIEST ✨

This is a **one-click install** for Claude Desktop users.

1. **Download the extension**: `tinder-mcp.dxt` (already created)
2. **Install in Claude Desktop**:
   - Open Claude for macOS or Windows
   - Drag and drop the `.dxt` file into Claude
   - Click "Install" in the dialog
   - Claude will automatically configure everything

### Method 2: Manual Installation for Claude Desktop

1. **Clone or download this repository**
2. **Install dependencies**:
   ```bash
   npm install
   npm run build
   ```

3. **Add to Claude configuration**:
   
   On macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   On Windows: `%APPDATA%\Claude\claude_desktop_config.json`

   ```json
   {
     "mcpServers": {
       "tinder-mcp": {
         "command": "node",
         "args": ["/path/to/tinder-mcp/dist/index.js"],
         "env": {
           "NODE_ENV": "production"
         }
       }
     }
   }
   ```

4. **Restart Claude Desktop**

### Method 3: Running as Standalone MCP Server

```bash
# Build the project
npm install
npm run build

# Run the MCP server
npm start
```

## How It Works

**This is a LOCAL tool** that:
- Runs on YOUR computer
- Controls a browser instance locally
- Connects to Tinder through your browser
- Stores session data locally for persistence

## Cannot Use on Smithery.ai ❌

**Smithery.ai is for REMOTE/API-based MCP servers only.**

This tool CANNOT work on Smithery because:
- It needs to control a local browser
- It requires local file system access for session storage
- Browser automation cannot run in cloud/remote environments
- Tinder requires real browser fingerprints and local network

## Features

Once installed, you can use these commands in Claude:

- `tinder_login` - Login with email/password
- `tinder_check_status` - Check if logged in
- `tinder_swipe` - Swipe on profiles (like/pass)
- `tinder_get_matches` - View your matches
- `tinder_send_message` - Send messages to matches

## Requirements

- Node.js 18 or higher
- Chrome/Chromium browser installed
- Claude Desktop (for DXT installation)
- Active Tinder account

## Session Persistence

The tool saves your browser session locally, so you don't need to login every time. Session data is stored in your user data directory.

## Troubleshooting

### "Cannot find browser"
- Make sure Chrome or Chromium is installed
- The tool will download a browser automatically if needed

### "Login failed"
- Tinder may show captchas for automation
- Try running with `headless: false` to see the browser
- You may need to complete verification manually

### "Session expired"
- Delete the user data directory and login again
- Check if Tinder logged you out for security

## Security Notes

- Your credentials are NEVER sent anywhere except Tinder
- All data stays on YOUR computer
- Browser sessions are stored locally
- No external servers or APIs involved

## Support

For issues or questions, please open an issue on GitHub or contact the developer.

---

**Remember**: This is a LOCAL tool that runs on YOUR computer. It cannot and will not work on cloud MCP platforms like Smithery.ai.