import styled from "styled-components";
export const LayoutStyleContainer = styled.main`
  position: fixed;
  width: 60vw;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 70vh;
  border-radius: 30px;

  border: 2px solid #000;
  overflow: hidden;
  section {
    position: absolute;
    width: 100%;
    padding: 10px;
  }
`;
