FROM node:24.20.0-alpine3.24 AS base

WORKDIR /app

COPY . /app/

RUN npm install -g pnpm@latest-10

RUN pnpm install

RUN pnpm run build --configuration=production --localize

FROM node:24.20.0-alpine3.24 AS prod

WORKDIR /app

COPY --from=base /app/package.json ./package.json
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist

EXPOSE 4000

ENV NG_ALLOWED_HOSTS=localhost,127.0.0.1,*.onrender.com

CMD [ "npm", "run", "serve:ssr:Easybank" ]