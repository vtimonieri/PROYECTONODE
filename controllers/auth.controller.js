import { loginService } from "../services/auth.service.js";


export const login = (req, res) => {

    const { usuario, password } = req.body;


    const resultado = loginService(usuario, password);


    if (!resultado.valido) {

        return res.status(401).json({
            error: resultado.mensaje
        });

    }


    res.json({
        mensaje: resultado.mensaje,
        usuario: usuario
    });

};