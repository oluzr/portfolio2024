import { media } from "assets/media";
import styled from "styled-components";
export const ContentCardStyleContainer = styled.div`
  .card-sec {
    /* margin-bottom: 13vh; */
    position: relative;
    /* padding: 60px var(--mob-padding) 0; */
    padding: 0vh 0px 15vh;
    ${media.phone`
      /* padding:0; */
    `}
    ul {
      padding-top: 40px;
      ${media.phone`
        padding-top:0;
      `}

      li {
        opacity: 0;
        transition: all 0.9s;
        &.show {
          opacity: 1;
        }
      }
    }
    .title {
      position: sticky;
      top: 20px;
      font-size: 50px;
      font-weight: 500;
      ${media.phone`
        position: unset;
        top:10px;
        z-index:1;
      `}
      ${media.tablet`
        top:10px;
        z-index:1;
      `}

      &.show > * {
        opacity: 1;
        transform: translateY(0);
      }
      & > * {
        /* opacity: 0; */
        transition: all 0.8s;
        color: #e5e5ea;
      }

      ul {
        &:is(.show + ul) {
          opacity: 1;
        }
        opacity: 0;
        transition: all 0.7s;
        margin-left: auto;
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 30px;

        li {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.9s;
          &.show {
            opacity: 1;
          }
          img {
            display: flex;
            width: 100%;
          }
        }
      }
    }
  }
`;
