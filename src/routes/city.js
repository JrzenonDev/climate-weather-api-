const express = require("express");

const { getCityWeather } = require("../controllers/cityController");

const router = express.Router();

router.get("/:cityCode", getCityWeather);

module.exports = router;
