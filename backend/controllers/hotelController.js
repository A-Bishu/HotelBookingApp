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


// Update a hotel by ID
const updateHotel = async (req, res) => {
  const { id } = req.params;
  const updatedHotelData = req.body;

  try {
    const [numRowsUpdated, updatedHotel] = await hotel.update(updatedHotelData, {
      where: { id }, 
    });

    if (numRowsUpdated > 0) {
      res.json(updatedHotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    console.error('Error updating hotel:', error);
    res.status(500).json({ error: 'An error occurred while updating hotel' });
  }
};

// Create a new hotel
const createHotel = async (req, res) => {
  const { name, description, ratings, amenities, location, price_per_night, number_of_rooms } = req.body;
  try {

    const newHotel = await hotel.create({
      name,
      description,
      ratings,
      amenities,
      location,
      price_per_night,
      number_of_rooms,

    });
    res.status(201).json(newHotel);
  } catch (error) {
    console.error('Error creating hotel:', error);
    res.status(500).json({ error: 'An error occurred while creating hotel' });
  }
};

// Delete a hotel
const deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotelInstance = await hotel.findByPk(id);
    if (hotelInstance) {
      await hotelInstance.destroy();
      res.json({ message: 'Hotel deleted successfully' });
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    console.error('Error deleting hotel:', error);
    res.status(500).json({ error: 'An error occurred while deleting hotel' });
  }
};


module.exports = {
  getAllHotels,
  getHotelById,
  updateHotel,
  createHotel,
  deleteHotel,
 
};

