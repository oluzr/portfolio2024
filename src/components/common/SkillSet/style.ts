import styled, { css } from "styled-components";
import { StyleProp } from "./interface";
import { media } from "assets/media";
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
      background-color: #33333383;
      border-radius: 6px;
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
  transition: color 0.2s;
  ${media.phone`font-size:11px;`}
  ${(prop) =>
    prop.$fontColor &&
    css`
      color: ${prop.$fontColor};
    `}
`;
