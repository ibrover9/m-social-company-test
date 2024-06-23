import axios from "axios";

import { Cities, City } from "../models/Cities";

import { citiesMoreFiftyThousand } from "../functions/citiesMoreFiftyThousand";
import { citiesSortalphabet } from "../functions/citiesSortalphabet";
import { firstCityMaxPopulation } from "../functions/firstCityMaxPopulation";
import { LIST } from "../constants/constants";

export async function getCities(
  setNewCities: React.Dispatch<React.SetStateAction<City[] | null>>
): Promise<void> {
  try {
    const { data: cities } = await axios.get(`${LIST.CITY}`);
    const CitiesMoreFiftyThousand = citiesMoreFiftyThousand(cities);

    const CitiesSortalphabet: City[] = citiesSortalphabet(
      CitiesMoreFiftyThousand
    );

    const maxPopulationCity = firstCityMaxPopulation(CitiesSortalphabet);
    console.log(maxPopulationCity);
    setNewCities(maxPopulationCity);
  } catch (error) {
    console.error(error);
  }
}
