const axios = require("axios");
const { BRASIL_API_URL, BRASIL_API_AIRPORT_URL } = require("../constants/api");
const airportWeatherService = require("../services/airportWeatherService");
const saveAirportWeatherErrorToDatabase = require("../services/errorAirportWeatherService");

const getAirportWeather = async (req, res) => {
  try {
    const airportCode = req.params.airportCode;
    const response = await axios.get(
      `${BRASIL_API_URL}${BRASIL_API_AIRPORT_URL}/${airportCode}`
    );

    // Save the data to the database using the service
    await airportWeatherService.saveAirportWeatherToDatabase(
      airportCode,
      response
    );

    res.json(response.data);
  } catch (error) {
    // Save the error to the database using the service
    await saveAirportWeatherErrorToDatabase.saveAirportWeatherErrorToDatabase({
      message: error.message,
      name: error.name,
      code: error.code,
      status: error.response ? error.response.status : null,
    });
    res
      .status(500)
      .json({ error: "Erro ao obter dados de clima de um aeroporto" });
  }
};

module.exports = { getAirportWeather };
