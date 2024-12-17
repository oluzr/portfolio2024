import { Link, useNavigate } from "react-router-dom";
import { PrjCardProp } from "./interface";
import * as S from "./style";
import Button from "../Button/Button";
import { FaUserCircle } from "react-icons/fa";
const PrjCard = ({ prjItem }: { prjItem: PrjCardProp }) => {
  const navigete = useNavigate();
  return (
    <S.PrjCardStyleContainer $theme={prjItem.theme!}>
      <div className="inner">
        <div className="prj-top">
          <h3>{prjItem.title}</h3>
          <ul className="participants"></ul>
        </div>
        <div className="prj-btm">
          <div className="start-date date">
            <p>{prjItem.startDate}</p>
            <span>Start</span>
          </div>
          {prjItem.path && (
            <div className="goto-site">
              <Button
                innerTxt="view more"
                radius="50%"
                bgColor="#0000007d"
                useArrow={true}
                onClickHandler={() => navigete(prjItem.path!)}
              />
            </div>
          )}
          <div className="end-date date">
            <p>{prjItem.endDate}</p>
            <span>End</span>
          </div>
        </div>
      </div>
    </S.PrjCardStyleContainer>
  );
};

export default PrjCard;
