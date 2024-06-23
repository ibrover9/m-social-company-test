import { City } from "../models/Cities";

/**
 * Фильтрует города по указанному числу населения.
 *
 * @param {City[]} cities - Массив объектов городов.
 * @param {number} number - Число, с которым сравнивается население города.
 * @returns {City[]} - Массив городов, население которых больше указанного числа.
 */

export function citiesMoreSpecifiedNumber(cities: City[], number: number) {
  const citiesMoreFiftyThousand = cities.filter(function (element: City) {
    return parseInt(element.population) > number;
  });
  return citiesMoreFiftyThousand;
}
