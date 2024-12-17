import PrjCard from "components/common/PrjCard/PrjCard";
import { PrjIntroProp } from "./interface";
import * as S from "./style";
import { PRJ_CARDS_DATA } from "api/data";
import { useEffect, useState } from "react";
import { PrjCardProp } from "components/common/PrjCard/interface";
const PrjIntro = ({ value }: PrjIntroProp) => {
  const [projectData, setProjectData] = useState<PrjCardProp | null>(null);
  useEffect(() => {
    switch (value) {
      case "optimaApp":
        setProjectData(PRJ_CARDS_DATA[0]);
        return;
      case "optimacare":
        setProjectData(PRJ_CARDS_DATA[1]);
        return;
      case "lsp":
        setProjectData(PRJ_CARDS_DATA[2]);
        return;
      default:
        break;
    }
  }, []);

  return (
    <S.PrjIntroStyleContainer>
      {projectData && <PrjCard prjItem={projectData} />}
    </S.PrjIntroStyleContainer>
  );
};

export default PrjIntro;
