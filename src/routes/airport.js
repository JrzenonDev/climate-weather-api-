const express = require("express");

const { getAirportWeather } = require("../controllers/airportController");

const router = express.Router();

router.get("/:airportCode", getAirportWeather);

module.exports = router;
