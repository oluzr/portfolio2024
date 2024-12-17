import Image from "../Image/Image";
import { ChatBubbleProp } from "./interface";
import * as S from "./style";
const ChatBubble = ({ side = "left", message, img, title }: ChatBubbleProp) => {
  return (
    <S.ChatBubbleStyleContainer $side={side}>
      <div className="chat-bubble-wrap">
        {img && <Image src={img} />}
        {title && <h4>✍🏻 {title}</h4>}
        {typeof message === "string" ? (
          <p>{message}</p>
        ) : (
          message?.map((msg,idx) => <p key={idx}>{msg}</p>)
        )}
      </div>
    </S.ChatBubbleStyleContainer>
  );
};

export default ChatBubble;
