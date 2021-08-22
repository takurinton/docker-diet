# docker build .

FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y build-essential

COPY package.json /src/package.json

COPY . /src

RUN cd /src; npm install
RUN cd /src; npm run build:takurinton

EXPOSE 3000
CMD [ "npm", "run", "dev" ]