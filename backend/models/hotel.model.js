// models/Hotel.js
const { DataTypes } = require('sequelize');
const {sequelize} = require('./dbConn'); // Assuming you've initialized Sequelize and the database connection

const Hotel = sequelize.define('hotel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },  
 
  ratings: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },

  amenities: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  price_per_night: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },

  number_of_rooms: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  
  tableName: 'hotels', 

  timestamps: false
});

module.exports = Hotel;
