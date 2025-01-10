import styled, { css } from "styled-components";
import { StyleProp } from "./interface";
export const SkillSetStyleContainer = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #eee;
      border-radius: 4px;
      padding: 4px 7px;
      span {
      }
    }
  }
`;
export const SkillSpanStyleContainer = styled.span<StyleProp>`
  font-family: "Fira Code", monospace;
  font-size: 12px;
  white-space: pre-line;
  line-height: 1.4;
  ${(prop) => prop.$fontColor && css`
    color: ${prop.$fontColor};
  `}
`;
