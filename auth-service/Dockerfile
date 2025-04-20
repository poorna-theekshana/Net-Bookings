# 1. Use official Node.js base image
FROM node:16

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your code into the container
COPY . .

# 6. Build the frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# 7. Move the build folder to the backend
WORKDIR /app
RUN mv /app/frontend/build /app/build

# 8. Expose the port your app runs on
EXPOSE 8000

# 9. Start the app
CMD ["node", "server.js"] 