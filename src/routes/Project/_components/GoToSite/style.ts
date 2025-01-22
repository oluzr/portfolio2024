import { media } from "assets/media";
import styled from "styled-components";
export const GoToSiteStyleContainer = styled.div`
  margin-bottom: 30px;
  ${media.phone`
    margin-bottom: 0px;
    `}
  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    ${media.phone`
      gap: 12px;
      flex-direction: column;
    
      `}
    li {
      flex: 1;
      transition: all 0.2s;
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: #e5e5ea;
        position: absolute;
        top: 50%;
        transition: all 0.2s;
        left: 50%;
        border-radius: 10px;
        transform: translate(-50%, -50%);
      }
      &:hover {
        * {
        }
        h6 svg {
          transform: rotate(190deg);
        }
        &::before {
          width: 93%;
          height: 90%;
        }
      }
      a {
        position: relative;
        display: flex;
        flex-direction: column;

        gap: 10px;
        border-radius: 10px;
        color: #000;
        padding: 30px 10% 33px;
        ${media.phone`
          align-items:center;
          padding: 14px 20px 23px;
          `}
        h6 {
          font-size: 26px;
          font-weight: 700;
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 5px;
          ${media.phone`
            font-size: 20px;
            flex-direction: row-reverse;
            svg{
              width:30px !important;
              height:30px !important;
            }

          `}
          svg {
            width: 40px;
            height: 40px;
            transition: all 0.2s;
            transform-origin: center center;
          }
        }
        p {
          font-size: 14px;
          font-weight: 500;
          padding-left: 5px;
        }
      }
    }
  }
`;
