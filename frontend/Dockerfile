# Use Node.js official image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the frontend and expose the server
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]
