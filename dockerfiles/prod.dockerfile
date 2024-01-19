FROM node:alpine3.18 as builder

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY src ./src 

COPY prisma ./prisma 

RUN yarn prisma generate

COPY tsconfig.json ./

COPY tsconfig.build.json  ./

RUN yarn run build


FROM node:alpine3.18 as final 

WORKDIR /app

COPY --from=builder /app/build ./dist

COPY --from=builder /app/package.json ./

COPY --from=builder /app/yarn.lock ./

RUN yarn install --prod --silent

COPY --from=builder /app/prisma ./prisma

RUN yarn prisma generate

COPY public ./public

CMD [ "node", "dist/main" ]