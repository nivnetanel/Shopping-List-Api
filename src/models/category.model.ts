import mongoose from "mongoose";
import type { ICategory } from "../Interfaces/category.interface";

const categorySchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
});

const Category = mongoose.model<ICategory>("category", categorySchema);

export default Category;
