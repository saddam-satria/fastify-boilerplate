import fastify from 'fastify';
import { PORT } from './config/constant';
import pino from 'pino';
import prismaClient from './config/database';
import registerPlugins from './config/plugins';
import loggerConfig from './config/logger';
import registerRoute from './config/routes';

(async () => {
  const server = fastify({
    logger: pino(loggerConfig),
  });

  server.addHook('onReady', async () => {
    await prismaClient.$connect();
  });

  registerPlugins(server);

  server.register((app, {}, done) => {
    registerRoute(app);

    done();
  });

  try {
    await server.listen({
      port: PORT,
    });
  } catch (error) {
    server.log.error = error;
    throw new Error(error);
  }
})();
