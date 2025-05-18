const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Studio = sequelize.define('Studio', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    isForSale: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Studio;