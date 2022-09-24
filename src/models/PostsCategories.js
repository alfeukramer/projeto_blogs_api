module.exports = (sequelize, DataTypes) => {
    const PostsCategoriesSchema = sequelize.define('PostsCategories', {

    }, { timestamps: false, underscored: true, tableName: 'posts_categories' });
    return PostsCategoriesSchema;
};