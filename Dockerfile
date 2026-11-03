FROM node:24.20.0-alpine3.24 AS base

WORKDIR /app

COPY . /app/

RUN npm install -g pnpm@latest-10

RUN pnpm install

RUN pnpm build --configuration=production

FROM nginx:alpine

COPY --from=base /app/dist/Easybank/browser /usr/share/nginx/html
COPY --from=base /app/package*.json /usr/share/nginx/html

EXPOSE 80