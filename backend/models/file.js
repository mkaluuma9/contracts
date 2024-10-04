const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); 

const File = sequelize.define('File', {
    file_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number_of_files: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


module.exports = File;
