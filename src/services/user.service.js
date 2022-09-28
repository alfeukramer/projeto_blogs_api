const { User } = require('../models');

const emailExist = async (email) => {
    const verifyUserEmail = await User.findOne({
        where: {
            email,
        },
    });
    return verifyUserEmail;
};

const createUser = async (body) => {
    const { displayName, email, password, image } = body;
    const user = await User.create({ displayName, email, password, image });
    return user;
};

const getAllUsers = async () => {
    const getAll = await User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
    });
    return getAll;
};

module.exports = {
    emailExist,
    createUser,
    getAllUsers,
};