import axios from "axios";

import { City } from "../models/Cities";

import { citiesMoreSpecifiedNumber } from "../functions/citiesMoreSpecifiedNumber";
import { citiesSortalphabet } from "../functions/citiesSortalphabet";
import { firstCityMaxPopulation } from "../functions/firstCityMaxPopulation";
import { LIST } from "../constants/constants";

export async function getCities(
  setNewCities: React.Dispatch<React.SetStateAction<City[] | null>>
): Promise<void> {
  try {
    const { data: cities } = await axios.get(`${LIST.CITY}`);
    const CitiesMoreFiftyThousand = citiesMoreSpecifiedNumber(cities, 50000);

    const CitiesSortalphabet: City[] = citiesSortalphabet(
      CitiesMoreFiftyThousand
    );

    const maxPopulationCity = firstCityMaxPopulation(CitiesSortalphabet);
    setNewCities(maxPopulationCity);
  } catch (error) {
    console.error(error);
  }
}
