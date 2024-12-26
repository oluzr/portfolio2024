import React from "react";
import * as S from "./style";
import { SIDEPRJ_CARDS_DATE } from "api/data";
import PrjCard from "components/common/PrjCard/PrjCard";
const SidePrj = () => {
  return (
    <S.SidePrjStyleContainer>
      <ul>
        {SIDEPRJ_CARDS_DATE.map((project, idx) => (
          <li key={idx}>
            <PrjCard showSubTitle={false} prjItem={project} />
          </li>
        ))}
      </ul>
    </S.SidePrjStyleContainer>
  );
};

export default SidePrj;
