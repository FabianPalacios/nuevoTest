const { getSalesReport } = require('../services/salesReport.service');


const getSalesReportController = async (req, res, next) => {
  try {
    const {saleDate} = req.body;
    const result = await getSalesReport(saleDate);
    res.json(result);
  } catch (err) {
    next(err);
  }
};



module.exports = {
  getSalesReportController
};

