import { media } from "assets/media";
import styled from "styled-components";
export const TimelineStyleContainer = styled.div`
  position: relative;
  padding-left: 40px;
  &::before {
    content: "";
    display: block;
    height: 107%;
    width: 1px;
    position: absolute;
    top: -3%;
    left: 0;
    background-color: #ffffffab;
    border-radius: 3px;
  }
  * {
    color: #e8e8e8;
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
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #000;
          border: 2px solid #ffffffbf;
          border-radius: 50%;
          left: -45.3px;
          top: 50%;
          transform: translateY(-50%);
        }
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
            font-weight: 500;
            font-family: "Orbitron", serif;
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
