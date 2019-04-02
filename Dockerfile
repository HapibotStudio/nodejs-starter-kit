FROM node:11.11.0-alpine

LABEL maintainer "developers@hapibot.com"
LABEL version "1.0.0"

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ 

# Create api directory
RUN mkdir -p /api
WORKDIR /api

COPY package.json ./
RUN npm install

# Copy required folders
COPY /test ./test
COPY /server ./server
COPY /seeders ./seeders
COPY /models ./models
COPY index.js ./

CMD ["npm", "start"]