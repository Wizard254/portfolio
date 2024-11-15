# Step 1: Build the app using a Node.js image
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the app using a lightweight web server (e.g., serve)
FROM nginx:alpine

# Copy the built files from the build stage to the Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to make the app accessible from the host machine
EXPOSE 80

# Start Nginx server to serve the files
CMD ["nginx", "-g", "daemon off;"]
