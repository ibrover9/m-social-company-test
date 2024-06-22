import style from "./style.module.scss";

export default function HeaderRegistration() {
  return (
    <div className={style.text}>
      Здравствуйте, <span className={style.name}>Человек</span>
    </div>
  );
}
