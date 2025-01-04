import styled, { css } from "styled-components";
import { AppIconsStyleProp } from "./interface";
import { media } from "assets/media";
export const AppIconsStyleContainer = styled.div<AppIconsStyleProp>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  z-index: 2;

  &:has(.clicked) {
    z-index: 4;
  }
  p.title {
    color: #fff;
    /* width: 74px; */
    text-align: center;
    transition: all 0s;
    font-size: 13px;
  }
  .app-icons {
    border-radius: 12px;
    backdrop-filter: blur(10px);
    background-color: #ffffff34;
    transform: scale(1);
    transition: all 0.3s;
    transform-origin: center bottom;
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
      z-index: 2;
      cursor: pointer;
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
      transform: scale(1.3);

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
        width: 218px;
        gap: 10px 18px;
        padding: 20px;
        li {
          .app-icon-img {
            width: 80px;
            border-radius: 10px;
          }
        }
        p {
          display: block;
        }
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /* justify-content: space-around; */
      gap: 10px;
      padding: 10px;
      width: 105px;
      li {
        .app-icon-img {
          width: 37px;
        }
        p {
          display: none;
        }
      }
    }
  }
`;
