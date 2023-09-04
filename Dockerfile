# Use the lightest base image with the latest Node.js version
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire application source code into the container
COPY . .

# Build the TypeScript application
RUN npm run build

# Expose port 4500
EXPOSE 4500

# Start the application
CMD ["node", "dist/app.js"]
