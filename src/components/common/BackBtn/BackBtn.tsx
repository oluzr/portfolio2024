import { useNavigate, useLocation } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import * as S from "./style";
import { useState, useEffect } from "react";
const BackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack, setCanGoBack] = useState(false);
  useEffect(() => {
    console.log(location.key);
    setCanGoBack(location.key!= 'default');
  }, [location.key]);
  if (!canGoBack) return <div></div>;
  return (
    <S.BackBtnStyleContainer onClick={() => navigate(-1)}>
      <IoChevronBack />
    </S.BackBtnStyleContainer>
  );
};

export default BackBtn;
