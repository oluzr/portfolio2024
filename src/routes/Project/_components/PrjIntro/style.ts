import styled from "styled-components";
import { PrjIntroStyleProp } from "./interface";
import { media } from "assets/media";
export const PrjIntroStyleContainer = styled.div<PrjIntroStyleProp>`
  margin-bottom: 20px;
  .skillset-wrap{
    margin-top: 20px;
  }
  .info-wrap {
    margin-top: 20px;
    .inner {
      display: flex;
      flex-direction: column;
      gap: 7px;
      background-color: #eee;
      border-radius: 14px;
      padding: 25px;
      ${media.phone`
        padding: 15px 20px;
      
        `}
      & > div {
        &:not(:first-child) {
          padding-top: 8px;
        }
        &:not(:last-child) {
          border-bottom: 1px solid #ccc;
          padding-bottom: 13px;
        }
      }
      h5 {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
`;
