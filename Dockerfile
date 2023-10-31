FROM node:16-alpine as builder
WORKDIR /react-app
COPY package*.json .
COPY yarn.lock .
COPY vite.config.ts .
COPY tsconfig.json .
COPY .yarnrc.yml .
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "preview", "--host", "0.0.0.0"]
