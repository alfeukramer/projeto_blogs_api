const postService = require('../services/post.service');

const getPosts = async (req, res) => {
    const getAll = await postService.getPosts();
    
        return res.status(200).json(getAll);
};

module.exports = {
    getPosts,
};