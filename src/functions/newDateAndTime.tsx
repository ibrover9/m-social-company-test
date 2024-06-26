/**
 * Устанавливает текущую дату и время в указанном формате, сохраняет их в localStorage
 * и обновляет состояние с отформатированной строкой даты и времени.
 *
 * @param {React.Dispatch<React.SetStateAction<string>>} setDateAndTime - Функция установки состояния React,
 *   которая обновляет строку даты и времени.
 * @returns {void}
 */

import { format } from "date-fns";
import { ru } from "date-fns/locale";

export function newDateAndTime(
  setDateAndTime: React.Dispatch<React.SetStateAction<string>>
) {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "d MMMM yyyy", {
    locale: ru,
  });
  const formattedTime = format(currentDate, "HH:mm", { locale: ru });
  localStorage.setItem(
    "date_and_time",
    ` последние изменение ${formattedDate} в ${formattedTime}`
  );
  setDateAndTime(` последние изменение ${formattedDate} в ${formattedTime}`);
}
