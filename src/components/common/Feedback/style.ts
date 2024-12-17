import styled from "styled-components";
import { FeedbackStyleProp } from "./interface";
export const FeedbackStyleContainer = styled.div<FeedbackStyleProp>`
  p {
    font-size: 16px;
    line-height: 1.7;
    word-break: keep-all;
    white-space: pre-line;
  }
`;
