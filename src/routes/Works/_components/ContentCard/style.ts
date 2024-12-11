import styled from "styled-components";
export const ContentCardStyleContainer = styled.div`
  .card-sec {
    margin-bottom: 30vh;
    position: relative;
    /* padding: 60px var(--mob-padding) 0; */
    padding: 20vh 40px 0;
    @include onlyPc {
    }
    .title {
      position: sticky;
      top: 20vh;
      font-size: 50px;
      font-weight: 500;
      @include mobile {
        position: unset;
        margin-bottom: 10px;
      }
      &.show > * {
        opacity: 1;
        transform: translateY(0);
      }
      & > * {
        opacity: 0;
        transition: all 0.8s;
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
        @include mobile {
          margin-top: 25px;
          width: 100%;
          gap: 15px;
        }
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
