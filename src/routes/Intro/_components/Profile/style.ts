import { media } from "assets/media";
import styled from "styled-components";
export const ProfileStyleContainer = styled.div`
  margin-bottom: 10vh;
  .inner {
    background: url("/assets/images/bg-1.jpg") no-repeat center center;
    background-size: cover;
    background: #000;
    padding: 30px 50px 30px;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    flex-direction: column;
    align-items: flex-end;
    align-items: center;
    gap: 17px;
    ${media.phone`
      padding: 0px 25px 30px;
      `}
    ${media.tablet`
      padding: 0px 25px 30px;
      `}
    .avatar-sec {
      position: relative;
      /* transform: translateY(80px); */
      z-index: 1;
      ${media.phone`
        transform: translateY(30px);
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
        width: 150px;
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
      align-items: center;
      gap: 10px;
      z-index: 1;
      ${media.phone`
        display:none;
        `}
      ${media.tablet`
        display:none;
        `}
      h5 {
        font-size: 28px;
        font-weight: 400;
        color: #fff;
        text-align: center;
      }
      .link {
        a {
          display: flex;
          align-items: center;
          flex-direction: row;
          color: #fff;
          gap: 2px;
          &:hover {
            text-decoration: underline;
            /* color: #0969da; */
          }
          p {
            font-size: 12px;
            font-weight: 300;
          }
        }
      }
      ul {
        display: flex;
        display: none;
        flex-direction: row;
        gap: 5px;
        li {
          /* border: 1px solid #fff; */
          /* background-color: #000; */
          background-color: #fff;
          padding: 4px 6px;
          border-radius: 4px;
          a {
            color: #000;
            display: flex;
            align-items: center;
            gap: 3px;
            p {
              font-size: 11px;
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
      transform: rotate(360deg) scale(1);
      opacity: 1;
    }
  }
`;
