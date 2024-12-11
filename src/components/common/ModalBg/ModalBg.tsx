import { useAppIconsStore, useModalBGStore } from "store/app";
import * as S from "./style";
import { useEffect } from "react";
const ModalBg = () => {
  const { modalBGShowState } = useModalBGStore((state) => state);
  const { closeAppIcons } = useAppIconsStore((state) => state);
  const modalOnClickHandler = () => {
    if (!modalBGShowState) return;
    closeAppIcons();
  };
  useEffect(() => {
    console.log(modalBGShowState);
  }, [modalBGShowState]);
  return (
    <S.ModalBgStyleContainer
      $isShow={modalBGShowState}
      onClick={modalOnClickHandler}
    ></S.ModalBgStyleContainer>
  );
};

export default ModalBg;
