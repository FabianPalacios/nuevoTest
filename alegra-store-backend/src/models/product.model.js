
class Product {
  constructor({ code, name, categoryName, weight, quantity, entryDate, expirationDate, description, salePrice, purchasePrice,idCategory }) {
    this.code = code;
    this.name = name;
    this.idCategory=idCategory;
    this.categoryName = categoryName;
    this.weight = weight;
    this.quantity = quantity;
    this.purchasePrice=purchasePrice;
    this.salePrice=salePrice;
    this.entryDate = new Date(entryDate).toISOString().substring(0, 10);
    this.expirationDate = expirationDate ? new Date(expirationDate).toISOString().substring(0, 10) : null;
    this.description = description;
    
    
  }
}

module.exports = Product;
