// models/Reservation.js
const { DataTypes } = require("sequelize");
const {sequelize }= require("./dbConn"); 

const Reservation = sequelize.define("reservation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hotelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  guests: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}
,{
  tableName: 'reservations', 

  timestamps: false
});

module.exports = Reservation;

