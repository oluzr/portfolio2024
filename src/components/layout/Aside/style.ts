import styled from "styled-components";
import { AsideStyleProp } from "./interface";
export const AsideStyleContainer = styled.aside<AsideStyleProp>`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #00000099;
  backdrop-filter: blur(20px);
  z-index: 100;

  .inner {
    * {
      color: #fff;
    }
    padding: 35px;
    .close {
      display: flex;
      justify-content: flex-end;
      font-size: 37px;
    }
    ul.main-cate {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      & > li {
        & > a {
          display: flex;
          font-size: 26px;
        }

        & > p {
          display: flex;
          width: 100%;
          /* justify-content: space-between; */
          gap: 14px;
          align-items: center;
          flex-direction: row;
          font-size: 26px;
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            transform-origin: center center;
            &.open {
              transform: rotate(180deg);
            }
          }
        }
        ul.sub-cate {
          display: flex;
          flex-direction: column;
          gap: 18px;
          list-style: none;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          padding: 0px 20px;
          &.open {
            padding: 20px 20px 10px;
            max-height: 200px;
            opacity: 1;
          }
          li {
            a {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`;
