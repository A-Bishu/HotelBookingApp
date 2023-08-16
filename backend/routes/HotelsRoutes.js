//HotelRoutes.js
const express = require('express');
const hotelController = require('../controllers/hotelController');

const router = express.Router();

// Define routes
router.get('/', hotelController.getAllHotels);
router.get('/:id', hotelController.getHotelById);



module.exports = router;
