import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import mongoose from 'mongoose';
import ProductModel from './models/products';
import { ProductSchema } from './models/types';

declare module 'fastify' {
  export interface FastifyInstance {
    mongoose: mongoose.Mongoose;
  }
  export interface FastifyRequest {
    productModel: mongoose.Model<ProductSchema>;
  }
}

const dbClient: FastifyPluginAsync = async (app: FastifyInstance) => {
  try {
    mongoose.connection.on('connected', () => {
      app.log.info({ actor: 'MongoDB' }, 'connected');
    });
    mongoose.connection.on('disconnected', () => {
      app.log.error({ actor: 'MongoDB' }, 'disconnected');
    });

    await mongoose.connect('mongodb://localhost/fastifycrud ');

    app.decorate('mongoose', mongoose);
    app.addHook('onRequest', async request => {
      request.productModel = ProductModel;
    });
  } catch (err) {
    app.log.error(err);
  }
};

export default fastifyPlugin(dbClient);
