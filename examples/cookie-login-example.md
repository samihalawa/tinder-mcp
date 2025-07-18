# Cookie-Based Authentication Example

## 🍪 Using Tinder Cookies for Instant Authentication

The Tinder MCP supports **cookie-based authentication** which is the fastest way to login without phone verification or OTP.

### Step 1: Export Cookies from Browser

1. **Login to Tinder** in your browser normally
2. **Open DevTools** (F12 or right-click → Inspect)
3. **Go to Application tab** → Cookies → tinder.com
4. **Copy all cookies** as JSON array

### Step 2: Format Cookies

Your cookies should look like this:
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

### Step 3: Use in MCP Configuration

#### For Smithery.ai:
```yaml
tinderCookies: '[{"domain":"tinder.com","name":"session_token","value":"..."}]'
autoLogin: true
loginMethod: "cookies"
```

#### For Local MCP Client:
```json
{
  "mcpServers": {
    "tinder": {
      "command": "node",
      "args": ["dist/index.js"],
      "env": {
        "TINDER_COOKIES": "[{\"domain\":\"tinder.com\",\"name\":\"session_token\",\"value\":\"...\"}]",
        "AUTO_LOGIN": "true",
        "LOGIN_METHOD": "cookies"
      }
    }
  }
}
```

#### For Direct Tool Call:
```json
{
  "tool": "tinder_login_cookies",
  "params": {
    "cookies": "[{\"domain\":\"tinder.com\",\"name\":\"session_token\",\"value\":\"...\"}]"
  }
}
```

### Step 4: Verify Authentication

After setting up cookies, all tools will work automatically:

```json
{
  "tool": "tinder_check_login_status",
  "params": {}
}
```

Expected response:
```json
{
  "success": true,
  "message": "User is logged in",
  "data": {
    "isLoggedIn": true,
    "timestamp": "2024-07-18T21:00:00.000Z"
  }
}
```

### Step 5: Start Using Tools

Once authenticated with cookies, all 22 tools work immediately:

```json
// Get matches
{
  "tool": "tinder_get_matches",
  "params": {}
}

// Auto-swipe with strategy
{
  "tool": "tinder_auto_swipe",
  "params": {
    "count": 50,
    "likeRatio": 0.7,
    "useSuperLikes": true,
    "delayBetweenSwipes": 4000
  }
}

// Send message
{
  "tool": "tinder_send_message",
  "params": {
    "matchName": "Aithana",
    "message": "Hi! How's your day going?"
  }
}
```

## 🔄 Cookie Refresh

Cookies typically last 30+ days. When they expire:

1. **Login to Tinder** in browser again
2. **Export new cookies** using same process
3. **Update configuration** with new cookie values

## 🔒 Security Notes

- Cookies contain authentication tokens
- Keep them secure and don't share
- Use environment variables, not hardcoded values
- Cookies work only for the account that created them

## ✅ Benefits

- **No phone verification** required
- **No OTP codes** needed
- **Instant authentication** (< 1 second)
- **Session persistence** across tool calls
- **Works with existing sessions**

This is the **fastest and most reliable** authentication method for the Tinder MCP!
