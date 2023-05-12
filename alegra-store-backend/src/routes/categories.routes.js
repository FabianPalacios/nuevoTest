const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller');


router.get('/categories', categoriesController.getCategoriesController);


module.exports = router;


