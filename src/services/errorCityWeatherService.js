const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveCityWeatherErrorToDatabase = async (errorData) => {
  await prisma.cityWeatherError.create({
    data: errorData,
  });
};

module.exports = { saveCityWeatherErrorToDatabase };
