import { media } from "assets/media";
import styled from "styled-components";
export const MainStyleContainer = styled.section`
  height: 100%;
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${media.phone`
       padding-left: 20px !important;
       padding-right: 20px !important;
  `}
  .app-icons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    & > div {
      width: calc((100% - 50px) / 2);
      ${media.phone`
        width: calc((100% - 15px) / 2);
        `}
      ${media.tablet`
        width: calc((100% - 20px) / 2);
        `}
    }
    .just-thumbnail {
    }
    .app-icons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 15px;
      ${media.phone`
          gap:15px;
        `}
      ${media.tablet`
          gap:20px;
        `}
      & > div {
        width: calc((100% - 60px) / 4);
        ${media.phone`
          width: calc((100% - 15px) / 2);
        `}
        ${media.tablet`
          width: calc((100% - 20px) / 2);
        `}
      }
    }
  }
`;
