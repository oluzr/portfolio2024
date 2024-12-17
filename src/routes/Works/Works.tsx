import { PRJ_CARDS_DATA } from "api/data";
import * as S from "./style";
import PrjCard from "components/common/PrjCard/PrjCard";
const Works = () => {
  return (
    <S.WorksStyleContainer>
      <ul>
        {PRJ_CARDS_DATA.map((project, idx) => (
          <li key={idx}>
            <PrjCard prjItem={project} />
          </li>
        ))}
      </ul>
    </S.WorksStyleContainer>
  );
};

export default Works;
