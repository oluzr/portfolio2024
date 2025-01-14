import { PRJ_CARDS_DATA, SIDEPRJ_CARDS_DATE } from "api/data";
import * as S from "./style";
import PrjCard from "components/common/PrjCard/PrjCard";
import Checkbox from "components/common/Checkbox/Checkbox";
import { FormEvent, useEffect, useState } from "react";
const Works = () => {
  const [selectedType, setSelectedType] = useState<'all'|'side'|'work'>("all");
  const handleChange = (event: any) => {
    setSelectedType(event.target.value); 
  };
  useEffect(() => {
    console.log(selectedType);
  }, [selectedType]);
  return (
    <S.WorksStyleContainer>
      <div className="select-type-wrapper">
        <form onChange={handleChange}>
          <label>
            <input type="radio" name="select-type" value="all" defaultChecked/>
            All
          </label>
          <label>
            <input type="radio" name="select-type" value="side" />
            side projects
          </label>
          <label>
            <input type="radio" name="select-type" value="work" />
            work projects
          </label>
        </form>
      </div>
      <ul>
        {(selectedType==='all' || selectedType==='work') && PRJ_CARDS_DATA.map((project, idx) => (
          <li key={idx}>
            <PrjCard showSubTitle={true} prjItem={project} />
          </li>
        ))}
        {(selectedType==='all' || selectedType==='side') &&SIDEPRJ_CARDS_DATE.map((project, idx) => (
          <li key={idx}>
            <PrjCard showSubTitle={true} prjItem={project} />
          </li>
        ))}
      </ul>
    </S.WorksStyleContainer>
  );
};

export default Works;
