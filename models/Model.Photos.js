const { DataTypes } = require('sequelize');

const db = require('../db');

module.exports = () => {
    return db.define('photos', {
        "id": {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true,
        },
        'albumId': {
            type: DataTypes.INTEGER,
            references: {
                model: 'albums',
                key: 'id'
            }
        },
        'title': DataTypes.STRING,
        'url': DataTypes.STRING,
        'thumbnailUrl': DataTypes.STRING
    })
}