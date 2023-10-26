/*
  Warnings:

  - Added the required column `date` to the `CityWeather` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CityWeather" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cityCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "date" DATETIME NOT NULL,
    "condition" TEXT NOT NULL,
    "conditionDesc" TEXT NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "uvIndex" INTEGER NOT NULL
);
INSERT INTO "new_CityWeather" ("city", "cityCode", "condition", "conditionDesc", "id", "max", "min", "state", "updatedAt", "uvIndex") SELECT "city", "cityCode", "condition", "conditionDesc", "id", "max", "min", "state", "updatedAt", "uvIndex" FROM "CityWeather";
DROP TABLE "CityWeather";
ALTER TABLE "new_CityWeather" RENAME TO "CityWeather";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
