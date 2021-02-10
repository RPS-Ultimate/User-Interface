# stage 1

FROM node:alpine AS build
WORKDIR /ui
COPY . .
RUN npm install && npm run build


# stage 2

FROM nginx:alpine
COPY --from=build /app/dist/ui /usr/share/nginx/html
EXPOSE 80
