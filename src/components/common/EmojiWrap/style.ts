import { media } from "assets/media";
import styled from "styled-components";
export const EmojiStyleContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 13px;
  background: linear-gradient(#2a96c7, #1a9fdb, #fff);
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
      display: flex;
      justify-content: center;
      letter-spacing: 10px;
      white-space: pre-line;
      ${media.tablet`
        font-size: 18px;
        letter-spacing: 5px;
        `}
      ${media.phone`
          letter-spacing: 3px;
        font-size: 16px;
      `}
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
    border-top: 15px solid #fff;
  }
`;
