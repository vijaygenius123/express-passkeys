FROM node:latest
LABEL authors="vijayaraghavan"
WORKDIR /usr/src/app

ENTRYPOINT ["top", "-b"]
