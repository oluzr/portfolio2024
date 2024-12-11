import { useState } from "react";
import AppIcon from "../AppIcon/AppIcon";
import { AppIconsProp } from "./interface";
import * as S from "./style";
const AppIcons = ({ icons, title, style }: AppIconsProp) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <S.AppIconsStyleContainer style={style} $title={title}>
      <div
        className={`app-icons ${isClicked ? "clicked" : ""}`}
        onClick={() => setClicked((prev) => !prev)}
      >
        <ul>
          {icons.map((icon) => (
            <li>
              <AppIcon
                iconName={icon.iconName}
                imgUrl={icon.imgUrl}
                linkTo={icon.linkTo}
              />
            </li>
          ))}
        </ul>
      </div>
      <p className="title">{title}</p>
    </S.AppIconsStyleContainer>
  );
};

export default AppIcons;
