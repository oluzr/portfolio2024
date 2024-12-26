import React, { useEffect } from "react";
import Header from "../Header/Header";
import * as S from "./style";
import TopMsg from "../TopMsg/TopMsg";
import ModalBg from "components/common/ModalBg/ModalBg";
import { useAppIconsStore, useAsideState } from "store/app";
import { useLocation } from "react-router-dom";
import LocationInfo from "../LocationInfo/LocationInfo";
import Aside from "../Aside/Aside";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
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
    </>
  );
};

export default Layout;
