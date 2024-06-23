/**
 * Выполняет верификацию данных формы и отправляет их, если все условия выполнены.
 *
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsButtonDisabled - Функция установки состояния, которая отключает или включает кнопку отправки формы.
 * @param {React.Dispatch<React.SetStateAction<string>>} setDateAndTime - Функция установки состояния для отображения даты и времени последней отправки формы.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setCleaningFormState - Функция установки состояния для очистки формы после отправки.
 * @param {string} name - Имя пользователя.
 * @param {string} password - Пароль пользователя.
 * @param {string} repeatPassword - Повторение пароля пользователя.
 * @param {string} number - Номер телефона пользователя.
 * @param {string} city - Город пользователя.
 * @param {boolean} checkBox - Флаг, указывающий на состояние чекбокса (согласие с условиями).
 * @param {string} email - Адрес электронной почты пользователя.
 * @param {boolean} isValidEmail - Флаг, указывающий на корректность адреса электронной почты.
 * @returns {void}
 */

import { allCyrillic } from "../functions/allCyrillic";
import { checkMinTwoElements } from "../functions/checkMinTwoElements";
import { checkLastCharacterNumber } from "../functions/checkLastCharacter";
import { postForm } from "@/asyncFunctions/postForm";
import { newDateAndTime } from "./newDateAndTime";

export function verificationAndPostData(
  setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  setDateAndTime: React.Dispatch<React.SetStateAction<string>>,
  setCleaningFormState: React.Dispatch<React.SetStateAction<boolean>>,
  name: string,
  password: string,
  repeatPassword: string,
  number: string,
  city: string,
  checkBox: boolean,
  email: string,
  isValidEmail: boolean
) {
  setIsButtonDisabled(true);
  let item = "Ошибка в имени";
  if (allCyrillic(name) && checkMinTwoElements(name)) {
    item = "Ошибка в паролях";
    if (password == repeatPassword) {
      item = "Ошибка с номером";
      if (checkLastCharacterNumber(number)) {
        // item = "Ошибок в пунктах нет";
        item = "Некорректная почта";
        if (checkBox) {
          if (isValidEmail) {
            item = "Все отправлено";
            postForm(
              name,
              password,
              number,
              city,
              email,
              setIsButtonDisabled,
              setCleaningFormState
            );
            newDateAndTime(setDateAndTime);
          }
        } else {
          if (isValidEmail || email == "") {
            item = "Все отправлено";
            postForm(
              name,
              password,
              number,
              city,
              email,
              setIsButtonDisabled,
              setCleaningFormState
            );
            newDateAndTime(setDateAndTime);
          }
        }
      }
    }
  }
  if (!(item === "Все отправлено")) {
    setIsButtonDisabled(false);
  }
  alert(`${item}`);
}
