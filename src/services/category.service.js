const { Category } = require('../models');

const createCategory = async (body) => {
    const { name } = body;
    const category = await Category.create({ name });

    return category;
};

module.exports = {
    createCategory,
};