import styled, { css } from "styled-components";
import { ButtonStyleProp } from "./interface";
export const ButtonStyleContainer = styled.div<ButtonStyleProp>`
  display: flex;
  align-content: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    font-size: 1em;
    transition: all 0.1s;
    font-weight: 500;
    border-radius: 7px;
    width: max-content;
    word-break: keep-all;
    // width
    &.auto {
      padding: 12px 2em;
    }
    &.full {
      padding: 15px 0;
      width: 100%;
    }
    // border radius
    &.radius {
      border-radius: 50px;
    }
    // button type
    ${(props) =>
      props.$bgColor &&
      css`
        background-color: ${props.$bgColor};
      `}
    &.normal {
      background-color: #eee;
      &:hover {
        background-color: #ddd;
      }
    }
    &.orange {
      color: #fff;
      background-color: #f4a000;
      svg {
        transform-origin: center center;
        transition: all 0.1s;
      }
      &:hover {
        svg {
          transform: rotate(180deg) translateX(4px);
        }
        /* background-color: rgb(66, 38, 18); */
        padding-left: 2.3em;
        padding-right: 1.7em;
      }
    }
    &:has(svg) {
      svg {
        transform-origin: center center;
        transition: all 0.1s;
      }
      &:hover {
        svg {
          transform: rotate(180deg) translateX(4px);
        }
        /* background-color: rgb(66, 38, 18); */
        padding-left: 2.3em;
        padding-right: 1.7em;
      }
    }
    &.submit {
      background-color: #34c759;
      color: #fff;
      border: 1px solid #34c759;
      &:hover {
        background-color: #2ab94e;
      }
    }
    &.disabled,
    &.cancle {
      color: #999;

      &.cancle {
        &:hover {
          color: #555;
        }
      }
      &.disabled {
        cursor: not-allowed;
      }
    }
  }
`;
