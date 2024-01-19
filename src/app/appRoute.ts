import { FastifyInstance } from 'fastify';
import appHandler from './appHandler';

const appRoute = (server: FastifyInstance) => {
  server.get('/', {}, appHandler);
};

export default appRoute;
