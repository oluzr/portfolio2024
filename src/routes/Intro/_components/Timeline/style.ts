import { media } from "assets/media";
import styled from "styled-components";
export const TimelineStyleContainer = styled.div`
  & > h3 {
    font-size: 120px;
    margin-bottom: 40px;
    font-family: "Rubik Bubbles", serif;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    font-weight: 400;
    padding-left: 13px;
    /* letter-spacing: -5px; */
    /* text-align: center; */
    &::first-letter {
      /* font-size: 170px; */
    }
    ${media.phone`
      font-size:65px;
      text-align: center;
      `}
  }

  * {
    color: #e8e8e8;
  }
  ul {
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    position: relative;
    ${media.phone`
      margin-left:20px;
      padding-left: 30px;
      `}
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
          ${media.phone`
            left: -35.5px;
              
            `}
        }
        /* color: #000; */
        font-size: 47px;
        letter-spacing: -1px;
        font-weight: 400;
        /* font-family: "Orbitron", serif; */
        font-family: "Rubik Bubbles", serif;
        color: transparent;
        -webkit-text-stroke: 1px #fff;
      }
      ol {
        display: flex;
        flex-direction: column;
        gap: 25px;
        ${media.phone`
          gap: 20px;
        
          `}
        & > li {
          display: flex;
          flex-direction: column;
          gap: 15px;
          justify-content: flex-start;
          align-items: baseline;
          ${media.phone`
            gap: 6px;
          
            `}
          span {
            background-color: #fff;
            color: #000;
            padding: 3px 10px;
            display: flex;
            border-radius: 3px;
            font-size: 14px;
            font-weight: 500;
            font-family: "Orbitron", serif;
            ${media.phone`
              font-size: 11px;
            `}
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            ${media.phone`
              font-size: 12px;
              width:90%;
            `}
          }
        }
      }
    }
  }
  
`;
