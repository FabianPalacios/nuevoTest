const pool = require('../config/db');
const Product = require('../models/product.model');


const getProducts = async (params) => {
  const { code, name, idCategory, weight, quantity, entryDateStart, entryDateEnd, expirationDate, description,salePrice,purchasePrice } = params;
  const queryParams = {
    inCode: code || null,
    inName: name || null,
    inIdCategory: idCategory || null,
    inWeight: weight || null,
    inQuantity: quantity || null,
    inEntryDateStart: entryDateStart || null,
    inEntryDateEnd: entryDateEnd || null,
    inExpirationDate: expirationDate || null,
    inDescription: description || null,
    inSalePrice: salePrice || null,
    inPurchasePrice: purchasePrice || null
  };

  return new Promise((resolve, reject) => {
    pool.query('CALL getProducts(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [queryParams.inCode, queryParams.inName, queryParams.inIdCategory, queryParams.inWeight, queryParams.inQuantity, queryParams.inEntryDateStart, queryParams.inEntryDateEnd, queryParams.inExpirationDate, queryParams.inDescription,queryParams.inSalePrice,queryParams.inPurchasePrice], (error, results, fields) => {
      if (error) reject(error);

      if (!results || !Array.isArray(results[0])) {
        resolve([]);
        return;
      }

      const formattedResults = results[0].map((product) => {
        return new Product(product);
      });

      resolve(formattedResults);
    });
  });
};


const deleteProduct = async (code) => {
  try {
    pool.query('CALL deleteProduct(?)', [code]);
    return true;
  } catch (error) {
    return false;
  }
};



const createProduct = async ({ code, name, idCategory, weight, quantity, entryDate, expirationDate, description,salePrice,purchasePrice }) => {

  try {
    pool.query(
      'CALL createProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [code, name, idCategory, weight, quantity, entryDate, expirationDate, description,salePrice,purchasePrice]);
    return true;
  } catch (error) {
    return false;
  }
};



const updateProduct = async ({ code, name, idCategory, weight, quantity, entryDate, expirationDate, description,salePrice,purchasePrice }) => {
  try {

    pool.query(
      'CALL updateProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [code, name, idCategory, weight, quantity, entryDate, expirationDate, description,salePrice,purchasePrice]);

      return true;
  } catch (error) {
    return false;
  }
};





module.exports = {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
};
