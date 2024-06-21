import axios from "axios";

import { Cities, City } from "../models/Cities";

import { CitiesMoreFiftyThousand } from "../functions/citiesMoreFiftyThousand";
import { CitiesSortalphabet } from "../functions/citiesSortalphabet";
import { FirstCityMaxPopulation } from "../functions/firstCityMaxPopulation";

export async function getCities(
  setNewCities: React.Dispatch<React.SetStateAction<City[] | null>>
): Promise<void> {
  try {
    const { data: cities } = await axios.get(
      "https://5d0eb32023e60965.mokky.dev/city"
    );
    const citiesMoreFiftyThousand = CitiesMoreFiftyThousand(cities);

    const citiesSortalphabet: City[] = CitiesSortalphabet(
      citiesMoreFiftyThousand
    );

    const maxPopulationCity = FirstCityMaxPopulation(citiesSortalphabet);
    console.log(maxPopulationCity);
    setNewCities(maxPopulationCity);
  } catch (error) {
    console.error(error);
  }
}
