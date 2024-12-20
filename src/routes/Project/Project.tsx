import { useNavigate, useParams } from "react-router-dom";
import ContentCard from "./_components/ContentCard/ContentCard";
import * as S from "./style";
import { useEffect } from "react";
import PrjIntro from "./_components/PrjIntro/PrjIntro";
import BackBtn from "components/common/BackBtn/BackBtn";
import useIsMobile from "hooks/useIsMobile";
const Project = () => {
  const { value } = useParams();
  const navigate = useNavigate();
  const isItMobile= useIsMobile()
  useEffect(() => {
    if (!value) {
      navigate("/projects");
    }
    console.log(value);
  }, []);
  if (!value) return <></>;
  return (
    <S.ProjectStyleContainer>
      {
        !isItMobile &&
      <BackBtn />
      }
      <PrjIntro value={value} />
      
      <ContentCard value={value} />
      
    </S.ProjectStyleContainer>
  );
};

export default Project;
