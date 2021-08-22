# docker build .

FROM node:14-alpine as takurinton

COPY package.json /src/package.json

RUN cd /src; npm install

COPY . /src

RUN cd /src; npm run build:takurinton

EXPOSE 3000
CMD [ "npm", "run", "dev" ]


FROM alpine:latest

RUN apk --no-cache add ca-certificates
COPY --from=takurinton . .
