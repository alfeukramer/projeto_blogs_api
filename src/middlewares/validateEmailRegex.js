module.exports = async (req, res, next) => {
    const { email } = req.body;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!regex.test(email)) {
        return next({ message: '"email" must be a valid email', status: '400' });
    }
    return next();
};