import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();
// Middleware global para permitir peticiones desde otros orígenes
app.use(cors());
// Middleware global para interpretar JSON
app.use(bodyParser.json());

// Rutas de productos
app.use("/api/products", productsRoutes);

app.use("/auth", authRoutes);

// Middleware para rutas inexistentes
app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada"
    });
});

export default app;