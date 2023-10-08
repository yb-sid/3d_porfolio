# Use Node 16 Alpine as base image
FROM node:20-alpine as base

# Set working directory 
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy all files
COPY . .

# Build react app 
RUN npm run build

# Use an official Nginx runtime as the base image
FROM nginx:mainline-alpine3.18-slim

# Copy the built files from the previous stage into Nginx
COPY --from=base /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
