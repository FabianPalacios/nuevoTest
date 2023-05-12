
class SalesReport {
  constructor({ code, name, soldQuantity, purchasePrice, salePrice, profit }) {
    this.code = code;
    this.name = name;
    this.soldQuantity = soldQuantity;
    this.purchasePrice = purchasePrice;
    this.salePrice = salePrice;
    this.profit = profit;
  }
}

module.exports = SalesReport;

