//HotelRoutes.js
const express = require('express');
const hotelController = require('../controllers/hotelController');

const router = express.Router();

// Define routes
router.get('/', hotelController.getAllHotels);
router.get('/:id', hotelController.getHotelById);
router.put('/:id', hotelController.updateHotel);
router.post('/', hotelController.createHotel);
router.delete('/:id', hotelController.deleteHotel);



module.exports = router;
