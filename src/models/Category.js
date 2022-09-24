module.exports = (sequelize, DataTypes) => {
    const CategoriesSchema = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, { timestamps: false, underscored: true, tableName: 'categories' });
    return CategoriesSchema;
};
