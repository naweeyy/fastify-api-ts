import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';

async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions): Promise<void> {
  fastify.get('/', async function (request: FastifyRequest, reply: FastifyReply) {
    return { root: true };
  });
}

export default routes;
