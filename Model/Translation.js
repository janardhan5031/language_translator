const db = require('../database/database');
const sequelize = require('sequelize');

const translationTable = db.define('translationTable', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    from: sequelize.STRING,
    to: sequelize.STRING
});

module.exports = translationTable;