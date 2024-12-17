import PrjCard from "components/common/PrjCard/PrjCard";
import { PrjIntroProp } from "./interface";
import * as S from "./style";
import { PRJ_CARDS_DATA } from "api/data";
import { useEffect, useState } from "react";
import { PrjCardProp } from "components/common/PrjCard/interface";
import Feedback from "components/common/Feedback/Feedback";
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
      {(projectData?.keywords ||
        projectData?.feedback) && (
          <div className="info-wrap">
            <div className="inner">
              {projectData?.keywords && (
                <>
                  {/* <h5>주요 키워드</h5> */}
                  <Feedback feedback={projectData.keywords} />
                </>
              )}
              {projectData?.feedback && (
                <>
                  {/* <h5>피드백</h5> */}
                  <Feedback feedback={projectData.feedback} />
                </>
              )}
            </div>
          </div>
        )}
    </S.PrjIntroStyleContainer>
  );
};

export default PrjIntro;
