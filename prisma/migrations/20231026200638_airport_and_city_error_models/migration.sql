-- CreateTable
CREATE TABLE "CityWeatherError" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AirportWeatherError" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" INTEGER NOT NULL
);
