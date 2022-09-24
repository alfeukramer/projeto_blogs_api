module.exports = (sequelize, DataTypes) => {
    const UsersSchema = sequelize.define('Users', {

    }, { timestamps: false, underscored: true, tableName: 'users' });
    return UsersSchema;
};