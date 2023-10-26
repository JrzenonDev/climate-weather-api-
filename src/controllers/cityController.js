const axios = require("axios");
const { BRASIL_API_URL, BRASIL_API_CITY_URL } = require("../constants/api");

const getCityWeather = async (req, res) => {
  try {
    const cityCode = req.params.cityCode;
    const response = await axios.get(
      `${BRASIL_API_URL}${BRASIL_API_CITY_URL}/${cityCode}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao obter dados de clima da cidade" });
  }
};

module.exports = { getCityWeather };
