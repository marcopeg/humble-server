FROM node:7.0
ADD ./app /usr/src/app

WORKDIR /usr/src/app/
RUN npm install
