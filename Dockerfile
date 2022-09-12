FROM node:16.14-alpine
ARG NODE_ENV=production
ARG WORK_DIR=/backend
ENV NODE_ENV=${NODE_ENV}
WORKDIR ${backend}
COPY ./package.json ./
COPY ./yarn.lock ./
ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g
RUN yarn install
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "start"]