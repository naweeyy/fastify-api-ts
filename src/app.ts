import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import path from 'node:path';
import AutoLoad from '@fastify/autoload';

// Pass --options via CLI arguments in command to enable these options.
const options = {};

async function app(fastify: FastifyInstance, opts: FastifyPluginOptions): Promise<void> {
  // Place here your custom code!

  // Vérification des options transmises
  const mergedOptions = Object.assign({}, opts);

  // Chargement des plugins de support
  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: mergedOptions
  });

  // Chargement des routes
  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: mergedOptions
  });

  // Ajout d'un hook pour gérer les erreurs globales (bonne pratique Fastify)
  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  });
}

export default app;
export { options };
