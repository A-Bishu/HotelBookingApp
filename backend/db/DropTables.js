// DropTables.js

const {sequelize} = require('../models/dbConn')

const DropTables = async () => {
   await sequelize.query('DROP TABLE IF EXISTS hotels;')
}

module.exports = DropTables;