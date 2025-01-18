import { media } from "assets/media";
import styled from "styled-components";
export const KeywordsStyleContainer = styled.div`
  h3 {
    font-size: 120px;
    margin-bottom: 40px;
    font-family: "Rubik Bubbles", serif;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    font-weight: 400;
    /* text-transform: uppercase; */
    padding-left: 13px;
    letter-spacing: -5px;
    animation-name: rotateAnimation;
    animation-duration: 1ms;
    animation-direction: alternate;
    animation-timeline: scroll(block nearest);
    transform-origin: center center;
    ${media.phone`
      text-align: center;
      letter-spacing: -1px;
      font-size:62px;
      `}
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-left: 30px;
    ${media.phone`
      gap: 17px;
      padding-left: 10px;
      `}
    li {
      display: flex;
      flex-direction: row;
      background-color: #00000099;
      border-radius: 15px;
      padding: 0px 10px;
      ${media.phone`
        padding:14px 10px 15px 0;
        
      `}
      /* overflow: hidden; */
      .index {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-40px, -30px);
        width: 100px;

        ${media.phone`
          width: fit-content;
          transform: translate(-10px, -65px);

      `}
        span {
          font-size: 130px;
          font-family: "Rubik Bubbles", serif;
          color: transparent;
          -webkit-text-stroke: 1px #fff;
          /* font-family: "Orbitron", serif; */
          /* font-weight: 800; */
          /*        text-shadow:
            2px 2px 0 red,
            -2px 2px 0 red,
            -2px -2px 0 red,
            2px -2px 0 red; */
          ${media.phone`
            font-size:90px;
          `}
        }
      }
      .cont {
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: #fff;
        justify-content: center;
        width: 100%;
        h5 {
          font-weight: 400;
          font-size: 21px;
          font-family: "Fira Code", monospace;
          background-color: #ffffff1f;
          width: fit-content;
          padding: 5px 10px;
          border-radius: 7px;
          line-height: 1.5;
          ${media.phone`
            font-size:11px;
            
          `}
        }
        p {
          font-weight: 400;
          font-size: 13px;
          max-width: 90%;
          white-space:pre-line;
          line-height: 1.5;
          ${media.phone`
            white-space:unset;
            font-size:11px;
          `}
        }
      }
    }
  }
  @keyframes rotateAnimation {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-140px);
      opacity: .1;
    }
  }
`;
