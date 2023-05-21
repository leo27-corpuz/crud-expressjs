const Sequelize = require('sequelize');
const sequelize = require('../config/connectDB')
const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'active'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
User.sync({ force: false })
module.exports = User