FROM node:16.14-alpine
ARG WORK_DIR=/backend
WORKDIR ${WORK_DIR}
COPY ./package.json ./
ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH
RUN npm config set network-timeout 600000 -g
RUN npm i --force
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["npm","start"]
