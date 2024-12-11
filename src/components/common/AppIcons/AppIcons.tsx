import { useEffect, useState } from "react";
import AppIcon from "../AppIcon/AppIcon";
import { AppIconsProp } from "./interface";
import * as S from "./style";
import { useAppIconsStore, useModalBGStore } from "store/app";
const AppIcons = ({ icons, title, style }: AppIconsProp) => {
  const { modalBGShowState, showModalBG } = useModalBGStore((state) => state);
  const { openAppIcons, isOpened } = useAppIconsStore((state) => state);
  useEffect(() => {
    return () => {};
  }, []);
  const appIconsOnClickHandler = () => {
    console.log("clicked!");
    if (isOpened) return;
    openAppIcons();
  };
  return (
    <S.AppIconsStyleContainer style={style} $title={title}>
      <div
        className={`app-icons ${isOpened ? "clicked" : ""}`}
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
    </S.AppIconsStyleContainer>
  );
};

export default AppIcons;
