import fastify from 'fastify';

import { PortConfig } from './modules/config';

import { Log } from '@dustinrouillard/fastify-utilities/modules/logger';
import { Logger, Missing } from '@dustinrouillard/fastify-utilities/modules/request';

import { Ping as PingRoute } from './routes';

const server = fastify();

// Register request logger
server.register(Logger);

// Routes
server.register(PingRoute, { prefix: '/ping' });

// Not found 404 handler
server.register(Missing);

server.listen(PortConfig, () => Log(`Server ready on ${PortConfig}`));
