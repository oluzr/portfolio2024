import { Link } from "react-router-dom";
import { Prop } from "./interface";
import * as S from "./style";
import Image from "../Image/Image";
const ThumbnailCard = ({ title, imgSrc, linkTo, size = "full" }: Prop) => {
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
    </S.ThumbnailStyleContainer>
  );
};

export default ThumbnailCard;
