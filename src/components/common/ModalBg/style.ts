import styled, { css } from "styled-components";
import { ModalBgStyleProp } from "./interface";
export const ModalBgStyleContainer = styled.div<ModalBgStyleProp>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0px);
  /* background-color: #ffffff05; */
  z-index: 2;
  visibility: hidden;
  transition: all 0.2s;
  ${(prop) =>
    prop.$isShow &&
    css`
      backdrop-filter: blur(15px);
      visibility: visible;
    `}
`;
