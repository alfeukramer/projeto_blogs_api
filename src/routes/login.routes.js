const express = require('express');
const emailField = require('../middlewares/emailField');
const passwordField = require('../middlewares/passwordField');
const loginPost = require('../controllers/login.controller');
// const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/', emailField, passwordField, loginPost.postLogin);

module.exports = router;