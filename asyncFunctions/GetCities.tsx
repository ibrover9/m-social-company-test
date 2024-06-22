import axios from "axios";

import { Cities, City } from "../models/Cities";

import { citiesMoreFiftyThousand } from "../functions/citiesMoreFiftyThousand";
import { citiesSortalphabet } from "../functions/citiesSortalphabet";
import { firstCityMaxPopulation } from "../functions/firstCityMaxPopulation";

export async function getCities(
  setNewCities: React.Dispatch<React.SetStateAction<City[] | null>>
): Promise<void> {
  try {
    const { data: cities } = await axios.get(
      "https://5d0eb32023e60965.mokky.dev/city"
    );
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
