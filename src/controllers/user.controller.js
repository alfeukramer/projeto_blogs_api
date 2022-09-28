const userService = require('../services/user.service');
const { generateToken } = require('../utils/JWT');

const createUser = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await userService.emailExist(email);

    if (userExist) {
       return next({ message: 'User already registered', status: '409' });
    }

    const addUser = await userService.createUser(req.body);

    const token = generateToken({
        email: addUser.dataValues.email,
    });

    return res.status(201).json({ token });
};

module.exports = {
    createUser,
};