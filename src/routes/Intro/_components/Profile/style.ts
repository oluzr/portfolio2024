import { media } from "assets/media";
import styled from "styled-components";
export const ProfileStyleContainer = styled.div`
  margin-bottom: 10vh;
  .inner {
    background: url("/assets/images/bg-1.jpg") no-repeat center center;
    background-size: cover;

    padding: 0px 50px 50px;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 50px;
    position: relative;
    ${media.phone`
      padding: 0px 25px 30px;
      `}
    ${media.tablet`
      padding: 0px 25px 30px;
      `}
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      z-index: 0;
      border-radius: 14px;
      animation-name: rotateAnimation2;
      animation-duration: 1ms;
      animation-direction: alternate;
      animation-timeline: scroll(block nearest);
      transform-origin: center center;
    }
    .avatar-sec {
      position: relative;
      transform: translateY(80px);
      z-index: 1;
      ${media.phone`
        transform: translateY(60px);
        `}
      ${media.tablet`
        transform: translateY(70px);
        `}
      img {
        animation-name: rotateAnimation;
        animation-duration: 1ms;
        animation-direction: alternate;
        animation-timeline: scroll(block nearest);
        transform-origin: center center;
        width: 200px;
        aspect-ratio: 1;
        border-radius: 50%;
        object-fit: cover;
        ${media.phone`
          width:90px;
          `}
        ${media.tablet`
          width:130px;
          `}
      }
    }
    .info {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 1;
      ${media.phone`
        display:none;
        `}
      ${media.tablet`
        display:none;
        `}
      h5 {
        font-size: 34px;
        font-weight: 400;
        color: #fff;
      }
      ul {
        display: flex;
        flex-direction: row;
        gap: 5px;
        li {
          /* border: 1px solid #fff; */
          /* background-color: #000; */
          background-color: #fff;
          padding: 6px 7px;
          border-radius: 4px;
          a {
            color: #000;
            display: flex;
            align-items: center;
            gap: 6px;
            p {
              font-size: 12px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }
    to {
      transform: rotate(300deg) scale(1);
      opacity: 1;
    }
  }
  @keyframes rotateAnimation2 {
    from {
      backdrop-filter: blur(0);
    }
    to {
      backdrop-filter: blur(40px);
    }
  }
`;
