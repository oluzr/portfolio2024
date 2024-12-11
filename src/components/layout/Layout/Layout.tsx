import React, { useEffect } from "react";
import Header from "../Header/Header";
import * as S from "./style";
import TopMsg from "../TopMsg/TopMsg";
import ModalBg from "components/common/ModalBg/ModalBg";
import { useAppIconsStore } from "store/app";
import { useLocation } from "react-router-dom";
import LocationInfo from "../LocationInfo/LocationInfo";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { closeAppIcons } = useAppIconsStore((state) => state);
  useEffect(() => {
    closeAppIcons();
  }, [location.pathname]);
  return (
    <>
      <ModalBg />
      <TopMsg />
      <Header />
      <S.LayoutStyleContainer>
        <LocationInfo />
        {children}
      </S.LayoutStyleContainer>
    </>
  );
};

export default Layout;
