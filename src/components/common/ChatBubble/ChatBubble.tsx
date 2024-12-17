import Image from "../Image/Image";
import { ChatBubbleProp } from "./interface";
import * as S from "./style";
import SyncLoader from "react-spinners/SyncLoader";
const ChatBubble = ({
  side = "left",
  message,
  img,
  title,
  isLoading,
  spinnerColor = "#fff",
}: ChatBubbleProp) => {
  return (
    <S.ChatBubbleStyleContainer $side={side}>
      <div className="chat-bubble-wrap">
        {isLoading ? (
          <SyncLoader loading={isLoading} size={7} color={spinnerColor} />
        ) : (
          <>
            {img && <Image src={img} />}
            {title && <h4>✍🏻 {title}</h4>}
            {typeof message === "string" ? (
              <p>{message}</p>
            ) : (
              message?.map((msg, idx) => <p key={idx}>{msg}</p>)
            )}
          </>
        )}
      </div>
    </S.ChatBubbleStyleContainer>
  );
};

export default ChatBubble;
