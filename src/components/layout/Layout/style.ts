import styled from "styled-components";
export const LayoutStyleContainer = styled.main`
  position: fixed;
  width: 60vw;
  min-width: 360px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 90vh;
  border-radius: 30px 30px 0 0;
  /* border: 2px solid #00000029; */
  padding: 50px 0px 0;
  background-color: #00000099;
  overflow: hidden;
  box-shadow: 0 0 100px -1px #ffffff14;
  /* transition: all 0.9s; */
  section {
    /* transition: all 0.9s; */
    position: absolute;
    width: 100%;
    padding: 20px 20px 60px;
  }
`;
