FROM node:16.18.0

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]