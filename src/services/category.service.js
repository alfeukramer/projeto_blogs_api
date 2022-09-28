const { Category } = require('../models');

const createCategory = async (body) => {
    const { name } = body;
    const category = await Category.create({ name });

    return category;
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();

    return allCategories;
};

module.exports = {
    createCategory,
    getAllCategories,
};