module.exports = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return next({ message: 'Some required fields are missing', status: '400' });
    }
    next();
};