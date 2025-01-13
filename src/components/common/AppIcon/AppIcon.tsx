import { Link } from "react-router-dom";
import Image from "../Image/Image";
import { AppIconProp } from "./interface";
import * as S from "./style";
import { media } from "assets/media";
import NumberBadge from "../NumberBadge/NumberBadge";
const AppIcon = ({ iconName, imgUrl, linkTo, style, notiNum }: AppIconProp) => {
  return (
    <S.AppIconStyleContainer style={style}>
      <div className="app-icon-img">
        {linkTo ? (
          <Link to={linkTo}>
            <Image src={imgUrl} />
          </Link>
        ) : (
          <Image src={imgUrl} />
        )}
      </div>
      <p>{iconName}</p>
      {notiNum && <NumberBadge num={notiNum} />}
    </S.AppIconStyleContainer>
  );
};

export default AppIcon;
