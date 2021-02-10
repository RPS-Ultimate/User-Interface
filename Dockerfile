# stage 1

FROM node:alpine AS build
WORKDIR /workspace
COPY ./ui .
RUN npm install 
RUN npm run build


# stage 2

FROM nginx:alpine
COPY --from=build /workspace/dist/ /usr/share/nginx/html
EXPOSE 80
