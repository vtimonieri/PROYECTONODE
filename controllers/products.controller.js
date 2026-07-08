import { 
    getProductsService,
    getProductByIdService,
    createProductService,
    deleteProductService
} from "../services/products.service.js";


export const getProducts = async (req, res) => {

    const productos = await getProductsService();

    res.json(productos);

};

export const getProductById = (req, res) => {

    const id = req.params.id;

    const producto = getProductByIdService(id);

    if (!producto) {

        return res.status(404).json({
            error: "Producto no encontrado"
        });

    }

    res.json(producto);

};


//export const createProduct = (req, res) => {

  //  res.json({
   //     mensaje: "Crear producto",
    //    datos: req.body
   // });

//};

export const createProduct = (req, res) => {

    console.log(req.body);

    const producto = req.body;

    const nuevoProducto = createProductService(producto);

    res.status(201).json({
        mensaje: "Producto creado",
        producto: nuevoProducto
    });

};

//export const deleteProduct = (req, res) => {

    //res.json({
    //    mensaje: "Eliminar producto",
    //    id: req.params.id
    //});

//};
export const deleteProduct = (req, res) => {

    const id = req.params.id;

    const productoEliminado = deleteProductService(id);

    if (!productoEliminado) {

        return res.status(404).json({
            error: "Producto no encontrado"
        });

    }

    res.json({
        mensaje: "Producto eliminado",
        producto: productoEliminado
    });

};