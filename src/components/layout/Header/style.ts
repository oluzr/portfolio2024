import styled from "styled-components";
export const HeaderStyleContainer = styled.header`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 10;
  background-color: #fff;
  border-radius: 20px;
  ul {
    display: flex;
    gap: 40px;
    padding: 30px;
  }
`;
