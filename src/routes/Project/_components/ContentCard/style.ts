import { media } from "assets/media";
import styled from "styled-components";
export const ContentCardStyleContainer = styled.div`
  .card-sec {
    margin-bottom: 10vh;
    position: relative;
    /* padding: 60px var(--mob-padding) 0; */
    padding: 20vh 40px 0;
    ${media.phone`
      padding:14px;
    `}
    ul {
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
      top: 20vh;
      font-size: 50px;
      font-weight: 500;
      ${media.phone`
        top:10px;
        
        z-index:1;
      `}

      &.show > * {
        opacity: 1;
        transform: translateY(0);
      }
      & > * {
        opacity: 0;
        transition: all 0.8s;
        color: #fff;
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
