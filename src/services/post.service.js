const { User, BlogPost, Category } = require('../models');

const getPosts = async () => {
    const getAll = await BlogPost.findAll({
        include: [
            { model: User, 
                as: 'user', 
                attributes: 
                    ['id', 'displayName', 'email', 'image'] },
            { model: Category, 
                as: 'categories' },
        ],
    });
    return getAll;
};

const getPostById = async (id) => {
    const getById = await BlogPost.findByPk(id, { include: [
        { model: User, 
            as: 'user', 
            attributes: 
                ['id', 'displayName', 'email', 'image'] },
        { model: Category, 
            as: 'categories' },
    ], 
});
    return getById;
};

const putPostById = async (title, content, id) => {
    const putById = await BlogPost.update({ title, content }, { where: { id } });
    return putById;
};

module.exports = {
    getPosts,
    getPostById,
    putPostById,
};