const { getProducts, createProduct, updateProduct, deleteProduct } = require('../services/products.service');

const getProductsController = async (req, res, next) => {
  try {
    const Products = await getProducts(req.body);
    res.json(Products);
  } catch (err) {
    next(err);
  }
};

const deleteProductController = async (req, res, next) => {
  try {
    const {code} = req.body;
    return deleteProduct(code) ? res.sendStatus(200): res.status(404).json({ message: "Product not found" });
      } catch (err) {
        res.status(500).json({ message: "internal error server" });
  }
};

const createProductController = async (req, res, next) => {
  try {
    const { code, name, idCategory, weight, quantity, entryDate, expirationDate, description, salePrice, purchasePrice } = req.body;

    const result = await createProduct({ code, name, idCategory, weight, quantity, entryDate, expirationDate, description,salePrice, purchasePrice });

    return result ? res.sendStatus(201) : res.status(400).json({ message: "Error creating product" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};




const updateProductController = async (req, res, next) => {
  try {
    const { code, name, idCategory, weight, quantity, entryDate, expirationDate, description } = req.body;

    const result = await updateProduct({ code, name, idCategory, weight, quantity, entryDate, expirationDate, description });
    return result ? res.sendStatus(200) : res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};





module.exports = {
  getProductsController,
  createProductController,
  updateProductController,
  deleteProductController,
};


