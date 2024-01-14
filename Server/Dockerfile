From node:alpine as build
WORKDIR /backend
COPY . .
RUN npm install

CMD ["node", "./index.js"]