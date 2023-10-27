const axios = require("axios");
const { getAirportWeather } = require("../src/controllers/airportController");
const errorAirportWeatherService = require("../src/services/errorAirportWeatherService");

jest.mock("axios");

// Mock saveAirportWeatherErrorToDatabase
errorAirportWeatherService.saveAirportWeatherErrorToDatabase = jest.fn();

test("getAirportWeather should handle errors", async () => {
  const mockAirportCode = "testAirportCode";

  // Simulate an API call error
  axios.get.mockRejectedValue(new Error("API request failed"));

  const req = { params: { airportCode: mockAirportCode } };

  // Create a mock response object
  const res = {
    json: jest.fn(),
    status: jest.fn(() => res), // Configure status to return res object
  };

  await getAirportWeather(req, res);

  // Checks if the status function was called with 500 because an error occurred
  expect(res.status).toHaveBeenCalledWith(500);

  // checks if the json function was called with the expected error message
  expect(res.json).toHaveBeenCalledWith({
    error: "Error getting weather data from an airport",
  });

  // Checks if saveAirportWeatherErrorToDatabase was called
  expect(
    errorAirportWeatherService.saveAirportWeatherErrorToDatabase
  ).toHaveBeenCalledTimes(1);
});
