"use client";
import style from "./style.module.scss";

import { useState, useEffect } from "react";

import MaskedInput from "react-text-mask";

import { Cities, City } from "../../models/Cities";
import { getCities } from "../../asyncFunctions/GetCities";

export default function MainRegistration() {
  const phoneMask = [
    "+",
    "7",
    " ",
    "(",
    /\d/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];
  const [newCities, setNewCities] = useState<City[] | null>(null);
  // const [checkBox, setCheckBox] = useState<boolean>(false);

  // function handleCheckBox() {
  //   setCheckBox(!checkBox);
  //   console.log(checkBox);
  // }

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
            {/* <InputMask
              placeholder="+7 (***) ***-**-**"
               mask="+7 (999) 999-99-99"
            /> */}
            <MaskedInput mask={phoneMask} placeholder="+7 (___) ___-__-__" />
          </div>
          <div className={style.block_recording_data}>
            <label htmlFor="user-Email">Электронная почта</label>
            <input
              placeholder="Введите email"
              type="email"
              id="user-Email"
              name="user-Email"
            />
          </div>
          <div className={style.block_recording_data}>
            <label htmlFor="user-consent">Я согласен</label>
            <input
              // onClick={handleCheckBox}
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
