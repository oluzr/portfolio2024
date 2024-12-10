import AppIcon from "../AppIcon/AppIcon";
import { AppIconsProp } from "./interface";
import * as S from "./style";
const AppIcons = ({ icons, title }: AppIconsProp) => {
  return (
    <S.AppIconsStyleContainer>
      <div className="app-icons">
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
    </S.AppIconsStyleContainer>
  );
};

export default AppIcons;
