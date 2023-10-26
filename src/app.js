const express = require("express");

const app = express();

// routes
const cityRouter = require("./routes/city");
const airportRouter = require("./routes/airport");

// middlewares
app.use(express.json());

// define routes
app.use("/city", cityRouter);
app.use("/airport", airportRouter);

// error handler
app.use((err, _req, res, _next) => {
  res.status(err.status).json({ message: err.message });
});

module.exports = app;
