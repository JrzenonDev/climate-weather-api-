const axios = require("axios");
const { BRASIL_API_URL, BRASIL_API_AIRPORT_URL } = require("../constants/api");

const getAirportWeather = async (req, res) => {
  try {
    const airportCode = req.params.airportCode;
    const response = await axios.get(
      `${BRASIL_API_URL}${BRASIL_API_AIRPORT_URL}/${airportCode}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erro ao obter dados de clima do aeroporto" });
  }
};

module.exports = { getAirportWeather };
