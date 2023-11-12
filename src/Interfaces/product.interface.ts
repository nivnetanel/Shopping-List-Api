import mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  quantity: number;
  categoryId: number;
}
