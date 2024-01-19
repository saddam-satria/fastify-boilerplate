FROM node:alpine3.18

WORKDIR /nest-boilerplate

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

COPY src ./src

COPY prisma ./prisma

RUN yarn prisma generate

COPY tsconfig.json ./

COPY tsconfig.build.json  ./

COPY .eslintrc.js ./

COPY .prettierrc ./

RUN yarn run build 


CMD [ "yarn", "start" ]