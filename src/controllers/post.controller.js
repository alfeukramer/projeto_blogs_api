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

const putPostById = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const putPostId = await postService.putPostById(title, content, id);

    if (!putPostId) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const newPost = await postService.getPostById(id);

    return res.status(200).json(newPost);
};

module.exports = {
    getPosts,
    getPostById,
    putPostById,
};