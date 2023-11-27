FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 6006

CMD yarn storybook