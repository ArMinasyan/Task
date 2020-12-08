const { DataTypes } = require('sequelize');


const db = require('../db');

module.exports = () => {
    return db.define('albums', {
        "id": {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true,
        },
        'userId': {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        'title': DataTypes.STRING
    });
}