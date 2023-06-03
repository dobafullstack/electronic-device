FROM node:16.18.0-alpine as build

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM node:16.18.0-alpine as production

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 4000

CMD ["yarn", "start"]