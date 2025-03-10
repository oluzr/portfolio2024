import { position } from "./../../../../node_modules/@types/stylis/index.d";
import { media } from "assets/media";
import styled from "styled-components";
export const HeaderStyleContainer = styled.header`
  ${media.phone`
    padding: 20px 15px;
    display: flex;
    align-items: center;
    background-color: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    z-index:10;
    justify-content:space-between;
    .top-msg{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      a{
        color: #e5e5ea;
        font-weight: 300;
        font-size: 13px;
        font-weight:500;
      }
    }
  `}
`;
