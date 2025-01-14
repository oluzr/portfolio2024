import styled, { css } from "styled-components";
import { ChatBubbleStyleProp } from "./interface";
import { media } from "assets/media";

export const ChatBubbleStyleContainer = styled.div<ChatBubbleStyleProp>`
  width: 100%;
  padding-bottom: 13px;
  display: flex;
  margin-bottom: 20px;
  ${media.phone`
    margin-bottom: 15px;
    `}
  ${(prop) =>
    prop.$side === "left" &&
    css`
      justify-content: flex-start;
    `}
  ${(prop) =>
    prop.$side === "right" &&
    css`
      justify-content: flex-end;
    `}
	.chat-bubble-wrap {
    position: relative;
    padding: 13px 18px 13px;
    border-radius: 13px;
    font-weight: 400;
    font-size: 14px;
    transition: all 0.2s;
    line-height: 1.5;
    ${media.phone`
        /* width:100%; */
        max-width:85%;
        &:has(img){
          width:100%;
          max-width:100%;
        }
      `}
    ${media.tablet`
        /* width:100%; */
        max-width:85%;
        &:has(img){
          width:100%;
          max-width:100%;
        }
      `}
    ${(prop) =>
      prop.$side === "left" &&
      css`
        max-width: 32%;
        background-color: #007aff;
        color: #fff;
      `}
    ${(prop) =>
      prop.$side === "right" &&
      css`
        max-width: 64%;
        color: #333;
        background-color: #e5e5ea;
      `}
		&::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      bottom: -10px;
      ${(prop) =>
        prop.$side === "left" &&
        css`
          left: 6px;
          transform: rotate(20deg);
          border-top: 19px solid #007aff;
        `}
      ${(prop) =>
        prop.$side === "right" &&
        css`
          right: 6px;
          border-top: 19px solid #e5e5ea;
          transform: rotate(-20deg);
        `}
    }
    h4 {
      padding-top: 4px;
      margin-bottom: 4px;
      font-size: 15px;
      white-space: pre-line;
      color: #000;
    }
    p {
      margin: 0;
      white-space: pre-line;
    }
  }
`;
