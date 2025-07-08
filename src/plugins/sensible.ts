import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
async function sensible(fastify: FastifyInstance, opts: FastifyPluginOptions): Promise<void> {
  await fastify.register(require('@fastify/sensible'), {
    errorHandler: false
  });
}

export default fp(sensible);
