import { allCyrillic } from "../functions/allCyrillic";
import { checkMinTwoElements } from "../functions/checkMinTwoElements";
import { checkLastCharacterNumber } from "../functions/checkLastCharacter";
import { postForm } from "@/asyncFunctions/postForm";
import { Dispatch, SetStateAction } from "react";

export function verificationAndPostData(
  setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>,
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
          }
        } else {
          if (isValidEmail || email == "") {
            item = "Все отправлено";
            postForm(name, password, number, city, email, setIsButtonDisabled);
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
