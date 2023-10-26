const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveAirportWeatherToDatabase = async (airportCode, response) => {
  await prisma.airportWeather.create({
    data: {
      airportCode,
      humidity: response.data.umidade,
      visibility: response.data.visibilidade,
      icaoCode: response.data.codigo_icao,
      atmosphericPressure: response.data.pressao_atmosferica,
      windSpeed: response.data.vento,
      windDirection: response.data.direcao_vento,
      condition: response.data.condicao,
      conditionDesc: response.data.condicao_desc,
      temperature: response.data.temp,
      updatedAt: new Date(response.data.atualizado_em),
    },
  });
};

module.exports = { saveAirportWeatherToDatabase };
