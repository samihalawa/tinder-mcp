# Tinder MCP Tool - Example Workflows

This document provides comprehensive examples of how to use the Tinder MCP tool for various automation scenarios.

## Basic Authentication Workflow

### Phone Number Login
```json
{
  "tool": "tinder_login_phone",
  "params": {
    "phoneNumber": "680821181",
    "countryCode": "34"
  }
}
```

### Submit OTP Code
```json
{
  "tool": "tinder_submit_otp",
  "params": {
    "otpCode": "123456"
  }
}
```

### Apple ID Authentication (if required)
```json
{
  "tool": "tinder_login_apple_id",
  "params": {
    "email": "user@icloud.com",
    "password": "password",
    "twoFactorCode": "123456"
  }
}
```

## Profile Setup Workflow

### Complete Profile Setup
```json
{
  "tool": "tinder_setup_profile",
  "params": {
    "photos": [
      "/path/to/photo1.jpg",
      "/path/to/photo2.jpg",
      "/path/to/photo3.jpg"
    ],
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
}
```

### Get Current Profile
```json
{
  "tool": "tinder_get_profile",
  "params": {}
}
```

## Discovery and Swiping Workflows

### Manual Swiping
```json
{
  "tool": "tinder_swipe",
  "params": {
    "action": "like"
  }
}
```

### Strategic Auto-Swiping
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

### Conservative Auto-Swiping
```json
{
  "tool": "tinder_auto_swipe",
  "params": {
    "count": 20,
    "likeRatio": 0.3,
    "useSuperLikes": false,
    "delayBetweenSwipes": 5000
  }
}
```

### Use Boost
```json
{
  "tool": "tinder_use_boost",
  "params": {}
}
```

### View Profile Photos
```json
{
  "tool": "tinder_view_profile",
  "params": {
    "direction": "next"
  }
}
```

### Rewind Last Swipe
```json
{
  "tool": "tinder_rewind",
  "params": {}
}
```

## Messaging Workflows

### Get All Matches
```json
{
  "tool": "tinder_get_matches",
  "params": {}
}
```

### Send Text Message
```json
{
  "tool": "tinder_send_message",
  "params": {
    "matchName": "Aithana",
    "message": "Hola! Qué tal"
  }
}
```

### Send Emoji
```json
{
  "tool": "tinder_send_emoji",
  "params": {
    "matchName": "Aithana",
    "emoji": "🥰"
  }
}
```

### Share WhatsApp Contact
```json
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

### Get Conversation History
```json
{
  "tool": "tinder_get_conversation",
  "params": {
    "matchName": "Aithana"
  }
}
```

### Unmatch Someone
```json
{
  "tool": "tinder_unmatch",
  "params": {
    "matchName": "Aithana"
  }
}
```

## Settings Management Workflows

### Update Discovery Settings
```json
{
  "tool": "tinder_update_settings",
  "params": {
    "ageRange": {
      "min": 25,
      "max": 35
    },
    "maxDistance": 50,
    "showMe": "women",
    "onlyShowWithPhotos": true,
    "recentlyActive": true
  }
}
```

### Get Current Settings
```json
{
  "tool": "tinder_get_settings",
  "params": {}
}
```

### Reset to Default Settings
```json
{
  "tool": "tinder_reset_settings",
  "params": {}
}
```

## Complete Automation Workflows

### Daily Tinder Routine
```javascript
// 1. Check login status
const loginStatus = await tinder_check_login_status();

// 2. Login if needed
if (!loginStatus.data.isLoggedIn) {
  await tinder_login_phone({
    phoneNumber: "680821181",
    countryCode: "34"
  });
  
  // Wait for OTP and submit
  await tinder_submit_otp({
    otpCode: "123456" // Get from SMS
  });
}

// 3. Use boost if available
await tinder_use_boost();

// 4. Strategic swiping
await tinder_auto_swipe({
  count: 100,
  likeRatio: 0.6,
  useSuperLikes: true,
  superLikeRatio: 0.05,
  delayBetweenSwipes: 4000
});

// 5. Check for new matches
const matches = await tinder_get_matches();

// 6. Send personalized messages to new matches
for (const match of matches.data.matches) {
  await tinder_send_message({
    matchName: match.profile.name,
    message: `Hi ${match.profile.name}! How's your day going?`
  });
}
```

### Profile Optimization Workflow
```javascript
// 1. Get current profile
const currentProfile = await tinder_get_profile();

// 2. Update profile with optimized content
await tinder_setup_profile({
  bio: "Adventure seeker 🌍 | Coffee enthusiast ☕ | Dog lover 🐕 | Looking for genuine connections",
  interests: ["Travel", "Photography", "Hiking", "Coffee", "Dogs"],
  languages: ["English", "Spanish"],
  relationshipType: "Long-term relationship"
});

// 3. Optimize discovery settings
await tinder_update_settings({
  ageRange: { min: 25, max: 35 },
  maxDistance: 25,
  onlyShowWithPhotos: true,
  recentlyActive: true
});
```

### Match Management Workflow
```javascript
// 1. Get all matches
const matches = await tinder_get_matches();

// 2. Process each match
for (const match of matches.data.matches) {
  // Get conversation history
  const conversation = await tinder_get_conversation({
    matchName: match.profile.name
  });
  
  // If no messages exchanged, send opener
  if (conversation.data.messages.length === 0) {
    await tinder_send_message({
      matchName: match.profile.name,
      message: "Hey! I noticed we both love travel. What's your favorite destination?"
    });
  }
  
  // If conversation is active, share contact
  if (conversation.data.messages.length > 5) {
    await tinder_share_contact({
      matchName: match.profile.name,
      contactInfo: {
        phoneNumber: "679794037",
        countryCode: "34",
        type: "whatsapp"
      }
    });
  }
}
```

### A/B Testing Workflow
```javascript
// Test different swiping strategies
const strategies = [
  { likeRatio: 0.3, name: "Conservative" },
  { likeRatio: 0.7, name: "Aggressive" },
  { likeRatio: 0.5, name: "Balanced" }
];

for (const strategy of strategies) {
  console.log(`Testing ${strategy.name} strategy...`);
  
  const result = await tinder_auto_swipe({
    count: 30,
    likeRatio: strategy.likeRatio,
    useSuperLikes: true,
    superLikeRatio: 0.1,
    delayBetweenSwipes: 3000
  });
  
  console.log(`${strategy.name}: ${result.data.matches} matches from ${result.data.totalSwipes} swipes`);
}
```

## Error Handling Examples

### Robust Login with Retry
```javascript
async function robustLogin(phoneNumber, countryCode, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await tinder_login_phone({
        phoneNumber,
        countryCode
      });
      
      if (result.success) {
        return result;
      }
      
      console.log(`Login attempt ${attempt} failed: ${result.message}`);
      
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      }
    } catch (error) {
      console.error(`Login attempt ${attempt} error:`, error);
      
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
  
  throw new Error(`Failed to login after ${maxRetries} attempts`);
}
```

### Safe Auto-Swiping with Limits
```javascript
async function safeAutoSwipe(totalSwipes, batchSize = 20) {
  let completedSwipes = 0;
  
  while (completedSwipes < totalSwipes) {
    const remainingSwipes = totalSwipes - completedSwipes;
    const currentBatch = Math.min(batchSize, remainingSwipes);
    
    try {
      const result = await tinder_auto_swipe({
        count: currentBatch,
        likeRatio: 0.6,
        useSuperLikes: true,
        superLikeRatio: 0.05,
        delayBetweenSwipes: 4000
      });
      
      completedSwipes += result.data.totalSwipes;
      console.log(`Completed ${completedSwipes}/${totalSwipes} swipes`);
      
      // Break between batches to avoid detection
      if (completedSwipes < totalSwipes) {
        await new Promise(resolve => setTimeout(resolve, 30000)); // 30 second break
      }
      
    } catch (error) {
      console.error('Swiping error:', error);
      break;
    }
  }
  
  return completedSwipes;
}
```

## Best Practices

### 1. Rate Limiting
- Use delays between actions (3-5 seconds minimum)
- Take breaks between automation sessions
- Don't exceed 100-200 swipes per session

### 2. Natural Behavior
- Vary your swiping ratios
- Mix manual and automated actions
- Use realistic timing patterns

### 3. Error Handling
- Always check tool responses for success
- Implement retry logic for network issues
- Handle session expiration gracefully

### 4. Privacy and Security
- Use environment variables for sensitive data
- Enable cookie encryption
- Monitor for unusual account activity

### 5. Compliance
- Respect Tinder's Terms of Service
- Use automation responsibly
- Don't spam or harass other users
