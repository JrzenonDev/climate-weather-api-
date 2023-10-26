const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const saveAirportWeatherErrorToDatabase = async (errorData) => {
  await prisma.airportWeatherError.create({
    data: errorData,
  });
};

module.exports = { saveAirportWeatherErrorToDatabase };
