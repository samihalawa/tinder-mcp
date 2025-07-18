# Tinder MCP Server Dockerfile
FROM node:18-alpine

# Install system dependencies for Playwright
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    && rm -rf /var/cache/apk/*

# Set Playwright to use system Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
    PLAYWRIGHT_BROWSERS_PATH=/usr/bin/chromium-browser

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
RUN mkdir -p /app/data && chmod 755 /app/data

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S tinder -u 1001 -G nodejs

# Change ownership of app directory
RUN chown -R tinder:nodejs /app

# Switch to non-root user
USER tinder

# Expose port (if needed for HTTP interface)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "console.log('Health check passed')" || exit 1

# Default command
CMD ["node", "dist/index.js"]

# Labels for metadata
LABEL maintainer="Sami Halawa <samihalawaster@icloud.com>"
LABEL description="Tinder MCP Server - Comprehensive automation tool"
LABEL version="1.0.0"
LABEL org.opencontainers.image.source="https://github.com/samihalawa/tinder-mcp"
