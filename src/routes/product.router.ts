import { getProducts, getProductById, deleteProduct, createProduct } from "../controllers/product.controller";
import express from "express";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getProductById).delete(deleteProduct);

export default router;
