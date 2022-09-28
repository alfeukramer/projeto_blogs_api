module.exports = (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
    return next({ message: '"password" length must be at least 6 characters long', status: '400' });
    }
    return next();
};