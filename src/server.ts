#!/usr/bin/env node
import Fastify from 'fastify';
import app, { options } from './app';

const fastify = Fastify({
  logger: true,
  ...options
});

async function start() {
  try {
    await fastify.register(app);
    await fastify.listen({ port: 8888, host: '0.0.0.0' });
    console.log('Server listening on http://localhost:8888');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
