import styled from "styled-components";
export const IntroStyleContainer = styled.section`
  /* background-color: #fff; */
  .navigate-section {
    position: sticky;
    /* top: 40%; */
    top: 0px;
    /* display: none; */
    margin-bottom: 50px;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 14px;
      li {
        /* padding-right: 14px; */
        position: relative;
        &::before {
          position: absolute;
          left: 50%;
          top: -10px;
          transform: translateX(-50%);
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          border: 1px solid #fff;
        }
        a {
          color: #fff;
          font-size: 13px;
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
