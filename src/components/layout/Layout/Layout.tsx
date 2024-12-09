import React from "react";
import Header from "../Header/Header";
import * as S from "./style";
import TopMsg from "../TopMsg/TopMsg";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopMsg />
      <Header />
      <S.LayoutStyleContainer>{children}</S.LayoutStyleContainer>
    </>
  );
};

export default Layout;
