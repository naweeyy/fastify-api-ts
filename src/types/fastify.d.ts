import { FastifyInstance } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    someSupport(): string;
  }
}
