import { useNavigate, useParams } from "react-router-dom";
import ContentCard from "./_components/ContentCard/ContentCard";
import * as S from "./style";
import { useEffect } from "react";
import PrjIntro from "./_components/PrjIntro/PrjIntro";
const Works = () => {
  const { value } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!value) {
      navigate("/works/optimaRx");
    }
    console.log(value);
  }, []);
  if (!value) return <></>;
  return (
    <S.WorksStyleContainer>
      <ContentCard value={value} />
      <PrjIntro value={value} />
    </S.WorksStyleContainer>
  );
};

export default Works;
