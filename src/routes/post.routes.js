const express = require('express');
const postController = require('../controllers/post.controller');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validateToken.auth, postController.getPosts);

module.exports = router;