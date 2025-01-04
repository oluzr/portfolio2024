import React, { useEffect } from "react";
import Header from "../Header/Header";
import * as S from "./style";
import TopMsg from "../TopMsg/TopMsg";
import ModalBg from "components/common/ModalBg/ModalBg";
import { useAppIconsStore, useAsideState } from "store/app";
import { useLocation } from "react-router-dom";
import LocationInfo from "../LocationInfo/LocationInfo";
import Aside from "../Aside/Aside";
import CursorAnimation from "components/common/Cursor/Cursor";
import useIsMobile from "hooks/useIsMobile";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isItMobile = useIsMobile();
  const { closeAppIcons } = useAppIconsStore((state) => state);
  const { hideAside } = useAsideState((set) => set);
  useEffect(() => {
    closeAppIcons();
    hideAside();
  }, [location.pathname]);
  return (
    <>
      <ModalBg />
      <TopMsg />
      <Header />
      <Aside />
      <S.LayoutStyleContainer>
        <LocationInfo />
        {children}
      </S.LayoutStyleContainer>
      {!isItMobile && <CursorAnimation />}
    </>
  );
};

export default Layout;
