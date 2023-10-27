/**
 * @swagger
 * /airport/{airportCode}:
 *   get:
 *     summary: Get weather information for a specific airport.
 *     parameters:
 *       - in: path
 *         name: airportCode
 *         required: true
 *         description: The IATA code of the airport.
 *         type: string
 *     responses:
 *       200:
 *         description: Successful response with weather information.
 *         content:
 *           application/json:
 *             example: '{"umidade": 93, "visibilidade": ">10000", "codigo_icao": "SBGR", "pressao_atmosferica": 1014, "vento": 4, "direcao_vento": 140, "condicao": "ps", "condicao_desc": "Predomínio de Sol", "temp": 18, "atualizado_em": "2023-10-26T22:00:00.827Z"}'
 *       404:
 *         description: Airport not found.
 *         content:
 *           application/json:
 *             example: '{"error": "Airport not found."}'
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example: '{"error": "Error fetching weather data for the airport."}'
 */

const express = require("express");

const { getAirportWeather } = require("../controllers/airportController");

const router = express.Router();

router.get("/:airportCode", getAirportWeather);

module.exports = router;
