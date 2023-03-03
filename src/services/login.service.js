const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const postLogin = async ({ email, password }) => {
    const loginData = await User.findOne({ 
        attributes: ['email'],
        where: 
        { email, password },
    }); 

    if (!loginData) {
        return loginData;
    }

    const token = generateToken({
        email: loginData.dataValues.email,
    });

    return { token };
};

module.exports = {
    postLogin,
};