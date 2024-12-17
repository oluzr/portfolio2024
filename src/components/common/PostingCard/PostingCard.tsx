import { Link } from "react-router-dom";
import { PostingCardProp } from "./interface";
import * as S from "./style";
import Image from "../Image/Image";
const PostingCard = ({ link, title }: PostingCardProp) => {
  function extractKoreanTitleFromURL(url: any) {
    if (!url) return;
    try {
      const titlePart = decodeURIComponent(url.split("/").pop());
      const koreanTitle =
        titlePart.match(/[가-힣]+/g)?.join(" ") || "No Korean title found";
      return koreanTitle;
    } catch (error) {
      console.error("Error extracting title:", error);
      return null;
    }
  }
  return (
    <S.PostingStyleContainer>
      <Link to={link}>
        <Image src="/assets/images/avatar1.png" />
        {title ? (
          <p>{extractKoreanTitleFromURL(title)}</p>
        ) : (
          <p>관련 포스팅 보기</p>
        )}
      </Link>
    </S.PostingStyleContainer>
  );
};

export default PostingCard;
