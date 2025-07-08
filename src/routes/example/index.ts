import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';

async function example(fastify: FastifyInstance, opts: FastifyPluginOptions): Promise<void> {
  fastify.get('/', async function (request: FastifyRequest, reply: FastifyReply) {
    return 'this is an example';
  });
}

export default example;
