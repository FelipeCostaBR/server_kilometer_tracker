FROM node:16.13.1

WORKDIR /usr/app

COPY package*.json /

RUN npm ci

COPY . .

EXPOSE 3333

CMD ["npm","run","dev:server"]
