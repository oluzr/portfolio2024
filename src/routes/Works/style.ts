import { media } from "assets/media";
import styled from "styled-components";
export const WorksStyleContainer = styled.section`
  .select-type-wrapper {
    ${media.phone`
      margin:0 auto;
      width:fit-content;
      position: sticky;
      top: 0;
      background:#fff;
      
      border-radius:40px;
      padding:2px 20px;
      `}
    form {
      display: flex;
      padding: 5px 0px;
      flex-direction: row;
      justify-content: flex-end;
      gap: 14px;
      color: #fff;
      ${media.phone`
        justify-content: center;
        color: #000;
      
        `}
      label {
        display: flex;
        gap: 6px;
        align-items: center;
        font-size: 13px;
        cursor: pointer;
        input {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
