module.exports = (sequelize, DataTypes) => {
    const posts= sequelize.define("posts", {
        title: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: false
        },
        description: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: false
        },
        status: {
            type: DataTypes.STRING, 
            allowNull: true,
            unique: false
        },
        
    })
    posts.associate = (models) => {
        posts.hasMany(models.postLikes, { foreignKey: "postId"})
        models.postLikes.belongsTo(posts, { foreignKey: "postId"})

        posts.hasMany(models.postComments, {foreignKey: 'userId'});
        models.postComments.belongsTo(posts, {foreignKey: 'userId'});

        posts.hasOne(models.postImages, {foreignKey: 'postId'});
        models.postImages.belongsTo(posts, {foreignKey: 'postId'});
    }

    return posts;
}