# docker build .

FROM ubuntu:20.04

RUN apt-get update && apt-get install -y curl && apt-get install -y nodejs && apt-get install -y npm && apt-get install -y build-essential

COPY package.json /src/package.json

COPY . /src

RUN cd /src && npm install && cd /src; npm run build:takurinton

EXPOSE 3000
CMD [ "npm", "run", "dev" ]