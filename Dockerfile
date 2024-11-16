# Step 1: Build the app using a Node.js with pnpm image
FROM guergeiro/pnpm

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) for dependency installation
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy all files to the working directory
COPY . .

# Build the app for production
# RUN pnpm run build

# vite preview --port 8080
EXPOSE 8080

CMD ["pnpm", "run", "preview"]
