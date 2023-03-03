const express = require('express');
const postController = require('../controllers/post.controller');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validateToken.auth, postController.getPosts);

router.get('/:id', validateToken.auth, postController.getPostById);

router.put('/:id', validateToken.auth, postController.putPostById);

module.exports = router;