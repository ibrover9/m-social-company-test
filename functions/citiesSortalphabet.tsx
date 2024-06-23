import { City } from "../models/Cities";

/**
 * Сортирует города в алфавитном порядке.
 *
 * @param {City[]} citiesMoreFiftyThousand - Массив объектов городов, которые нужно отсортировать.
 * @returns {City[]} - Отсортированный в алфавитном порядке массив городов.
 */

export function citiesSortalphabet(citiesMoreFiftyThousand: City[]) {
  const citiesSortalphabet: City[] = citiesMoreFiftyThousand.sort(function (
    oneElement: City,
    secondElement: City
  ) {
    const cityA = oneElement.city.charAt(0).toLowerCase();
    const cityB = secondElement.city.charAt(0).toLowerCase();

    if (cityA < cityB) {
      return -1;
    }
    if (cityA > cityB) {
      return 1;
    }
    return 0;
  });
  return citiesSortalphabet;
}
