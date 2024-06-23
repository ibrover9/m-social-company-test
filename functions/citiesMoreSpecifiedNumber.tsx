import { City } from "../models/Cities";

export function citiesMoreSpecifiedNumber(cities: City[], number: number) {
  const citiesMoreFiftyThousand = cities.filter(function (element: City) {
    return parseInt(element.population) > number;
  });
  return citiesMoreFiftyThousand;
}
