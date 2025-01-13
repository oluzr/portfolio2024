import { media } from "assets/media";
import styled from "styled-components";
export const MainStyleContainer = styled.section`
  height: 100%;
  padding: 30px 80px !important;
  display: flex;
  flex-direction: column;
  gap: 50px;
  ${media.phone`
    padding:80px 20px !important;
  `}
  ${media.tablet`
    padding:20px 40px !important;
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
