import { getProductsService } from "../services/products.service.js";


export const getProducts = (req, res) => {

    //console.log("******** CONTROLLER NUEVO ********");

    const productos = getProductsService();

    res.json(productos);

};
export const getProductById = (req, res) => {

    res.json({
        mensaje: "Buscar producto",
        id: req.params.id
    });

};

export const createProduct = (req, res) => {

    res.json({
        mensaje: "Crear producto",
        datos: req.body
    });

};

export const deleteProduct = (req, res) => {

    res.json({
        mensaje: "Eliminar producto",
        id: req.params.id
    });

};