import { City } from "../models/Cities";

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
