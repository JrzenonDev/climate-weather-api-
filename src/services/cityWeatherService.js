const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveCityWeatherToDatabase = async (cityCode, response) => {
  await prisma.cityWeather.create({
    data: {
      cityCode,
      city: response.data.cidade,
      state: response.data.estado,
      updatedAt: new Date(response.data.atualizado_em),
      date: new Date(response.data.clima[0].data),
      condition: response.data.clima[0].condicao,
      conditionDesc: response.data.clima[0].condicao_desc,
      min: response.data.clima[0].min,
      max: response.data.clima[0].max,
      uvIndex: response.data.clima[0].indice_uv,
    },
  });
};

module.exports = { saveCityWeatherToDatabase };
