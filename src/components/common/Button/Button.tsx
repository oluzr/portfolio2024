import { ButtonProp } from "./interface";
import * as S from "./style";
import { IoIosArrowForward } from "react-icons/io";
const Button = ({
  innerTxt,
  type = "button",
  styleType,
  disabled = false,
  widthType = "auto",
  useArrow = false,
  radius = "0",
  bgColor,
  onClickHandler,
}: ButtonProp) => {
  return (
    <S.ButtonStyleContainer $bgColor={bgColor}>
      <button
        className={`${styleType} ${widthType} ${radius === "50%" && "radius"}`}
        disabled={disabled}
        type={type}
        onClick={onClickHandler}
      >
        {useArrow && <IoIosArrowForward />}
        {innerTxt}
      </button>
    </S.ButtonStyleContainer>
  );
};

export default Button;
