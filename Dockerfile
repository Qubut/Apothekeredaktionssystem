FROM node:16.14-alpine

ARG WORK_DIR =/build

ENV PATH=$(WORKDIR)/node_modules/.bin:$PATH

RUN mkdir ${WORKDIR}

WORKDIR ${WORK_DIR}
COPY package.json .
COPY yarn.lock .

RUN yarn install
COPY . .

RUN yarn build:ssr

CMD ["node","dist/RiemApotheke/server/main.js"]
