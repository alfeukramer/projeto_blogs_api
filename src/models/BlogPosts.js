module.exports = (sequelize, DataTypes) => {
    const BlogPostsSchema = sequelize.define('BlogPosts', {

    }, { timestamps: false, underscored: true, tableName: 'blog_posts' });
    return BlogPostsSchema;
};