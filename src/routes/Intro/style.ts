import styled from "styled-components";
export const IntroStyleContainer = styled.section`
  .navigate-section {
    position: sticky;
    top: 40%;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      li {
        padding-right: 14px;
        position: relative;
        &::before {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
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
