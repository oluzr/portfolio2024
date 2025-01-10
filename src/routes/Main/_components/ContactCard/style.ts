import { media } from "assets/media";
import styled from "styled-components";
export const ContactCardStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  .thumb {
    img {
      display: flex;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
      aspect-ratio: 3.5;
      ${media.phone`
        aspect-ratio: 2.5;
        `}
      ${media.tablet`
          aspect-ratio: 2.5;
          `}
    }
    .main-tit {
    }
    .sub-tit {
    }
    ul {
      li {
        a {
          display: flex;
        }
      }
    }
  }
`;
