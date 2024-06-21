import { City } from "../models/Cities";

export function CitiesMoreFiftyThousand(cities: City[]) {
  const citiesMoreFiftyThousand = cities.filter(function (element: City) {
    return parseInt(element.population) > 50000;
  });
  return citiesMoreFiftyThousand;
}
