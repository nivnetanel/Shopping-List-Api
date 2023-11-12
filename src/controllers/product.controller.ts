import { Request, Response, NextFunction } from "express";
import Product from "../models/product.model";

export const getProducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    return res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    await product.remove();
    return res.status(200).json({ message: "Product Deleted" });
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { categoryId, name } = req.body;

    // Check if a product with the same name already exists
    const existingProduct = await Product.findOne({ name, categoryId });

    if (existingProduct) {
      // If product exists, increase its quantity
      existingProduct.quantity += 1;
      await existingProduct.save();
      return res.status(200).json(existingProduct);
    } else {
      // If product does not exist, create a new one
      const product = new Product({
        categoryId,
        name: name,
        quantity: 1,
      });

      await product.save();
      return res.status(201).json(product);
    }
  } catch (error) {
    next(error);
  }
};
