/**
 * Получает список городов с указанного API-эндпоинта и выполнят сортировки.
 *
 * @param {React.Dispatch<React.SetStateAction<City[] | null>>} setNewCities - Функция для обновления состояния списка городов.
 *
 */

import axios from "axios";

import { City } from "../models/Cities";

import { citiesMoreSpecifiedNumber } from "../functions/citiesMoreSpecifiedNumber";
import { citiesSortalphabet } from "../functions/citiesSortalphabet";
import { firstCityMaxPopulation } from "../functions/firstCityMaxPopulation";
import { LIST } from "../constants";

export async function getListCities(
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
