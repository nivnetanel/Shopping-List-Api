import mongoose from "mongoose";
import dotenv from "dotenv";
const colors = require("colors");

dotenv.config({ path: "../.env" });

export const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI not found in environment variables.".red);
    process.exit(1);
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connection.connection.host}`.yellow);
    console.log(`Database Name: ${connection.connection.db.databaseName}`.cyan);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
};
