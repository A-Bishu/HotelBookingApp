// PopulateTables.js

const { sequelize } = require('../models/dbConn');

const hotelData = [
    {
        "id": 1,
        "name": "The Ritz-Carlton",
        "description": "A luxurious hotel with a five-star rating.",
        "ratings": "4.5",
        // "amenities": [
        //     "Spa",
        //     "Gym",
        //     "Pool"
        // ],
        "location": "Chicago, IL",
        "price_per_night": "500.00",
        "number_of_rooms": 1000
    },
    {
        "id": 3,
        "name": "The Hilton",
        "description": "A luxurious hotel with a five-star rating.",
        "ratings": "4.5",
        // "amenities": [
        //     "Spa",
        //     "Gym",
        //     "Pool"
        // ],
        "location": "Chicago, IL",
        "price_per_night": "500.00",
        "number_of_rooms": 1500
    },
    {
        "id": 4,
        "name": "The Sky Light",
        "description": "A luxurious hotel with a five-star rating.",
        "ratings": "4.5",
        // "amenities": [
        //     "Spa",
        //     "Gym",
        //     "Pool"
        // ],
        "location": "Atlanta, GA",
        "price_per_night": "300.00",
        "number_of_rooms": 500
    }
];

const PopulateTables = async () => {
    try {
        for (const hotel of hotelData) {
            const amenities = JSON.stringify(hotel.amenities);
            const query = `
                INSERT INTO hotels(name, description, ratings, amenities, location, price_per_night, number_of_rooms)
                VALUES($1, $2, $3, $4, $5, $6, $7);
            `.trim();
            const values = [
                hotel.name,
                hotel.description,
                hotel.ratings,
                null,
                hotel.location,
                hotel.price_per_night,
                hotel.number_of_rooms
            ];
            await sequelize.query(query, { bind: values });
        }
    } catch (error) {
        console.error("Error populating tables:", error);
    }
};

module.exports = PopulateTables;


