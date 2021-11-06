FROM node:17

# Create app directory
WORKDIR /usr/src
RUN mkdir server
RUN mkdir client

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./server/package*.json ./server
COPY ./server/server.js ./server
COPY ./client ./client
COPY ./client/dist ./server/dist

RUN npm install ./server

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
#COPY . .

EXPOSE 8080
CMD [ "node", "./server/server.js" ]