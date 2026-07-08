export const loginService = (usuario, password) => {

    // Por ahora simulamos una validación
    if (usuario === "admin" && password === "1234") {

        return {
            valido: true,
            mensaje: "Usuario válido"
        };

    }

    return {
        valido: false,
        mensaje: "Usuario o contraseña incorrectos"
    };

};