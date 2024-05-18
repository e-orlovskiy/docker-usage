FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

VOLUME ["/app/data"]

CMD ["node", "app.js"]

EXPOSE $PORT