import { media } from "assets/media";
import styled from "styled-components";
export const BackBtnStyleContainer = styled.div`
  cursor: pointer;
  svg {
    color: #fff;
    width: 40px;
    height: 40px;
    ${media.phone`
      width:26px;
      height:26px;
    `}
  }
`;
