module.exports = (sequelize, DataTypes) => {
    
    const postLikes = sequelize.define('postLikes',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            like: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                unique: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
            },
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
            }
        }
    )
    return postLikes;
}