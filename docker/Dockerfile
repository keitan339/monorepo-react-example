FROM node:16-alpine3.13

WORKDIR /project

RUN apk update && \
    apk add git && \
    apk add --update --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    echo "Asia/Tokyo" > /etc/timezone && \
    apk del tzdata
