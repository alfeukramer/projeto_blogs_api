module.exports = (req, res, next) => {
    const { displayName } = req.body;

    if (displayName === undefined) {
        return next({ message: '"displayName" is required', status: '400' });
    }

    if (displayName.length <= 8) {
        return next(
            { message: '"displayName" length must be at least 8 characters long', status: '400' },
            );
    }
    return next();
};