import styled from "styled-components";
export const LocationInfoStyleContainer = styled.div`
  position: absolute;
  top: 15px;
  padding: 0 20px;
  /* background-color: red; */
  color: #fff;
  width: 100%;
  /* left: 20px; */
  /* transform: translateX(-50%); */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .loc-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    a {
      &:last-child::after {
        display: none;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 300;
      color: #ddd;
      svg{
        font-size: 12px;
      }
      &:hover {
        text-decoration: underline;
      }
      &::after {
        content: ">";
        display: inline-block;
        padding-left: 2px;
        font-size: 6px;
      }
    }
  }
  .loc-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;
