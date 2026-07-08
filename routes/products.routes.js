import { verificarToken } from "../middlewares/auth.middleware.js";
import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", verificarToken, getProducts);

router.get("/:id", verificarToken, getProductById);

router.post("/create", verificarToken, createProduct);

router.delete("/:id", verificarToken, deleteProduct);

export default router;