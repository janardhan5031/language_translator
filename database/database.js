const sequelize = require('sequelize');

const db = new sequelize('angara_db','root','MySql@1234',{
    dialect:'mysql',
    host:process.env.DB_HOST
});

module.exports = db;