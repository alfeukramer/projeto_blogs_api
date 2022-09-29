module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId : {
            type: DataTypes.INTEGER,
            field: 'post_id',
        }, 
        categoryId : {
            type: DataTypes.INTEGER,
            field: 'category_id'
        },
    }, { timestamps: false, underscored: true, tableName: 'posts_categories' });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'postId',
            otherKey: 'categoryId',
            through: 'PostCategory',
            as: 'categories',
        });
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'categoryId',
            otherKey: 'postId',
            through: 'PostCategory',
            as: 'posts',
    });
}
    return PostCategory;
};