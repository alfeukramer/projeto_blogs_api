const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const category = await categoryService.createCategory(req.body);

    return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
    const allCategories = await categoryService.getAllCategories();

    return res.status(200).json(allCategories);
};

module.exports = {
    createCategory,
    getAllCategories,
};