import { media } from "assets/media";
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
        /* color: #000; */
        font-size: 46px;
        letter-spacing: -1px;
        font-weight: 100;
        font-family: "Orbitron", serif;
        /* -webkit-text-stroke: 2px solid #fff; */
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
            ${media.phone`
              /* font-size: 13px; */
            `}
          }
        }
      }
    }
  }
`;
