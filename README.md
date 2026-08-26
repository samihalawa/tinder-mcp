# Tinder MCP Tool
[![smithery badge](https://smithery.ai/badge/@samihalawa/tinder-mcp-server)](https://smithery.ai/server/@samihalawa/tinder-mcp-server)

A comprehensive Model Context Protocol (MCP) tool for automating Tinder interactions. This tool provides complete functionality for authentication, profile management, swiping, messaging, and settings configuration.

## Features

### 🔐 Authentication
- Phone number login with OTP verification
- Apple ID integration for enhanced security
- Session management with encrypted cookie storage
- Login status checking and logout functionality

### 👤 Profile Management
- Complete profile setup with photos, bio, and personal information
- Job, education, and location management
- Interests and languages configuration
- Height, zodiac sign, and personality type settings
- Profile information retrieval

### 💕 Discovery & Swiping
- Manual swiping (like, pass, super like)
- Automated swiping with configurable ratios
- Boost activation for increased visibility
- Profile photo navigation
- Rewind functionality (undo last swipe)

### 💬 Messaging
- Match retrieval and management
- Text message sending
- Emoji and reaction sending
- Contact sharing (WhatsApp/phone)
- Conversation history retrieval
- Unmatching functionality

### ⚙️ Settings Management
- Age range preferences
- Distance settings
- Gender preferences
- Privacy settings (hide age/distance)
- Photo and activity filters
- Settings backup and restore

## Installation

### Installing via Smithery

To install Tinder API Integration Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@samihalawa/tinder-mcp-server):

```bash
npx -y @smithery/cli install @samihalawa/tinder-mcp-server --client claude
```

### Manual Installation
1. Clone the repository:
```bash
git clone https://github.com/samihalawa/tinder-mcp.git
cd tinder-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Set up environment variables (optional):
```bash
cp .env.example .env
# Edit .env with your preferences
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Browser settings
HEADLESS=true                    # Run browser in headless mode
COOKIE_ENCRYPTION_KEY=your-key   # Key for encrypting saved cookies

# Delays and timeouts (milliseconds)
DEFAULT_TIMEOUT=30000           # Default element wait timeout
STABILITY_WAIT=5000             # Wait time for page stability
SWIPE_DELAY=3000               # Default delay between swipes

# Screenshots and debugging
SAVE_SCREENSHOTS=false          # Save screenshots on errors
DEBUG_MODE=false               # Enable debug logging
```

## Usage

### As an MCP Server

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "tinder": {
      "command": "node",
      "args": ["path/to/tinder-mcp/dist/index.js"],
      "env": {
        "HEADLESS": "true"
      }
    }
  }
}
```

### Available Tools

#### Authentication

**tinder_login_phone** - Login with phone number
```json
{
  "phoneNumber": "680821181",
  "countryCode": "34"
}
```

**tinder_submit_otp** - Submit OTP code
```json
{
  "otpCode": "123456"
}
```

**tinder_login_apple_id** - Apple ID authentication
```json
{
  "email": "user@icloud.com",
  "password": "password",
  "twoFactorCode": "123456"
}
```

#### Profile Management

**tinder_setup_profile** - Complete profile setup
```json
{
  "photos": ["/path/to/photo1.jpg", "/path/to/photo2.jpg"],
  "bio": "Madrid... ¿Hay alguien interesante? (29 años. 186cm. Emprendedor)",
  "job": "Emprendedor",
  "company": "Shenzhen TV",
  "education": "Master's Degree",
  "school": "Universidad de Hong Kong",
  "location": "Madrid",
  "interests": ["Travel", "Movies", "Family parties"],
  "languages": ["Spanish", "English", "Chinese"],
  "height": "186",
  "zodiacSign": "Gemini",
  "relationshipType": "Long-term relationship"
}
```

#### Discovery & Swiping

**tinder_swipe** - Manual swipe action
```json
{
  "action": "like"  // "like", "pass", or "superlike"
}
```

**tinder_auto_swipe** - Automated swiping
```json
{
  "count": 50,
  "likeRatio": 0.7,
  "useSuperLikes": true,
  "superLikeRatio": 0.1,
  "delayBetweenSwipes": 3000
}
```

#### Messaging

**tinder_send_message** - Send text message
```json
{
  "matchName": "Aithana",
  "message": "Hola! Qué tal"
}
```

**tinder_share_contact** - Share contact information
```json
{
  "matchName": "Aithana",
  "contactInfo": {
    "phoneNumber": "679794037",
    "countryCode": "34",
    "type": "whatsapp"
  }
}
```

#### Settings

**tinder_update_settings** - Update preferences
```json
{
  "ageRange": {
    "min": 25,
    "max": 35
  },
  "maxDistance": 50,
  "showMe": "women",
  "onlyShowWithPhotos": true,
  "recentlyActive": true
}
```

## Advanced Usage

### Automated Workflow Example

```javascript
// 1. Login
await tinder_login_phone({
  phoneNumber: "680821181",
  countryCode: "34"
});

// 2. Submit OTP (get from SMS)
await tinder_submit_otp({
  otpCode: "123456"
});

// 3. Setup profile
await tinder_setup_profile({
  bio: "Looking for meaningful connections",
  interests: ["Travel", "Photography", "Cooking"]
});

// 4. Auto-swipe with strategy
await tinder_auto_swipe({
  count: 100,
  likeRatio: 0.6,
  useSuperLikes: true,
  superLikeRatio: 0.05,
  delayBetweenSwipes: 4000
});

// 5. Check matches and send messages
const matches = await tinder_get_matches();
for (const match of matches.data.matches) {
  await tinder_send_message({
    matchName: match.profile.name,
    message: "Hi! How's your day going?"
  });
}
```

### Smithery Deployment

This tool is compatible with [Smithery](https://smithery.ai) for easy deployment:

1. Create a `smithery.json` configuration:
```json
{
  "name": "tinder-automation",
  "description": "Comprehensive Tinder automation tool",
  "mcp": {
    "command": "node",
    "args": ["dist/index.js"],
    "env": {
      "HEADLESS": "true"
    }
  },
  "capabilities": [
    "authentication",
    "profile-management", 
    "discovery",
    "messaging",
    "settings"
  ]
}
```

2. Deploy to Smithery:
```bash
smithery deploy
```

## Security & Privacy

### Data Protection
- All cookies are encrypted using AES encryption
- Session data is stored locally and never transmitted
- No personal data is logged or shared
- Browser automation runs in isolated contexts

### Rate Limiting
- Built-in delays between actions to avoid detection
- Configurable timing to mimic human behavior
- Automatic popup and modal handling
- Graceful error handling and recovery

### Best Practices
- Use realistic delays between swipes (3-5 seconds)
- Don't exceed 100-200 swipes per session
- Vary your swiping patterns and ratios
- Take breaks between automation sessions
- Monitor for any unusual account activity

## Troubleshooting

### Common Issues

**Login fails with OTP**
- Ensure phone number format is correct (no spaces or symbols)
- Check that country code matches your phone number
- Wait for SMS delivery (can take 1-2 minutes)
- Try requesting a new OTP if the first one expires

**Profile setup incomplete**
- Check that photo file paths are absolute and accessible
- Ensure photos are in supported formats (JPG, PNG)
- Verify all required profile fields are filled
- Some fields may require specific formatting

**Swiping stops working**
- Check if you've reached daily swipe limits
- Verify you're not in a restricted area
- Clear browser cache and restart session
- Check for Tinder app updates or changes

**Messages not sending**
- Ensure match name exactly matches profile name
- Check that you haven't been unmatched
- Verify message length is within limits
- Try refreshing the conversation

### Debug Mode

Enable debug mode for detailed logging:

```bash
DEBUG_MODE=true npm start
```

This will provide detailed information about:
- Element selection and interaction
- Network requests and responses
- Browser automation steps
- Error details and stack traces

### Screenshots

Enable screenshot capture on errors:

```bash
SAVE_SCREENSHOTS=true npm start
```

Screenshots will be saved to `./screenshots/` directory.

## API Reference

### Tool Response Format

All tools return a standardized response:

```typescript
{
  success: boolean;
  message: string;
  data?: any;
  error?: {
    code: string;
    message: string;
    recoverable: boolean;
  };
}
```

### Error Codes

- `LOGIN_FAILED` - Authentication error
- `PROFILE_SETUP_FAILED` - Profile update error
- `SWIPE_FAILED` - Swiping action error
- `SEND_MESSAGE_FAILED` - Messaging error
- `UPDATE_SETTINGS_FAILED` - Settings update error
- `MATCH_NOT_FOUND` - Specified match not found
- `SESSION_EXPIRED` - Login session expired

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and add tests
4. Commit your changes: `git commit -am 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

### Development Setup

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is for educational and automation purposes only. Users are responsible for complying with Tinder's Terms of Service and applicable laws. The authors are not responsible for any account restrictions, bans, or other consequences resulting from the use of this tool.

Use responsibly and respect others on the platform.

## Support

- 📧 Email: support@tinder-mcp.com
- 🐛 Issues: [GitHub Issues](https://github.com/samihalawa/tinder-mcp/issues)
- 📖 Documentation: [Wiki](https://github.com/samihalawa/tinder-mcp/wiki)
- 💬 Discussions: [GitHub Discussions](https://github.com/samihalawa/tinder-mcp/discussions)

---

Made with ❤️ for the automation community
