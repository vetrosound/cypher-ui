FROM node:lts

# build our app from source
WORKDIR /tmp/cypher-ui
COPY package.json ./
COPY yarn.lock ./
COPY angular.json ./
COPY tsconfig.app.json ./
COPY tsconfig.json ./
COPY src ./src
RUN yarn install && yarn build:prod

# use docker multistage build to start with a fresh image
# then we copy only the static web content needed for the app
FROM nginx:stable

COPY --from=0 /tmp/cypher-ui/dist/cypher-ui/ /usr/share/nginx/html
