# Pixcape Studio web deployment, based on the GPL-licensed Blockbench source.
FROM node:20-bookworm-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build-web && test -s dist/bundle.js

FROM nginx:1.27-alpine
COPY --from=build /app/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]