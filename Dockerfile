FROM node:12

# build our app from source
WORKDIR /tmp/cypher-ui
COPY package.json ./
COPY package-lock.json ./
COPY angular.json ./
COPY tsconfig.app.json ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install && npm run build:prod

# use docker multistage build to start with a fresh image
# then we copy only the static web content needed for the app
FROM nginx:alpine

COPY dist/cypher-ui/ /usr/share/nginx/html