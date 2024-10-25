module.exports = (sequelize, DataTypes) => {
    
    const postComments = sequelize.define('postComments',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
            },
            status: {
                type: DataTypes.STRING, 
                allowNull: false,
                unique: false
            }
        }
           
            
    )
    return postComments;
}
