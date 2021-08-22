# docker build .

FROM node:14-alpine

COPY package.json /src/package.json

COPY . /src

RUN cd /src; npm install
RUN cd /src; npm run build:takurinton

EXPOSE 3000
CMD [ "npm", "run", "dev" ]