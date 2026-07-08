import { getAllProducts, getProductById } from "../models/products.model.js";


export const getProductsService = () => {

    return getAllProducts();

};


export const getProductByIdService = (id) => {

    return getProductById(id);

};