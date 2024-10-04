const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Contract = sequelize.define('Contract', {
    contractName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    commencementDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    expiryDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    terminationPeriod: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    contractualSum: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('ongoing', 'close to expiry', 'expired'),
        allowNull: false,
    },
    volume: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Contract;
