const { Sequelize } = require('sequelize');

module.exports = new Sequelize('task', 'postgres', 'root', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    logging: false
});

