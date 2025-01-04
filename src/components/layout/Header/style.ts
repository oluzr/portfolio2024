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
    justify-content:space-between
  `}
  
`;
