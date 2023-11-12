import express from "express";
import { getCategory } from "../controllers/category.controller";

const router = express.Router();

router.route("/").get(getCategory);

export default router;
