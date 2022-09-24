module.exports = (sequelize, DataTypes) => {
    const UsersSchema = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, { timestamps: false, underscored: true, tableName: 'users' });

    UsersSchema.associate = (models) => {
        UsersSchema.hasMany(models.BlogPost, {
            foreignKey: 'userId',
            as: 'posts'
        });
    }    
    return UsersSchema;
};

