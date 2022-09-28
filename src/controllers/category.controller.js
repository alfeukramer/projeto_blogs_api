const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const category = await categoryService.createCategory(req.body);

    return res.status(201).json(category);
};

module.exports = {
    createCategory,
};