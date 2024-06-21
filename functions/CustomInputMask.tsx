import React, { useRef, useEffect } from "react";
import InputMask from "react-input-mask";

const CustomInputMask = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Фокус на input при монтировании компонента
    if (inputRef.current) {
      // Находим первый input внутри компонента InputMask
      const inputElement = inputRef.current.querySelector("input");
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, []);

  return <InputMask ref={inputRef} {...props} />;
};

export default CustomInputMask;
