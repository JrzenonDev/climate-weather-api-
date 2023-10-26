const axios = require("axios");
const { getCityWeather } = require("../src/controllers/cityController");
const errorCityWeatherService = require("../src/services/errorCityWeatherService");

jest.mock("axios");

// Mocking saveCityWeatherErrorToDatabase
errorCityWeatherService.saveCityWeatherErrorToDatabase = jest.fn();

test("getCityWeather should return weather data", async () => {
  const mockCityCode = "testCityCode";

  const mockResponse = {
    data: {
      cidade: "Brejo Alegre",
      estado: "SP",
      atualizado_em: "2023-10-26",
      clima: [
        {
          data: "2023-10-27",
          condicao: "c",
          condicao_desc: "Chuva",
          min: 23,
          max: 32,
          indice_uv: 13,
        },
      ],
    },
  };

  axios.get.mockResolvedValue({ data: mockResponse });

  const req = { params: { cityCode: mockCityCode } };

  // Create a mock response object
  const res = {
    json: jest.fn(),
    status: jest.fn(() => res), // Mock status function
  };

  await getCityWeather(req, res);

  // Status should now be 500 to reflect an error
  expect(res.status).toHaveBeenCalledWith(500);

  // Check if the json function was called with the expected error
  expect(res.json).toHaveBeenCalledWith({
    error: "Erro ao obter dados de clima da cidade",
  });

  // Checking that saveCityWeatherErrorToDatabase was not called
  expect(
    errorCityWeatherService.saveCityWeatherErrorToDatabase
  ).toHaveBeenCalledTimes(1);
});
