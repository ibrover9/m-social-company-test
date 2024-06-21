import style from "./style.module.scss";

export default function MainRegistration() {
  return (
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
          <option value="Chrome" />
          <option value="Firefox" />
          <option value="Safari" />
          <option value="Edge" />
          <option value="Opera" />
        </datalist>
      </div>
      <hr />
      <div className={style.block_recording_data}>
        <label htmlFor="user-password">Пароль</label>
        <input
          placeholder="Введите Пароль"
          type="text"
          id="user-password"
          name="user-password"
        />
      </div>
      <div className={style.block_recording_data}>
        <label htmlFor="repeat-password">Пароль еще раз</label>
        <input
          placeholder="Повторите Пароль"
          type="text"
          id="repeat-password"
          name="repeat-password"
        />
      </div>
      <hr />
      <div className={style.block_recording_data}>
        <label htmlFor="user-telephone">Номер телефона</label>
        <input
          placeholder="+7 (***) ***-**-**"
          type="tel"
          id="user-telephone"
          name="user-telephone"
        />
      </div>
      <div className={style.block_recording_data}>
        <label htmlFor="user-Email">Электронная почта</label>
        <input
          placeholder="Введите email"
          type="text"
          id="user-Email"
          name="user-Email"
        />
      </div>
      <div className={style.block_recording_data}>
        <label htmlFor="user-consent">Я согласен</label>
        <input type="checkbox" id="user-consent" name="user-Email" />
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
  );
}
