import { Link } from "react-router-dom";
import Image from "../Image/Image";
import { AppIconProp } from "./interface";
import * as S from "./style";
const AppIcon = ({ iconName, imgUrl, linkTo, style }: AppIconProp) => {
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
    </S.AppIconStyleContainer>
  );
};

export default AppIcon;
