import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

async function support(fastify: FastifyInstance, opts: FastifyPluginOptions): Promise<void> {
  fastify.decorate('someSupport', function (): string {
    return 'hugs';
  });
}

export default fp(support);
