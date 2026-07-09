import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

// Cargar variables de entorno
dotenv.config();

// Crear la aplicaci�n Express
const app = express();
// Middleware global para permitir peticiones desde otros or�genes
app.use(cors());
// Middleware global para interpretar JSON
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({ mensaje: "API funcionando correctamente" });
});
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