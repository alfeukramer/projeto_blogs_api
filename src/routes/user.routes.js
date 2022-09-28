const express = require('express');
const validateDisplayName = require('../middlewares/validateDisplayname');
const userController = require('../controllers/user.controller');
const validatePassword = require('../middlewares/validatePasswordLength');
const validateRegex = require('../middlewares/validateEmailRegex');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateDisplayName, validateRegex, validatePassword, userController.createUser);

router.get('/', validateToken.auth, userController.getAllUsers);

module.exports = router;