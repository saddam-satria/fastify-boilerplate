import { FastifyInstance } from 'fastify';
import appRoute from '../app/appRoute';

const registerRoute = (server: FastifyInstance) => {
  appRoute(server);
};

export default registerRoute;
