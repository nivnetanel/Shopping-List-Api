import mongoose from "mongoose";
import type { IProduct } from "../Interfaces/product.interface";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    categoryId: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model<IProduct>("products", productSchema);

export default Product;
