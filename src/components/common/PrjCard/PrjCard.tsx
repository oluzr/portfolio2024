import { PrjCardProp } from "./interface";
import * as S from "./style";
const PrjCard = ({
  theme = "bage",
  participants,
  title,
  subTitle,
  linkTo,
}: PrjCardProp) => {
  return <S.PrjCardStyleContainer $theme={theme}></S.PrjCardStyleContainer>;
};

export default PrjCard;
