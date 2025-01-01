import { Link, useNavigate } from "react-router-dom";
import { PrjCardProp } from "./interface";
import * as S from "./style";
import Button from "../Button/Button";
const PrjCard = ({
  prjItem,
  showSubTitle = false,
  showPath = true,
}: {
  prjItem: PrjCardProp;
  showSubTitle?: boolean;
  showPath?: boolean;
}) => {
  const navigete = useNavigate();
  return (
    <S.PrjCardStyleContainer $theme={prjItem.theme!}>
      <div className="inner">
        <div className="prj-top">
          <h3>{prjItem.title}</h3>
          {showSubTitle && <p>{prjItem.subTitle}</p>}
          <ul className="participants"></ul>
        </div>
        <div className="prj-btm">
          {prjItem.startDate && (
            <div className="start-date date">
              <p>{prjItem.startDate}</p>
              <span>Start</span>
            </div>
          )}
          {prjItem.path && showPath && (
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
          {prjItem.endDate && (
            <div className="end-date date">
              <p>{prjItem.endDate}</p>
              <span>End</span>
            </div>
          )}
        </div>
      </div>
    </S.PrjCardStyleContainer>
  );
};

export default PrjCard;
