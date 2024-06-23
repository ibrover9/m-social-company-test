import { allCyrillic } from "../functions/allCyrillic";
import { checkMinTwoElements } from "../functions/checkMinTwoElements";
import { checkLastCharacterNumber } from "../functions/checkLastCharacter";
import { postForm } from "@/asyncFunctions/postForm";
import { newDateAndTime } from "./newDateAndTime";

export function verificationAndPostData(
  setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  setDateAndTime: React.Dispatch<React.SetStateAction<string>>,
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
          console.log(isValidEmail);
          if (isValidEmail) {
            item = "Все отправлено";
            postForm(name, password, number, city, email, setIsButtonDisabled);
            newDateAndTime(setDateAndTime);
          }
        } else {
          if (isValidEmail || email == "") {
            item = "Все отправлено";
            postForm(name, password, number, city, email, setIsButtonDisabled);
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
