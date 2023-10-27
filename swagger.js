const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Climate Weather API",
      version: "1.0.0",
      description: "API to query climate information for cities and airports.",
    },
  },
  apis: ["./src/routes/city.js", "./src/routes/airport.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
