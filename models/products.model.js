//const productos = [
    //{
//        id: 1,
//        nombre: "Mouse",
//        precio: 15000
 //   },
 //   {
 //       id: 2,
 //       nombre: "Teclado",
  //      precio: 30000
   // }
//];


//export const getAllProducts = () => {
 //   return productos;
//};


//export const getProductById = (id) => {
    //return productos.find(producto => producto.id == id);
//};

//export const createProduct = (producto) => {

//    productos.push(producto);

    //console.log("PRODUCTOS ACTUALES:", productos);

  //  return producto;

//};
//export const deleteProduct = (id) => {

  //  const indice = productos.findIndex(producto => producto.id == id);

   // if (indice === -1) {
    //    return null;
    //}

    //const productoEliminado = productos.splice(indice, 1);

    //return productoEliminado[0];

//};

import db from "../config/firebase.js";


const productsRef = db.collection("products");


// Obtener todos los productos

export const getAllProducts = async () => {

    const snapshot = await productsRef.get();

    console.log("Cantidad de documentos:", snapshot.size);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

};

// Obtener producto por ID
export const getProductById = async (id) => {

    const doc = await productsRef.doc(id).get();

    if (!doc.exists) {
        return null;
    }

    return {
        id: doc.id,
        ...doc.data()
    };

};


// Crear producto
export const createProduct = async (producto) => {

    const doc = await productsRef.add(producto);

    return {
        id: doc.id,
        ...producto
    };

};


// Eliminar producto
export const deleteProduct = async (id) => {

    const doc = await productsRef.doc(id).get();

    if (!doc.exists) {
        return null;
    }

    await productsRef.doc(id).delete();

    return {
        id: id,
        mensaje: "Producto eliminado"
    };

};