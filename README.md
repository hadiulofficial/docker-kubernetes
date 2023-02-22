# docker-kubar

Dockerfile
```
FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]

```
run coment for buld new image/container based on our Dockerfile

```
docker build .

```