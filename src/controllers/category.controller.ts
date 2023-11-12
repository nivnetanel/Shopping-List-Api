import { Request, Response, NextFunction } from "express";
import Category from "../models/category.model";

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    next(error);
  }
};
