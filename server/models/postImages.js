module.exports = (sequelize, DataTypes) => {
    const postImages = sequelize.define("postImages", {
        originalName: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: false
        },
        size: {
            type: DataTypes.BIGINT, 
            allowNull: false,
            unique: false
        },
        key: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true
        },
        postId: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            unique: false
        },
    })

    return postImages;
}