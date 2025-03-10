import styled from "styled-components";
import { AppIconStyleProp } from "./interface";
import { media } from "assets/media";
export const AppIconStyleContainer = styled.div<AppIconStyleProp>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .app-icon-img {
    border-radius: 6px;
    width: 80px;
    aspect-ratio: 1/1;
    /* border: 1px solid #ddd; */
    overflow: hidden;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #ffffff14;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    text-align: center;
    font-size: 13px;
    color: #fff;
  }
`;
