#!/bin/bash

# Tinder MCP Setup Script
echo "🚀 Setting up Tinder MCP..."

# Build the project
echo "📦 Building TypeScript..."
npm run build

# Install Playwright browsers if not in CI/container environment
if [ -z "$CI" ] && [ -z "$CONTAINER" ] && [ -z "$SMITHERY" ]; then
    echo "🌐 Installing Playwright browsers..."
    npx playwright install chromium
else
    echo "⚠️  Skipping browser installation in CI/container environment"
    echo "   Browsers should be pre-installed or mounted"
fi

echo "✅ Setup complete!"

# Test if the server can start
echo "🧪 Testing server startup..."
timeout 5 node dist/index.js > /dev/null 2>&1 && echo "✅ Server startup test passed" || echo "⚠️  Server needs browser binaries to run"

echo ""
echo "📋 Quick start:"
echo "1. Copy .env.example to .env"
echo "2. Add your Tinder cookies to TINDER_COOKIES"
echo "3. Set AUTO_LOGIN=true"
echo "4. Run: npm start"