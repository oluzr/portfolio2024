import styled from "styled-components";
export const AppIconsStyleContainer = styled.div`
  backdrop-filter: blur(10px);
  border-radius: 30px;
  border: 1px solid red;
  transform: scale(0.4);
  transition: all .3s;
  &:hover {
    transform: scale(1);
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    padding: 20px;
    width: 200px;
  }
`;
