# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3001

# Define the command to start your application
CMD [ "node", "server.js" ]
