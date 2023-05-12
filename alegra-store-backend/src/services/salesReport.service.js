const pool = require('../config/db');
const SaleReport = require('../models/salesReport.model');

const getSalesReport = async (saleDate) => {
  return new Promise((resolve, reject) => {
    pool.query('CALL getSalesReport(?)', [saleDate], (error, results, fields) => {
      if (error) reject(error);

      if (!results || !Array.isArray(results[0])) {
        resolve([]);
        return;
      }

      const formattedResults = results[0].map((report) => {
        return new SaleReport(report);
      });

      resolve(formattedResults);
    });
  });
};

module.exports = {
  getSalesReport,
};
