import style from "../Registration/style.module.scss";
import MainRegistration from "../MainRegistration/index";
import HeaderRegistration from "../HeaderRegitration/index";

export default function Registration() {
  return (
    <>
      <div className={style.registration__block}>
        <HeaderRegistration />
        <MainRegistration />
      </div>
    </>
  );
}
