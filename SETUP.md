# Complete Tinder MCP Setup Guide

This guide helps you set up a complete, Smithery.ai-ready Tinder MCP for authentication and automation using cookies.

## 🚀 Quick Start (Recommended: Cookie Authentication)

### Step 1: Get Your Tinder Cookies

1. **Login to Tinder** in your browser normally
2. **Open DevTools** (F12 or right-click → Inspect)
3. **Go to Application tab** → Cookies → tinder.com
4. **Copy all cookies** - you need the complete JSON array

Example format:
```json
[
    {
        "domain": "tinder.com",
        "expirationDate": 1753451810.149193,
        "hostOnly": true,
        "httpOnly": false,
        "name": "AWSALBCORS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "V4brrUttuKuMnP3cWJ2Jr2uYygVmyOpur+k46vvWpsyyYahnnLUzo1o3HbqtmHO3NnS26sG/IxxgTXTtEq5xxubHccRFcYLzwNsJ71qDXl8LMi+GtRUZZYvHMZj3"
    },
    {
        "domain": ".tinder.com",
        "expirationDate": 1787408337.664429,
        "hostOnly": false,
        "httpOnly": false,
        "name": "_ga_CDPT3R4PG7",
        "path": "/",
        "sameSite": null,
        "secure": false,
        "session": false,
        "storeId": null,
        "value": "GS2.1.s1752846987$o1$g1$t1752848337$j58$l0$h0"
    }
]
```

### Step 2: Setup for Smithery.ai

In your Smithery.ai configuration:

```yaml
tinderCookies: '[{"domain":"tinder.com","name":"session_token","value":"..."}]'
autoLogin: true
loginMethod: cookies
headless: true
```

### Step 3: Setup for Local MCP Client

Create `.env` file:
```bash
cp .env.example .env
```

Edit `.env`:
```env
TINDER_COOKIES=[{"domain":"tinder.com","name":"session_token","value":"..."}]
AUTO_LOGIN=true
LOGIN_METHOD=cookies
HEADLESS=true
```

### Step 4: Build and Test

```bash
npm install
npm run build
npm start
```

## 🛠️ Available Tools (22 Total)

### Authentication (6 tools)
- `tinder_login_cookies` - Fast cookie-based login
- `tinder_login_phone` - Phone + OTP login
- `tinder_submit_otp` - Submit OTP code
- `tinder_login_apple_id` - Apple ID login
- `tinder_check_login_status` - Check if logged in
- `tinder_logout` - Logout and clear session

### Profile Management (2 tools)
- `tinder_setup_profile` - Complete profile setup
- `tinder_get_profile` - Get current profile info

### Discovery & Swiping (5 tools)
- `tinder_swipe` - Manual like/pass/superlike
- `tinder_auto_swipe` - Automated strategic swiping
- `tinder_use_boost` - Activate boost
- `tinder_view_profile` - Navigate profile photos
- `tinder_rewind` - Undo last swipe

### Messaging (6 tools)
- `tinder_get_matches` - Get all matches
- `tinder_send_message` - Send text message
- `tinder_send_emoji` - Send emoji reaction
- `tinder_share_contact` - Share WhatsApp/phone
- `tinder_get_conversation` - Get chat history
- `tinder_unmatch` - Unmatch with someone

### Settings (3 tools)
- `tinder_update_settings` - Update preferences
- `tinder_get_settings` - Get current settings
- `tinder_reset_settings` - Reset to defaults

## 📱 Example Usage

### Basic Authentication Flow
```json
// 1. Login with cookies (fastest)
{
  "tool": "tinder_login_cookies",
  "params": {
    "cookies": "[{\"domain\":\"tinder.com\",\"name\":\"session_token\",\"value\":\"...\"}]"
  }
}

// 2. Check status
{
  "tool": "tinder_check_login_status",
  "params": {}
}
```

### Automated Swiping Strategy
```json
{
  "tool": "tinder_auto_swipe",
  "params": {
    "count": 50,
    "likeRatio": 0.7,
    "useSuperLikes": true,
    "superLikeRatio": 0.1,
    "delayBetweenSwipes": 4000
  }
}
```

### Match Messaging Workflow
```json
// 1. Get matches
{
  "tool": "tinder_get_matches",
  "params": {}
}

// 2. Send message
{
  "tool": "tinder_send_message",
  "params": {
    "matchName": "Aithana",
    "message": "Hi! How's your day going?"
  }
}

// 3. Share contact
{
  "tool": "tinder_share_contact",
  "params": {
    "matchName": "Aithana",
    "contactInfo": {
      "phoneNumber": "679794037",
      "countryCode": "34",
      "type": "whatsapp"
    }
  }
}
```

## 🔧 Configuration Options

### Browser Settings
- `HEADLESS=true` - Run browser in background
- `DEBUG_MODE=false` - Enable detailed logging
- `SAVE_SCREENSHOTS=false` - Save error screenshots

### Auto-Login Settings
- `AUTO_LOGIN=true` - Login on server start
- `LOGIN_METHOD=cookies` - Preferred auth method
- `TINDER_COOKIES=...` - Your cookie JSON string

### Performance Tuning
- `DEFAULT_TIMEOUT=30000` - Element wait timeout
- `STABILITY_WAIT=5000` - Page stability wait
- `SWIPE_DELAY=3000` - Default swipe delay

## 🔒 Security Best Practices

1. **Protect Your Cookies** - They contain authentication tokens
2. **Use Environment Variables** - Never hardcode cookies
3. **Regular Updates** - Refresh cookies every 30 days
4. **Monitor Usage** - Watch for unusual account activity

## 🚨 Important Notes

- **Rate Limiting**: Built-in delays prevent detection
- **Realistic Behavior**: Random delays and patterns
- **Error Recovery**: Automatic retry and graceful failure
- **Session Persistence**: Saves and restores login state

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/samihalawa/tinder-mcp/issues)
- 📖 **Documentation**: [GitHub Wiki](https://github.com/samihalawa/tinder-mcp/wiki)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/samihalawa/tinder-mcp/discussions)

---

**Ready to automate your Tinder experience responsibly!** 🎯