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
