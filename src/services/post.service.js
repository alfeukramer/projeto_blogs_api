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
    console.log('log de get all', getAll);
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

module.exports = {
    getPosts,
    getPostById,
};