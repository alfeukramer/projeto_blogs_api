const { authToken } = require('../utils/JWT');

const auth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return next({ message: 'Token not found', status: '401' });
    }

    try {
        await authToken(authorization);
        return next();
    } catch (e) {
        return next({ message: 'Expired or invalid token', status: '401' });
}
};

module.exports = {
    auth,
};
