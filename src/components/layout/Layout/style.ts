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
  padding: 40px 0px 0;
  background-color: #00000099;
  backdrop-filter: blur(14px);

  overflow: hidden;
  box-shadow: 0 0 100px -1px #ffffff14;
  section {
    /* transition: all 0.9s; */
    position: absolute;
    width: 100%;
    padding: 20px 20px 60px;
    overflow-y: auto;
  }
`;
