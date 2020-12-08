const { DataTypes, STRING } = require('sequelize');

const db = require('../db');

module.exports = () => {
    return db.define('users', {
        "id": {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true,
        },
        "name": {
            type: DataTypes.STRING,
            allowNull: true,
        },
        "username": {
            type: DataTypes.STRING,
            allowNull: true,
        },
        "email": {
            type: DataTypes.STRING,
            allowNull: true,
        },
        "address": {
            type: DataTypes.JSON,
            allowNull: true
        },
        "phone": {
            type: DataTypes.STRING,
            allowNull: true
        },
        "website": {
            type: DataTypes.STRING,
            allowNull: true
        },
        "company": {
            type: DataTypes.JSON,
            allowNull: true
        },
    })
}


