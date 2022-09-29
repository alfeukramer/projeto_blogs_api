const postService = require('../services/post.service');

const getPosts = async (req, res) => {
    const getAll = await postService.getPosts();
    
        return res.status(200).json(getAll);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const postId = await postService.getPostById(id);

    if (!postId) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(postId);
};

module.exports = {
    getPosts,
    getPostById,
};