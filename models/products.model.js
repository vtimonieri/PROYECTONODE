const productos = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 15000
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 30000
    }
];


export const getAllProducts = () => {
    return productos;
};


export const getProductById = (id) => {
    return productos.find(producto => producto.id == id);
};