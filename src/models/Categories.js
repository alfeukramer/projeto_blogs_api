module.exports = (sequelize, DataTypes) => {
    const CategoriesSchema = sequelize.define('Categories', {

    }, { timestamps: false, underscored: true, tableName: 'categories' });
    return CategoriesSchema;
};