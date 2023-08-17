// dbConn.js
require('dotenv').config(); 
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
});

// Test connection function
async function testConnection() {
  try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      return true;
  } catch (error) {
      console.error("Unable to connect to the database:", error);
      return false;
  }
}

module.exports = {
  sequelize,
  testConnection
};



