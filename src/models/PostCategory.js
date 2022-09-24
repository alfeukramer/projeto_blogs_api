module.exports = (sequelize, DataTypes) => {
    const PostsCategoriesSchema = sequelize.define('PostCategory', {
        postId : {
            type: DataTypes.INTEGER,
            field: 'post_id',
        }, 
        categoryId : {
            type: DataTypes.INTEGER,
            field: 'category_id'
        },
    }, { timestamps: false, underscored: true, tableName: 'posts_categories' });

    PostsCategoriesSchema.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'postId',
            otherKey: 'categoryId',
            through: 'PostsCategoriesSchema',
            as: 'categories',
        });
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'categoryId',
            otherKey: 'postId',
            through: 'PostsCategoriesSchema',
            as: 'posts',
    });
}
    return PostsCategoriesSchema;
};