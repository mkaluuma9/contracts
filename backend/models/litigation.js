const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // assuming you have a database configuration file

const Litigation = sequelize.define('Litigation', {
    caseNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    partiesInvolved: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    causeOfAction: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    brief: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    actionTaken: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    suitAmount: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    chancesOfSuccess: {
        type: DataTypes.ENUM('high', 'low'),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('ongoing', 'completed'),
        allowNull: false,
    },
    presidingJudge: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    opposingCounselDetails: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,  // Sequelize automatically adds createdAt and updatedAt fields
});

module.exports = Litigation;
