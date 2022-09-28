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

const getAllUsers = async (req, res) => {
    const getAll = await userService.getAllUsers();

    return res.status(200).json(getAll);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    console.log('user log', user);

    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};