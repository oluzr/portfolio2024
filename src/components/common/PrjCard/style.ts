import styled, { css } from "styled-components";
import { PrjCardStyleProp } from "./interface";
export const PrjCardStyleContainer = styled.div<PrjCardStyleProp>`
margin-top: 14px;
  .inner {
    background-color: rgba(12, 109, 255, 0.1);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 24px 25px;
    gap: 30px;
    color: #e5e5ea;
    .prj-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h3 {
        max-width: 90%;
        font-size: 27px;
        line-height: 1.2;
        font-weight: 400;
      }
      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        li {
        }
      }
    }
    .prj-btm {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .goto-site {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
          color: #e5e5ea;
          font-size: 13px;
          padding: 14px 20px;
          border-radius: 40px;
        }
      }
      .date {
        display: flex;
        flex-direction: column;
        gap: 10px;
        p {
          font-size: 15px;
          font-weight: 400;
        }
        span {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
`;
