FROM node:6.3.1

RUN apt-get update

RUN mkdir /app
WORKDIR /app

COPY ./app /app
RUN npm install
