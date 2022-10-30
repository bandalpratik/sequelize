const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER_NAME,
  process.env.PASS,
  {
    host: process.env.HOST,
    dialect: "mssql",
    dialectOptions: {
      connectTimeout: 60000
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  }
);

module.exports = sequelize;
