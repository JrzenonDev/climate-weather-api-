# Climate Weather API

Api with weather endpoint for a city and weather endpoint for an airport

## Prerequisites

- [Docker](https://www.docker.com/) - Make sure you have Docker installed on your machine to run the application in a container.

## Installation

1. Clone the repository:

```bash
git clone git@github.com:JrzenonDev/climate-weather-api-.git
```

2. Build the Docker image:

```bash
docker build -t climate-weather-api .
```

3. Run the container:

```bash
docker run -p 3000:3000 climate-weather-api
```

## Uso

endpoint for a city

```bash
http://localhost:3000/city/999
```

endpoint for an airport

```bash
http://localhost:3000/airport/SBGR
```

endpoint for a documentation

```bash
http://localhost:3000/api-docs/
```

## Dependencies

Express - Web framework for Node.js.

Axios - HTTP client for making requests.

Prisma - ORM for Node.js.

SQLite3 - SQLite database.

Jest - Testing framework.

Nodemon - Utility to automatically restart the server during development.

Swagger - API documentation.

## Author

🤓 https://github.com/JrzenonDev/

## License

This project is licensed under the ISC License.
