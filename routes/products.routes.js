
import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct
} from "../controllers/products.controller.js";

const router = express.Router();

// GET todos los productos
router.get("/", getProducts);

// GET producto por id
router.get("/:id", getProductById);

// POST crear producto
router.post("/create", createProduct);

// DELETE eliminar producto
router.delete("/:id", deleteProduct);

export default router;