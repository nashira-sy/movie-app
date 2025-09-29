# Stage 1: Build Vite React App
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy all project files
COPY . .

# Build the Vite app (output goes to /app/dist)
RUN npm run build

# Stage 2: Serve the Vite React App
FROM node:22-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy build result from previous stage
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Run the app with serve
CMD ["serve", "-s", "dist", "-l", "3000"]
