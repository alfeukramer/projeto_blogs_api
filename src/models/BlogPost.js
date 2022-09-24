module.exports = (sequelize, DataTypes) => {
    const BlogPostsSchema = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        published: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated: {
            type: DataTypes.DATE,
            allowNull: false
        },
    }, { timestamps: false, underscored: true, tableName: 'blog_posts' });

    BlogPostsSchema.associate = (models) => {
        BlogPostsSchema.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
}

    return BlogPostsSchema;
};