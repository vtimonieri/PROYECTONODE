
import jwt from "jsonwebtoken";

const SECRET_KEY = "mi_clave_secreta";

export const loginService = (usuario, password) => {

    if (usuario === "admin" && password === "1234") {

        const token = jwt.sign(
            {
                usuario: usuario
            },
            SECRET_KEY,
            {
                expiresIn: "1h"
            }
        );

        return {
            valido: true,
            mensaje: "Usuario válido",
            token
        };

    }

    return {
        valido: false,
        mensaje: "Usuario o contraseña incorrectos"
    };
};

export { SECRET_KEY };