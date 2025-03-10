import PrjCard from "components/common/PrjCard/PrjCard";
import { PrjIntroProp } from "./interface";
import * as S from "./style";
import { PRJ_CARDS_DATA, SIDEPRJ_CARDS_DATE } from "api/data";
import { useEffect, useState } from "react";
import { PrjCardProp } from "components/common/PrjCard/interface";
import Feedback from "components/common/Feedback/Feedback";
import SkillSet from "components/common/SkillSet/SkillSet";
const PrjIntro = ({ value }: PrjIntroProp) => {
  const [projectData, setProjectData] = useState<PrjCardProp | null>(null);
  useEffect(() => {
    switch (value) {
      case "optimaApp":
        setProjectData(PRJ_CARDS_DATA[0]);
        return;
      case "optimaRx":
        setProjectData(PRJ_CARDS_DATA[1]);
        return;
      case "optimacare":
        setProjectData(PRJ_CARDS_DATA[2]);
        return;
      case "lsp":
        setProjectData(PRJ_CARDS_DATA[3]);
        return;
      case "som":
        setProjectData(SIDEPRJ_CARDS_DATE[0]);
        return;
      case "usports":
        setProjectData(SIDEPRJ_CARDS_DATE[1]);
        return;
      default:
        break;
    }
  }, []);

  return (
    <S.PrjIntroStyleContainer>
      {projectData && (
        <PrjCard showPath={false} showSubTitle={true} prjItem={projectData} />
      )}
      {projectData?.skillset && (
        <div className="skillset-wrap">
          <SkillSet skills={projectData.skillset} />
        </div>
      )}
      {(projectData?.keywords || projectData?.feedback) && (
        <div className="info-wrap">
          <div className="inner">
            {projectData?.keywords && (
              <>
                {/* <h5>주요 키워드</h5> */}
                <Feedback feedback={projectData.keywords} />
              </>
            )}
          </div>
        </div>
      )}
    </S.PrjIntroStyleContainer>
  );
};

export default PrjIntro;
