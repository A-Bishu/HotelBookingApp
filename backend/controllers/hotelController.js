//hotelController.js
const hotel = require('../models/hotel.model');

// Get all hotels

const getAllHotels = async (req, res) => {
  try {
    const hotels = await hotel.findAll();
    res.json(hotels);
  } catch (err) {
    console.error('Error fetching data', err);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
};

// Get a hotel by ID

const getHotelById = async (req, res) => {
  const { id } = req.params;
  try {
    const hotels = await hotel.findByPk(id);
    if (hotel) {
      res.json(hotels);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (err) {
    console.error('Error fetching data', err);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
};


module.exports = {
  getAllHotels,
  getHotelById,
 
};

