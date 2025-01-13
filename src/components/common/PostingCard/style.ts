import styled from "styled-components";
export const PostingStyleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
  a {
    /* border: 1px solid red; */
    border-radius: 15px;
    border-right: 20px solid #0b1c30cf;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 20px 18px 20px 30px;
    position: relative;
    background-color: #11384c8f;
    overflow: hidden;
    box-shadow: inset 0 2px 55px -2px #ffffff1c;
    p {
      line-height: 1.4;
      font-size: 14px;
      color: #eee;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
  }
`;
