const express = require("express");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger");

// routes
const cityRouter = require("./routes/city");
const airportRouter = require("./routes/airport");

// middlewares
app.use(express.json());

// define routes
app.use("/city", cityRouter);
app.use("/airport", airportRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// error handler
app.use((err, _req, res, _next) => {
  res.status(err.status).json({ message: err.message });
});

module.exports = app;
