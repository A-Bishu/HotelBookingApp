// hotelController.js
const express = require('express');

const hotelsData = require('../data/hotelsData'); // Import the hotelsData object

// Controller for getting all hotels
const getAllHotels = (req, res) => {
    res.send(hotelsData);
};

const getHotelById = (req, res) => {
    const hotelId = parseInt(req.params.id);
    const hotel = hotelsData.hotels.find((hotel) => hotel.id === hotelId);

    if (!hotel) {
        return res.status(404).json({ message: 'Hotel not found' });
      }
    
      res.json(hotel);
};

module.exports = {
  getAllHotels,
  getHotelById,
};
