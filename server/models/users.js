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

    return users;
}