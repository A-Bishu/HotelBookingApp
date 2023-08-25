const { sequelize } = require('../models/dbConn');

const reservationData = [
    {
        hotelId: 1,
        startDate: '2023-08-24',
        endDate: '2023-08-25',
        guests: 2
    },
    {
        hotelId: 2,
        startDate: '2023-09-10',
        endDate: '2023-09-12',
        guests: 3
    },
 
];

const PopulateReservationsTable = async () => {
    try {
        for (const reservation of reservationData) {
            const query = `
                INSERT INTO reservations(hotelId, startDate, endDate, guests)
                VALUES($1, $2, $3, $4);
            `.trim();
            const values = [
                reservation.hotelId,
                reservation.startDate,
                reservation.endDate,
                reservation.guests
            ];
            await sequelize.query(query, { bind: values });
        }
    } catch (error) {
        console.error("Error populating reservations table:", error);
    }
};

module.exports = PopulateReservationsTable;

