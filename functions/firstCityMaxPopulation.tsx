import { City } from "../models/Cities";

/**
 * Находит город с максимальным населением и перемещает его на первое место в массиве.
 *
 * @param {City[]} citiesSortalphabet - Массив отсортированных городов.
 * @returns {City[]} - Массив городов с городом с максимальным населением на первом месте.
 */

export function firstCityMaxPopulation(citiesSortalphabet: City[]) {
  const maxPopulationCity = citiesSortalphabet.reduce(
    (maxCity: City, currentCity: City) => {
      return parseInt(currentCity.population) > parseInt(maxCity.population)
        ? currentCity
        : maxCity;
    }
  );

  const deleteMaxCity: City[] = citiesSortalphabet.filter(
    (city) => city !== maxPopulationCity
  );
  deleteMaxCity.unshift(maxPopulationCity);
  return deleteMaxCity;
}
