import styled from "styled-components";
export const TimelineStyleContainer = styled.div`
  * {
    color: #fff;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 80px;
    & > li {
      display: flex;
      flex-direction: column;
      gap: 30px;
      h4 {
        font-size: 56px;
        font-weight: 300;
      }
      ol {
        display: flex;
        flex-direction: column;
        gap: 25px;
        & > li {
          display: flex;
          flex-direction: column;
          gap: 15px;
          justify-content: flex-start;
          align-items: baseline;
          span {
            background-color: #fff;
            color: #000;
            padding: 3px 10px;
            display: flex;
            border-radius: 3px;
            font-size: 14px;
          }
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
