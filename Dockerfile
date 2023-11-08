FROM node:17-alpine
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
COPY src/ .
COPY public/ .
RUN npm install
COPY . .
CMD npm start