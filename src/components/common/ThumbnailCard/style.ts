import styled, { css } from "styled-components";
import { StyleProp } from "./interface";
import { media } from "assets/media";
export const ThumbnailStyleContainer = styled.div<StyleProp>`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    display: flex;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    ${(props) =>
      props.$size === "full" &&
      css`
        aspect-ratio: 3.5;
        ${media.phone`
          aspect-ratio: 2.5;
        `}
        ${media.tablet`
          aspect-ratio: 2.5;
        `}
      `}
    ${(props) =>
      props.$size === "square" &&
      css`
        aspect-ratio: 1;
      `}
  }
  a {
    display: flex;
  }
  p {
    text-align: center;
    line-height: 1.4;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${media.phone`
    font-size:13px;`}
  }
`;
