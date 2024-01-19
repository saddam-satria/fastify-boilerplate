import getResponse from '../commons/response';

const appHandler = (_request, reply) => {
  reply.status(200).send(getResponse<null>('welcome to fastify api', 200, null));
};

export default appHandler;
