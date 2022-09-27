const loginService = require('../services/login.service');

const postLogin = async (req, res, next) => {
    const { email, password } = req.body;
        const token = await loginService.postLogin({ email, password });

        if (token === null) return next({ message: 'Invalid fields', status: '400' });

        return res.status(200).json(token);
};
module.exports = {
    postLogin,
};