# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:18-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== RUN =======
RUN npm install

EXPOSE 3000
# Start the app
CMD [ "npm", "run", "prod" ]