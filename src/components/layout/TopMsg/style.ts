import { media } from "assets/media";
import styled from "styled-components";
export const TopMsgStyleContainer = styled.div`
  ${media.phone`
  display:none
`}
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
  p {
    color: #e5e5ea;
    font-weight: 300;
    font-size: 14px;
  }
`;
