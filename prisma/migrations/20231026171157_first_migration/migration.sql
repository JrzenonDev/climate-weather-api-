-- CreateTable
CREATE TABLE "CityWeather" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cityCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "condition" TEXT NOT NULL,
    "conditionDesc" TEXT NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "uvIndex" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AirportWeather" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "airportCode" TEXT NOT NULL,
    "humidity" INTEGER NOT NULL,
    "visibility" TEXT NOT NULL,
    "icaoCode" TEXT NOT NULL,
    "atmosphericPressure" INTEGER NOT NULL,
    "windSpeed" INTEGER NOT NULL,
    "windDirection" INTEGER NOT NULL,
    "condition" TEXT NOT NULL,
    "conditionDesc" TEXT NOT NULL,
    "temperature" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
