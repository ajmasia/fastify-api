import Fastify from 'fastify';
import { v4 as uuidGen } from 'uuid';

import productsRoutes from './routes/products';

import dbClient from './plugins/database';
import { request } from 'http';

const app = Fastify({
  // logger: {
  //   transport: {
  //     target: 'pino-pretty',
  //     options: {
  //       colorize: true
  //       // translateTime: 'HH:MM:ss Z',
  //       // ignore: 'pid,hostname',
  //       // customColors: 'info:green,debug:orange,warn:yellow:error:red,greyMessage:white',
  //       // singleLine: true
  //     }
  //   }
  // },
  logger: true,

  genReqId: () => {
    return uuidGen();
  }
});

app.register(dbClient);
app.register(productsRoutes);
app.get('/', (request, reply) => {
  app.log.info('I received a request');
  reply.send('Hello world');
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    // app.log.info(`server running on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
