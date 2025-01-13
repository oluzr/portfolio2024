import { Link } from "react-router-dom";
import { Prop } from "./interface";
import * as S from "./style";
import Image from "../Image/Image";
import NumberBadge from "../NumberBadge/NumberBadge";
const ThumbnailCard = ({
  title,
  imgSrc,
  linkTo,
  size = "full",
  notiNum,
}: Prop) => {
  return (
    <S.ThumbnailStyleContainer $size={size}>
      {linkTo ? (
        <Link to={linkTo}>
          <Image src={imgSrc} />
        </Link>
      ) : (
        <Image src={imgSrc} />
      )}
      <p>{title}</p>

      {notiNum && <NumberBadge num={notiNum} />}
    </S.ThumbnailStyleContainer>
  );
};

export default ThumbnailCard;
