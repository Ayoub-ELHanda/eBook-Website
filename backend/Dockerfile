# Use Node.js official image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the port and run the server
EXPOSE 5000
CMD ["node", "server.js"]
