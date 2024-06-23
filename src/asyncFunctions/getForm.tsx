import axios from "axios";
import { FORM, LIST } from "../constants";

export async function postForm(
  name: string,
  password: string,
  number: string,
  city: string,
  email: string
) {
  try {
    const objectForm = {
      name: name,
      password: password,
      city: city,
      number: number,
      email: email,
    };
    const { data: cities } = await axios.patch(`${FORM.CHANGE}/1`, objectForm);
    console.log("Данные успешно отправлены:", cities);
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
    alert("Ошибка при отправке данных:");
  }
}
