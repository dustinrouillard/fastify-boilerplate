import { FastifyInstance, RegisterOptions } from 'fastify';

import { PingHandler } from '../modules/handlers/ping';

export function Server(server: FastifyInstance, _options: RegisterOptions<{}, {}, {}>, next?: () => void): void {
  server.get('/', PingHandler);
  if (next) next();
}
