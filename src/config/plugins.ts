import fastifyCors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import { FastifyInstance } from 'fastify';
import { PUBLIC_FOLDER } from './constant';
import fastifyRateLimit from '@fastify/rate-limit';

const registerPlugins = (server: FastifyInstance) => {
  server.register(fastifyCors, {
    hook: 'preHandler',
  });

  server.register(fastifyStatic, {
    root: PUBLIC_FOLDER,
    prefix: '/assets',
  });

  server.register(fastifyRateLimit, {
    hook: 'onRequest',
    max: 10,
  });
};

export default registerPlugins;
