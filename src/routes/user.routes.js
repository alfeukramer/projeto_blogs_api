const express = require('express');
const validateDisplayName = require('../middlewares/validateDisplayname');
const userController = require('../controllers/user.controller');
const validatePassword = require('../middlewares/validatePasswordLength');
const validateRegex = require('../middlewares/validateEmailRegex');
// const emailField = require('../middlewares/emailField');

const router = express.Router();

router.post('/', validateDisplayName, validateRegex, validatePassword, userController.createUser);

module.exports = router;