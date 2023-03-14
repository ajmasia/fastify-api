import { Schema, model } from 'mongoose';
import { ProductSchema } from './types';

const productSchema = new Schema<ProductSchema>(
  {
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<ProductSchema>('Product', productSchema);
