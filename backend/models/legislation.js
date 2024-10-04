const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

const Legislation = sequelize.define('Legislation', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    legislation_type: { 
        type: DataTypes.ENUM('Act', 'Ordinance', 'Regulation', 'Bill', 'Legal Notice', 'Bylaw', 'Other'),
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


module.exports = Legislation;
