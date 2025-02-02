import { media } from "assets/media";
import styled from "styled-components";
export const KeywordsStyleContainer = styled.div`
  h3 {
    font-size: 50px;
    margin-bottom: 40px;
    /* font-family: "Rubik Bubbles", serif; */
    /* color: transparent; */
    /* -webkit-text-stroke: 1px #fff; */
    font-weight: 400;
    color: #fff;
    /* text-transform: uppercase; */
    /* padding-left: 13px; */
    text-align: center;
    letter-spacing: -5px;

    display: none;
    ${media.phone`
      text-align: center;
      letter-spacing: -1px;
      font-size:62px;
      `}
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 0 30px;
    ${media.phone`
      gap: 17px;
      padding: 0 10px;
      
      `}
    li {
      display: flex;
      flex-direction: row;
      background-color: #00000099;
      border-radius: 15px;
      padding: 10px 30px;
      &:nth-child(even) {
        flex-direction: row-reverse;
        .index {
          /* transform: translate(60px, -40px); */
          padding-left: 13%;
        }
        .cont {
          text-align: right;
          align-items: flex-end;
        }
      }
      &:nth-child(odd) {
        .index {
          /* transform: translate(60px, -40px); */
          padding-right: 13%;
        }
      }

      ${media.phone`
        padding:14px 10px 15px 15px;
      `}
      /* overflow: hidden; */
      .index {
        display: flex;
        align-items: center;
        justify-content: center;
        /* transform: translate(-60px, -40px); */

        width: 100px;
        animation-name: rotateAnimation2;
        animation-duration: 1ms;
        animation-direction: alternate;
        animation-timeline: scroll(block nearest);
        transform-origin: center center;
        ${media.phone`
          width: fit-content;
          &:is(li:nth-child(even)>div){
              /* transform: translate(20px, -55px) !important; */
              padding-left:20px;
            }
            &:is(li:nth-child(odd)>div){
            padding-right:20px;
              /* transform: translate(-20px, -55px) !important; */
            
          }
      `}
        span {
          font-size: 160px;
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
            font-size:60px;
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
          font-size: 14px;
          /* max-width: 85%; */
          white-space: pre-line;
          line-height: 1.5;
          word-break: keep-all;
          ${media.phone`
            white-space:unset;
            font-size:11px;
          `}
        }
      }
    }
  }
  @keyframes rotateAnimation2 {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-110px);
      opacity: 0.4;
    }
  }
`;
