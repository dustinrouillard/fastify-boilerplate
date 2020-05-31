import { FastifyRequest, FastifyReply } from 'fastify';
import { Success, Catch } from '@dustinrouillard/fastify-utilities/modules/response';
import { Error } from '@dustinrouillard/fastify-utilities/modules/logger';

import { CheckPong } from '../helpers/ping';

export async function PingHandler(req: FastifyRequest, reply: FastifyReply<{}>): Promise<void> {
  try {
    const checkPing = await CheckPong();

    return Success(reply, 200, { ping: checkPing });
  } catch (error) {
    Error(error);
    return Catch(reply, error);
  }
}
