import styled from "styled-components";
import { PrjIntroStyleProp } from "./interface";
export const PrjIntroStyleContainer = styled.div<PrjIntroStyleProp>`
  .info-wrap {
    margin-top: 20px;
    .inner {
      display: flex;
      flex-direction: column;
      gap: 7px;
      background-color: #eee;
      border-radius: 14px;
      padding: 25px;
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
