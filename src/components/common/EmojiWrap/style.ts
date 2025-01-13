import { media } from "assets/media";
import styled from "styled-components";
export const EmojiStyleContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 13px;
  background: linear-gradient(#2a96c7, #1a9fdb, #00f7ff);
  border: 2px solid #787878b5;
  .inner {
    width: 100%;
    padding: 20px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 98%;
      position: absolute;
      top: 2px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 30px;
      height: 20px;
      background: linear-gradient(#ffffff85, #ffffff47, #ffffff07);
      ${media.phone`
        height:15px;
        border-radius: 20px;
        `}
    }
    p {
      font-size: 25px;
      /* display: flex; */
      /* justify-content: center; */
      width: 100%;
      text-align: center;
      letter-spacing: 10px;
      white-space: pre-line;
      animation: floatUpAndDown 2.4s ease-in-out infinite;
      ${media.tablet`
        font-size: 18px;
        letter-spacing: 5px;
        `}
      ${media.phone`
          letter-spacing: 3px;
          font-size: 15px;
      `}
    }
    span {
      position: absolute;
      font-size: 25px;
      left: 40%;
      bottom: 40%;
      animation: fishSwim 7s linear infinite;
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 2px solid transparent;
    bottom: -13px;
    right: 6px;
    transform: rotate(-16deg);
    border-top: 15px solid #00f7ff;
  }

  @keyframes floatUpAndDown {
    0% {
      transform: translateY(14px);
      opacity: 0.6;
    }
    50% {
      opacity: 1;
      transform: translateY(-5px);
    }
    100% {
      opacity: 0.6;
      transform: translateY(14px);
    }
  }
  @keyframes fishSwim {
    0% {
      transform: translateX(150px); 
      opacity: 0; 
    }
    50% {
      transform: translateX(0); 
      opacity: 1; 
    }
    100% {
      transform: translateX(-150px); 
      opacity: 0; 
    }
  }
`;
