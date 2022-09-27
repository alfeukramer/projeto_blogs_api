module.exports = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return next({ message: 'Some required fields are missing', status: '400' });
    }
    next();
};