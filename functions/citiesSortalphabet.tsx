import { City } from "../models/Cities";

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
