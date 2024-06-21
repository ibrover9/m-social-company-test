"use client";
import style from "./style.module.scss";

import { useState, useEffect } from "react";

import MaskedInput from "react-text-mask";
import validator from "validator";

import { Cities, City } from "../../models/Cities";
import { getCities } from "../../asyncFunctions/GetCities";
import { phoneMask } from "../../constants/phone";

export default function MainRegistration() {
  const [newCities, setNewCities] = useState<City[] | null>(null);
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  function handleCheckBox() {
    setCheckBox(!checkBox);
  }

  const handleEmailChange = (event: any) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsValidEmail(validator.isEmail(emailValue));
    console.log(isValidEmail);
  };

  useEffect(() => {
    getCities(setNewCities);
  }, []);

  return (
    <>
      {newCities && (
        <>
          <div className={style.block_recording_data}>
            <label htmlFor="user-name">Имя</label>
            <input
              type="text"
              placeholder="Введите имя"
              id="user-name"
              name="user-name"
            />
          </div>

          <div className={style.block_recording_data}>
            <label className={style.label} htmlFor="user-city">
              Ваш город
            </label>
            <input
              placeholder="Выберите город"
              list="user-cities"
              id="user-city"
              name="city"
            />
            <datalist id="user-cities">
              {newCities.map((city, index) => (
                <option key={index} value={city.city} />
              ))}
            </datalist>
          </div>
          <hr />
          <div className={style.block_recording_data}>
            <label htmlFor="user-password">Пароль</label>
            <input
              placeholder="Введите Пароль"
              type="password"
              id="user-password"
              name="user-password"
            />
          </div>
          <div className={style.block_recording_data}>
            <label htmlFor="repeat-password">Пароль еще раз</label>
            <input
              placeholder="Повторите Пароль"
              type="password"
              id="repeat-password"
              name="repeat-password"
            />
          </div>
          <hr />
          <div className={style.block_recording_data}>
            <label htmlFor="user-telephone">Номер телефона</label>
            <MaskedInput mask={phoneMask} placeholder="+7 (___) ___-__-__" />
          </div>
          {checkBox && (
            <>
              <div className={style.block_recording_data}>
                <label htmlFor="user-Email">Электронная почта</label>
                <input
                  placeholder="Введите email"
                  type="email"
                  id="user-Email"
                  name="user-Email"
                  onChange={handleEmailChange}
                />
              </div>
            </>
          )}
          <div className={style.block_recording_data}>
            <label htmlFor="user-consent">Я согласен</label>
            <input
              onClick={handleCheckBox}
              type="checkbox"
              id="user-consent"
              name="user-Email"
            />
            <span>принимать актуальную информацию на email</span>
          </div>

          <div className={style.button_container}>
            <input
              className={style.button_change_form}
              type="button"
              value="Изменить"
            />
          </div>
        </>
      )}
    </>
  );
}
