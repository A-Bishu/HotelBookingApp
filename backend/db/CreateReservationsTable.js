//CreateReservationsTable.js

const { sequelize } = require('../models/dbConn');

const CreateReservationsTable = async () => {
    sequelize.query(`
    CREATE TABLE reservations (
           id SERIAL PRIMARY KEY,
           hotelId INT NOT NULL,
           startDate DATE NOT NULL,
           endDate DATE NOT NULL,
           guests INT NOT NULL,
           
       );
   
`);
}


module.exports = CreateReservationsTable;