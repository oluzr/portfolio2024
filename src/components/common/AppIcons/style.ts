import styled from "styled-components";
import { AppIconsStyleProp } from "./interface";
export const AppIconsStyleContainer = styled.div<AppIconsStyleProp>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  p.title {
    color: #fff;
    width: 74px;
    text-align: center;
    transition: all 0s;
    font-size: 13px;
  }
  .app-icons {
    border-radius: 20px;
    backdrop-filter: blur(10px);
    background-color: #ffffff34;
    transform: scale(0.4);
    transition: all 0.3s;
    transform-origin: left bottom;
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    &::before {
      content: "${(prop) => prop.$title}";
      display: block;
      color: #fff;
      position: absolute;
      top: 0;
      transform: translateY(calc(-100% +10px));
      left: 0;
      font-size: 24px;
      opacity: 0;
      transition: all 0.5s;
    }
    &.clicked {
      transform: scale(1);
      & + p {
        opacity: 0;
      }
      &::before {
        opacity: 1;
        transform: translateY(calc(-100% + -20px));
      }
      &::after {
        display: none;
      }
      p {
        display: block;
      }
      ul {
        width: 200px;
        p {
          display: block;
        }
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 25px;
      padding: 20px;
      width: 185px;
      li p {
        display: none;
      }
    }
  }
`;
