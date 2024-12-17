import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import * as S from "./style";
const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <S.BackBtnStyleContainer onClick={() => navigate(-1)}>
      <IoArrowBackOutline />
    </S.BackBtnStyleContainer>
  );
};

export default BackBtn;
