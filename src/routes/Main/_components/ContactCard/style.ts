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
  .thumb {
    width: 100%;
    aspect-ratio: 3.5;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 30px 40px;
    justify-content: flex-end;
    background: linear-gradient(#00000030, #000);
    border-radius: 10px;
    overflow: hidden;
    img {
      display: flex;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      aspect-ratio: 3.5;
      object-fit: cover;
      height: 100%;
      ${media.phone`
        aspect-ratio: 2.5;
        `}
      ${media.tablet`
          aspect-ratio: 2.5;
          `}
    }
    .main-tit {
      font-size: 46px;
    }
    .sub-tit {
      font-size: 16px;
      padding-left: 3px;
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
        a {
          display: flex;
          align-items: center;
          gap: 6px;
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
