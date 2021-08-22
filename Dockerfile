# docker build .

FROM centos:centos6

RUN yum install -y epel-release
RUN yum install -y nodejs npm

COPY package.json /src/package.json

RUN cd /src; npm install
RUN cd /src; npm build:takurinton

COPY . /src

EXPOSE 3000
CMD [ "npm", "run", "dev" ]