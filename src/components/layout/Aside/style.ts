import styled from "styled-components";
import { AsideStyleProp } from "./interface";
export const AsideStyleContainer = styled.aside<AsideStyleProp>`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #00000099;
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
      gap: 30px;
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
          }
        }
        ul.sub-cate {
          padding: 20px 20px 10px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          list-style: none;
          max-height: 0; /* 기본 높이 0 */
          opacity: 0; /* 기본 투명도 0 */
          overflow: hidden; /* 높이 넘어가는 콘텐츠 숨김 */
          transition: all 0.3s ease; /* 부드러운 애니메이션 효과 */
          &.open {
            max-height: 200px; /* 서브 메뉴의 최대 높이 (내용에 따라 조정 가능) */
            opacity: 1; /* 투명도 1로 설정 */
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
