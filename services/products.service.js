//import { 
 //   getAllProducts,
 //   getProductById,
 //   createProduct,
 //   deleteProduct
//} from "../models/products.model.js";


//export const getProductsService = () => {

  //  return getAllProducts();

//};


//export const getProductByIdService = (id) => {

  //  return getProductById(id);

//};
//export const createProductService = (producto) => {

  //  return createProduct(producto);

//};
//export const deleteProductService = (id) => {

  //  return deleteProduct(id);

//};
import { 
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct
} from "../models/products.model.js";


// Obtener todos
export const getProductsService = async () => {

    return await getAllProducts();

};


// Obtener por ID
export const getProductByIdService = async (id) => {

    return await getProductById(id);

};


// Crear producto
export const createProductService = async (producto) => {

    return await createProduct(producto);

};


// Eliminar producto
export const deleteProductService = async (id) => {

    return await deleteProduct(id);

};