import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../services/auth.service.js";

export const verificarToken = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: "Token requerido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const usuario = jwt.verify(token, SECRET_KEY);

        req.usuario = usuario;

        next();

    } catch (error) {

        return res.status(401).json({
            error: "Token inválido"
        });

    }

};