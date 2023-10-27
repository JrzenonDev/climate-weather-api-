/**
 * @swagger
 * /city/{cityCode}:
 *   get:
 *     summary: Get weather information for a specific city.
 *     parameters:
 *       - in: path
 *         name: cityCode
 *         required: true
 *         description: The city code or identifier.
 *         type: string
 *     responses:
 *       200:
 *         description: Successful response with weather information.
 *         content:
 *           application/json:
 *             example: '{"cidade": "Brejo Alegre", "estado": "SP", "atualizado_em": "2023-10-26", "clima": [{"data": "2023-10-27", "condicao": "c", "condicao_desc": "Chuva", "min": 23, "max": 32, "indice_uv": 13}]}'
 *       404:
 *         description: City not found.
 *         content:
 *           application/json:
 *             example: '{"error": "City not found."}'
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             example: '{"error": "Error fetching weather data for the city."}'
 */

const express = require("express");

const { getCityWeather } = require("../controllers/cityController");

const router = express.Router();

router.get("/:cityCode", getCityWeather);

module.exports = router;
