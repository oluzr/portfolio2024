import { media } from "assets/media";
import styled from "styled-components";
export const LayoutStyleContainer = styled.main`
  position: fixed;
  width: 60vw;
  min-width: 360px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 90vh;
  border-radius: 20px 20px 0 0;
  padding: 45px 0px 0;
  /* background-color: #00000099; */
  background-color: #03173440;
  backdrop-filter: blur(14px);
  overflow: hidden;
  box-shadow: 0 0 100px -1px #ffffff14;
  ${media.phone`
    width:100%;
    border-radius:0;
    height:100dvh;
    padding:0px 0 0;
  `}
  section {
    /* transition: all 0.9s; */
    position: absolute;
    width: 100%;
    padding: 20px 40px 60px;
    overflow-y: auto;
    height: 100%;
    ${media.phone`
      padding: 70px 14px 40px;
    `}
  }
`;
