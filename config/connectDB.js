const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud_express', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
sequelize.authenticate()
    .then(() => {
        console.log('connected to db')
    })
    .catch(err => {
        console.log(`ERROR: ${err}`)
    });
module.exports = sequelize