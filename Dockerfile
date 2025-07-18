# Tinder MCP Server - Smithery Compatible
FROM node:18-slim

# Install system dependencies for Playwright
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libatspi2.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set Playwright to use system Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium \
    PLAYWRIGHT_BROWSERS_PATH=/usr/bin/chromium

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY src/ ./src/
COPY dist/ ./dist/

# Create data directory for cookies and sessions
RUN mkdir -p /app/data /app/screenshots && chmod 755 /app/data /app/screenshots

# Create non-root user for security
RUN addgroup --gid 1001 --system nodejs && \
    adduser --system --uid 1001 --gid 1001 tinder

# Change ownership of app directory
RUN chown -R tinder:nodejs /app

# Switch to non-root user
USER tinder

# Expose MCP HTTP endpoint
EXPOSE 3000

# Health check for Smithery
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Start MCP server with HTTP transport for Smithery
CMD ["node", "dist/http-server.js"]

# Labels for Smithery metadata
LABEL maintainer="Sami Halawa <samihalawaster@icloud.com>"
LABEL description="Comprehensive Tinder automation MCP server"
LABEL version="1.0.0"
LABEL mcp.tools="22"
LABEL mcp.categories="automation,dating,social,browser"
LABEL org.opencontainers.image.source="https://github.com/samihalawa/tinder-mcp"
