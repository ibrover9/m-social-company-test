/**
 * Отправляет данные формы на сервер для обновления информации.
 *
 * @param {string} name - Имя пользователя.
 * @param {string} password - Пароль пользователя.
 * @param {string} number - Номер телефона пользователя.
 * @param {string} city - Город пользователя.
 * @param {string} email - Email пользователя.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsButtonDisabled - Состояние кнопки.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setCleaningFormState - Состояние для активации чистки формы.
 */

import axios from "axios";
import { FORM, LIST } from "../constants";

export async function postForm(
  name: string,
  password: string,
  number: string,
  city: string,
  email: string,
  setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  setCleaningFormState: React.Dispatch<React.SetStateAction<boolean>>
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
    setIsButtonDisabled(false);
    setCleaningFormState(true);
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
    alert("Ошибка при отправке данных:");
  }
}
