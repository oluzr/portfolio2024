import React from "react";
import Header from "../Header/Header";
import * as S from "./style";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <S.LayoutStyleContainer>{children}</S.LayoutStyleContainer>
    </>
  );
};

export default Layout;
