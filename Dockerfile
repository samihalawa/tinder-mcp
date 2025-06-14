# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy TypeScript config and source files
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY src ./src

# Install all dependencies (including dev) for building
RUN npm ci

# Build the TypeScript application
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production

# Remove source files after build
RUN rm -rf src

# Set environment
ENV NODE_ENV=production

# Start the MCP server with stdio transport
CMD ["node", "dist/index.js"]