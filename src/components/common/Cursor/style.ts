import styled from "styled-components";
export const CursorStyleContainer = styled.svg`
  z-index: 1000;
  &:is(main:hover ~ &) {
    polyline {
      stroke: #ffffff98 !important;
    }
    circle {
      fill: #ffffff98 !important;
    }
  }
`;
