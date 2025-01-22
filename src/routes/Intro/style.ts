import styled from "styled-components";
export const IntroStyleContainer = styled.section`
  /* background-color: #fff; */
  .navigate-section {
    position: sticky;
    /* top: 40%; */
    top: 0px;
    /* display: none; */
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center; 
    z-index: 4;
    ul {
      background-color: #fff;
      width: fit-content;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 14px;
      padding: 20px 20px 10px;
      border-radius: 40px;
      li {
        position: relative;
        &:not(.active):hover {
          &::before {
            transform: translateX(-50%) scale(1.5);
            border: 4px solid #000;
            width: 2px;
            height: 2px;
          }
        }
        &.active {
          &::before {
            border: 4px solid #000;
            width: 2px;
            height: 2px;
          }
          a {
            font-weight: 600;
          }
        }
        &::before {
          position: absolute;
          left: 50%;
          top: -10px;
          transform: translateX(-50%);
          transform-origin: center center;
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          border: 1px solid #000;
          transition: all 0.1s;
        }
        a {
          color: #000;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }
  .contents-section {
    display: flex;
    flex-direction: column;
    gap: 13dvh;
    & > div {
    }
  }
`;
