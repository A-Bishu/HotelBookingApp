// controllers/ReservationsController.js
const Reservation  = require("../models/Reservation"); 

const createReservation = async (req, res) => {
  const { hotelId, startDate, endDate, guests } = req.body;

  try {
    const newReservation = await Reservation.create({
      hotelId,
      startDate,
      endDate,
      guests,
    });

    res.status(201).json(newReservation);
  } catch (error) {
    console.error("Error saving reservation:", error);
    res.status(500).json({ message: "Error saving reservation" });
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll(); 
    res.status(200).json(reservations);
  } catch (error) {
    console.error("Error fetching reservations:", error);
    res.status(500).json({ message: "Error fetching reservations" });
  }
};

module.exports = {
  createReservation,
  getReservations,
};

