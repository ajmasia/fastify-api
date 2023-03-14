import { FastifyReply, FastifyRequest } from 'fastify';
import { ProductSchema } from '../plugins/database/models/types';

type ProductsRequestWithParams = FastifyRequest<{
  Params: { id: string };
}>;

const getProducts = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const products = await request.productModel.find();

    reply.code(200).send(products);
  } catch (err) {
    reply.code(500).send(err);
  }
};

const getProductById = async (
  request: ProductsRequestWithParams,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params;
    const product = await request.productModel.findById(id);

    reply.code(200).send(product);
  } catch (err) {
    reply.code(500).send(err);
  }
};

const addProduct = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    if (request.validationError) {
      reply.code(400).send(request.validationError);

      return;
    }

    const newProduct = new request.productModel(request.body as ProductSchema);

    await newProduct.save();
    reply.code(201).send(newProduct);
  } catch (err) {
    reply.code(500).send(err);
  }
};

export default { getProducts, getProductById, addProduct };
