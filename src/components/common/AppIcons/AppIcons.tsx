import { useEffect, useState } from "react";
import AppIcon from "../AppIcon/AppIcon";
import { AppIconsProp } from "./interface";
import * as S from "./style";
import { useAppIconsStore, useModalBGStore } from "store/app";
import NumberBadge from "../NumberBadge/NumberBadge";
const AppIcons = ({ icons, title, style,notiNum }: AppIconsProp) => {
  const { modalBGShowState, showModalBG } = useModalBGStore((state) => state);
  const [thisShowState, setShowState] = useState(false);
  const { openAppIcons, isOpened } = useAppIconsStore((state) => state);
  const appIconsOnClickHandler = () => {
    openAppIcons();
    setShowState(true);
  };
  useEffect(() => {
    if (!isOpened) {
      setShowState(false);
    }
  }, [isOpened]);
  return (
    <S.AppIconsStyleContainer
      style={style}
      $title={title}
      $length={icons.length > 4 ? "3n" : "2n"}
    >
      <div
        className={`app-icons ${thisShowState ? "clicked" : ""}`}
        onClick={appIconsOnClickHandler}
      >
        <ul>
          {icons.map((icon, idx) => (
            <li key={idx}>
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
      {notiNum && <NumberBadge num={notiNum} />}
    </S.AppIconsStyleContainer>
  );
};

export default AppIcons;
