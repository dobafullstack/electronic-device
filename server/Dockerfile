FROM node:16.18.0-alpine3.16

ENV MONGODB_URL=mongodb+srv://dobadov3:dobadov3333@cluster0.uuhor.mongodb.net/electronic-device?retryWrites=true&w=majority
ENV SECRET_JWT=dobadov3333
ENV PORT=4000

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]