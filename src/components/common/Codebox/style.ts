import styled, { css } from "styled-components";
import { CodeboxStyleProp } from "./interface";
export const CodeboxStyleContainer = styled.div<CodeboxStyleProp>`
  display: flex;
  width: 100%;

  margin-bottom: 20px;
  ${(prop) =>
    prop.$side === "right" &&
    css`
      justify-content: flex-end;
      align-items: flex-end;
      .inner {
        width: 64%;
      }
    `}
  .inner {
    border-radius: 10px;
    background-color: #2b344099;
    padding: 15px 20px;
    p {
      font-family: "Fira Code", monospace;
      font-size: 12px;
      color: #fff;
      white-space: pre-line;
      line-height: 1.4;
    }
  }
`;
