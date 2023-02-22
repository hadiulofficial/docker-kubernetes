
# Use a Node.js runtime as a parent image
FROM node
# Set the working directory to /app
WORKDIR /app

# Copy the rest of the application code into the container
COPY . /app

# Expose port 3000 for the application
EXPOSE 3000

# Install dependencies
RUN npm install


# Start the application when the container launches
CMD ["node", "server.js"]

