"use client";
import style from "./style.module.scss";

import { useState, useEffect, ChangeEvent } from "react";

import MaskedInput from "react-text-mask";
import validator from "validator";

import { Cities, City } from "../../models/Cities";
import { getListCities } from "../../asyncFunctions/getCities";
import { phoneMask } from "../../constants";

import { verificationAndPostData } from "@/functions/verificationAndPostData";
import React from "react";

export default function MainRegistration() {
  const [newCities, setNewCities] = useState<City[] | null>(null);
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [cleaningFormState, setCleaningFormState] = useState<boolean>(false);
  const [dateAndTime, setDateAndTime] = useState<string>("");

  function handleCheckBox() {
    setCheckBox(!checkBox);
  }

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setName(name);
  }

  function handleCity(event: any) {
    const city = event.target.value;
    setCity(city);
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    const password = event.target.value;
    setPassword(password);
  }

  function handleRepeatPassword(event: ChangeEvent<HTMLInputElement>) {
    const Repeatpassword = event.target.value;
    setRepeatPassword(Repeatpassword);
  }

  function handleNumber(event: ChangeEvent<HTMLInputElement>) {
    const number = event.target.value;
    setNumber(number);
  }

  function cleaningForm() {
    setName("");
    setCity("");
    setPassword("");
    setRepeatPassword("");
    setNumber("");
    setEmail("");
    setCheckBox(false);
    setCleaningFormState(false);
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsValidEmail(validator.isEmail(emailValue));
  };

  useEffect(() => {
    setDateAndTime(` ${localStorage.getItem("date_and_time")}`);
    getListCities(setNewCities);
  }, []);

  useEffect(() => {
    if (cleaningFormState) {
      cleaningForm();
    }
  }, [cleaningFormState]);

  return (
    <>
      {newCities && (
        <>
          <div className={style.block_recording_data}>
            <label className={style.important} htmlFor="user-name">
              Имя
            </label>
            <input
              type="text"
              placeholder="Введите имя"
              id="user-name"
              name="user-name"
              value={name}
              onChange={(event) => {
                handleName(event);
              }}
              required
            />
          </div>

          <div className={style.block_recording_data}>
            <label className={style.important} htmlFor="user-city">
              Ваш город
            </label>
            <select
              value={city}
              onChange={handleCity}
              id="user-city"
              name="city"
              required
            >
              <option value="" disabled>
                Выберите город
              </option>
              {newCities.map((city, index) => (
                <option key={index} value={city.city}>
                  {city.city}
                </option>
              ))}
            </select>
          </div>
          <hr />
          <div className={style.block_recording_data}>
            <label className={style.important} htmlFor="user-password">
              Пароль
            </label>
            <input
              placeholder="Введите Пароль"
              type="password"
              id="user-password"
              name="user-password"
              value={password}
              onChange={(event) => {
                handlePassword(event);
              }}
              required
            />
          </div>
          <div className={style.block_recording_data}>
            <label className={style.important} htmlFor="repeat-password">
              Пароль еще раз
            </label>
            <input
              placeholder="Повторите Пароль"
              type="password"
              id="repeat-password"
              name="repeat-password"
              value={repeatPassword}
              onChange={(event) => {
                handleRepeatPassword(event);
              }}
              required
            />
          </div>
          <hr />
          <div className={style.block_recording_data}>
            <label htmlFor="user-telephone">Номер телефона</label>
            <MaskedInput
              onChange={(event) => {
                handleNumber(event);
              }}
              mask={phoneMask}
              placeholder="+7 (___) ___-__-__"
              value={number}
            />
          </div>

          <>
            <div className={style.block_recording_data}>
              <label htmlFor="user-Email">
                Электронная почта{" "}
                {checkBox && <span className="text-red-500">*</span>}
              </label>
              <input
                placeholder="Введите email"
                type="email"
                id="user-Email"
                name="user-Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </>
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
              onClick={() =>
                verificationAndPostData(
                  setIsButtonDisabled,
                  setDateAndTime,
                  setCleaningFormState,
                  name,
                  password,
                  repeatPassword,
                  number,
                  city,
                  checkBox,
                  email,
                  isValidEmail
                )
              }
              className={
                isButtonDisabled
                  ? style.button_change_form_stop
                  : style.button_change_form
              }
              type="button"
              value="Изменить"
              disabled={isButtonDisabled}
            />
            <div className={style.date_and_time}>{dateAndTime}</div>
          </div>
        </>
      )}
    </>
  );
}
