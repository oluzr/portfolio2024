import { Link } from "react-router-dom";
import { PostingCardProp } from "./interface";
import * as S from "./style";
import Image from "../Image/Image";
const PostingCard = ({ link, title }: PostingCardProp) => {
  function extractTitleFromURL(url: string): string {
    if (!url) return "";
    try {
      const titlePart = url.split("@")[1]?.split("/")[1]; // @ 이후와 / 이후 추출
      return titlePart || ""; // 값이 없으면 공백 반환
    } catch (error) {
      console.error("Error extracting title:", error);
      return "";
    }
  }
  return (
    <S.PostingStyleContainer>
      <Link to={link}>
        <Image src="/assets/images/avatar1.png" />
        {title ? (
          <p>{extractTitleFromURL(title)}</p>
        ) : (
          <p>관련 포스팅 보기</p>
        )}
      </Link>
    </S.PostingStyleContainer>
  );
};

export default PostingCard;
