require('dotenv').config();

const jwt = require('jsonwebtoken');

const jwtConfig = ({
    expiresIn: '7d',
    algorithm: 'HS256',
});

const TOKEN_SECRET = process.env.JWT_SECRET || 'testeChave';

const generateToken = (payload) =>
    jwt.sign(payload, TOKEN_SECRET, jwtConfig);

const authToken = async (token) => {
        const instropection = await jwt.verify(token, TOKEN_SECRET);
        return instropection;
};

module.exports = {
    generateToken,
    authToken,
};