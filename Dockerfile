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

RUN npm install -g pnpm@latest-10

ENV NG_ALLOWED_HOSTS=localhost,127.0.0.1,*.onrender.com
ENV NG_TRUST_PROXY_HEADERS=x-forwarded-host,x-forwarded-proto,x-forwarded-for

EXPOSE 4000

CMD [ "pnpm", "run", "serve:ssr:Easybank" ]