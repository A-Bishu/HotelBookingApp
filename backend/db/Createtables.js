//Createtables.js

const { sequelize } = require('../models/dbConn');

const Createtables = async () => {
    sequelize.query(`
    CREATE TABLE hotels (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        ratings DECIMAL(3, 1),
        amenities TEXT[],
        location VARCHAR(255),
        price_per_night DECIMAL(8, 2),
        number_of_rooms INT
    );
   
`);
}


module.exports = Createtables;