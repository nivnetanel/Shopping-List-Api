import "colors";
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";

// utils
import { connectDB } from "./config/db";

// routers
import productRouter from "./routes/product.router";
import categoryRouter from "./routes/category.router";

// middlewares
import { errorHandler, notFound } from "./middleware/error.middleware";

config();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://niv-shopping-list.netlify.app/, http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
app.use(cors());

// routes handler

// app.use("/", "Server is running!");
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);

// not found handler
app.use(notFound);

// error handler
app.use(errorHandler);

// connect to the database
connectDB().then(() => {
  app.listen(Number(process.env.PORT) || 5000, () => {
    console.log(`Server running successfully`.green.bold);
  });
});
