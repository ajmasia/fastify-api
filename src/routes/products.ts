import { FastifyInstance } from 'fastify';
import { FromSchema } from 'json-schema-to-ts';

import controller from '../controllers/products';

interface ProductsParams {
  Params: {
    id: string;
  };
}

const product = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    price: { type: 'number' },
    image: { type: 'string' },
    description: { type: 'string' },
    quantity: { type: 'number' }
  },
  required: ['title']
} as const;

export default async (app: FastifyInstance) => {
  app.get('/products', controller.getProducts);
  app.get<ProductsParams>('/products/:id', controller.getProductById);
  app.post<{ Body: FromSchema<typeof product> }>(
    '/products',
    {
      schema: {
        body: product,
        response: {
          201: {
            type: 'string'
          }
        }
      },
      attachValidation: true
    },
    controller.addProduct
  );
};
