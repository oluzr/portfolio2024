import { media } from "assets/media";
import styled from "styled-components";
export const ContactCardStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  * {
    color: #fff;
  }
  .inner {
    width: 100%;
    /* aspect-ratio: 3.5; */
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 10vh 40px 30px;
    justify-content: flex-end;
    background-color: #000;
    border-radius: 10px;
    overflow: hidden;
    ${media.phone`
      padding: 8vh 40px 30px;
      `}
    .thumb {
      position: absolute;
      bottom: 0;
      right: 30px;
      width: 35%;
      aspect-ratio: 1;
      max-width:230px;
      ${media.phone`
        width: 100px;
      `}
    }
    .main-tit {
      font-size: 46px;
      ${media.phone`
        font-size: 26px;
      `}
    }
    .sub-tit {
      font-size: 15px;
      padding-left: 3px;
      align-items: center;
      display: flex;
      gap: 3px;
      ${media.phone`
        font-size: 13px;
      `}
    }
    ul {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      gap: 5px;
      li {
        border: 1px solid #fff;
        padding: 6px 7px;
        border-radius: 4px;
        ${media.phone`
          padding: 3px 5px;
      `}
        a {
          display: flex;
          align-items: center;
          gap: 6px;
          p {
            font-size: 12px;
            ${media.phone`
        font-size: 10px;
      `}
          }
        }
      }
    }
  }
`;
