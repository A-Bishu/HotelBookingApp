// routes/ReservationsRoutes.js
const express = require("express");
const ReservationsController = require("../controllers/ReservationsController");
const router = express.Router();

router.post("/", ReservationsController.createReservation);
router.get("/", ReservationsController.getReservations);

module.exports = router;


