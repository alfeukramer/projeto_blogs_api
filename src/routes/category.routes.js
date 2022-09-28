const express = require('express');
const categoryController = require('../controllers/category.controller');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.post('/', validateName, validateToken.auth, categoryController.createCategory);

module.exports = router;