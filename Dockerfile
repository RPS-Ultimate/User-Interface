<<<<<<< HEAD
# stage1 as builder
FROM node:10-alpine as builder
# copy the package.json to install dependencies
COPY ./ui/package.json ./ui/package-lock.json ./
# Install the dependencies and make the folder
RUN npm install && mkdir /app && mv ./ui/node_modules ./app
WORKDIR /app
COPY ./ui .
# Build the project and copy the files
=======
# stage 1

FROM node:alpine AS build
WORKDIR /workspace
COPY ./ui .
RUN npm install 
>>>>>>> e77f144000927296381d56964603b24cd486dbe3
RUN npm run build

FROM nginx:alpine
#!/bin/sh
COPY ./nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stage 1
COPY --from=builder /app/dist/ui /usr/share/nginx/html
EXPOSE 80 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]
