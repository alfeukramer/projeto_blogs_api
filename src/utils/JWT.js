require('dotenv').config();
const fs = require('fs');
const { join } = require('path');
const jwt = require('jsonwebtoken');

const jwtConfig = ({
    expiresIn: '7d',
    algorithm: 'HS256',
});

const path = '../jwt.key';

function readSecretKey() {
        try {
        const token = fs.readFileSync(join(__dirname, path), 'utf8');
        return token;
} catch (e) {
    console.log(e);
}
}

const generateToken = (payload) => {
   const token = jwt.sign(payload, readSecretKey(), jwtConfig);
   return token;
};

const authToken = async (token) => {
        const instropection = await jwt.verify(token, readSecretKey());
        return instropection;
};

module.exports = {
    generateToken,
    authToken,
};