# stage 1

FROM node:alpine AS build
WORKDIR /ui
COPY . .
RUN npm install -g npm@7.5.3 && npm run build


# stage 2

FROM nginx:alpine
COPY --from=build /app/dist/ui /usr/share/nginx/html
EXPOSE 80
