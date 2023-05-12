const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

// Ruta para obtener todos los artículos o filtrarlos según parámetros opcionales
router.post('/getProducts', productsController.getProductsController);

// Ruta para eliminar un artículo por id
router.delete('/products', productsController.deleteProductController);

// Ruta para crear un nuevo artículo
router.post('/products', productsController.createProductController);

// Ruta para actualizar un artículo por id
router.put('/products', productsController.updateProductController);


module.exports = router;


