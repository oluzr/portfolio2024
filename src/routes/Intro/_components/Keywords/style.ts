import styled from "styled-components";
export const KeywordsStyleContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-left: 30px;
    li {
      display: flex;
      flex-direction: row;
      background-color: #00000099;
      border-radius: 15px;
      padding: 0px 10px;
      /* overflow: hidden; */
      .index {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-40px, -30px);
        width: 100px;
        span {
          font-size: 150px;
          /* font-family: "Orbitron", serif; */
          font-family: "Rubik Bubbles", serif;
          /* font-weight: 800; */
          color: transparent;
          /*        text-shadow:
            2px 2px 0 red,
            -2px 2px 0 red,
            -2px -2px 0 red,
            2px -2px 0 red; */
          -webkit-text-stroke: 1px #fff;
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
        }
        p{
          font-weight:400;
          font-size: 13px;
          max-width: 90%;
          line-height: 1.5;

        }
      }
    }
  }
`;
