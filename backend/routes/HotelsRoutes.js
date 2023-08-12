const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');





router.get('/', hotelController.getAllHotels);


router.get('/:id', hotelController.getHotelById);


module.exports = router;