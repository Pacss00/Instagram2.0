module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
        email: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: false
        },
        username: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true
        },
    })

    users.associate = (models) => {
        users.hasMany(models.posts, {foreignKey: 'userId'});
        models.posts.belongsTo(users, {foreignKey: 'userId'});

        users.hasMany(models.postLikes, {foreignKey: 'userId'});
        models.postLikes.belongsTo(users, {foreignKey: 'userId'});
    
        users.hasMany(models.postComments, {foreignKey: 'userId'});
        models.postComments.belongsTo(users, {foreignKey: 'userId'});
    }

    return users;
}