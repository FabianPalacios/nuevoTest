const express = require('express');
const router = express.Router();
const salesReportController = require('../controllers/salesReport.controller');


router.post('/salesReport', salesReportController.getSalesReportController);


module.exports = router;


