const { getCategories } = require('../services/categories.service');



const getCategoriesController = async (req, res, next) => {
  try {
    const result = await getCategories();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCategoriesController
};
