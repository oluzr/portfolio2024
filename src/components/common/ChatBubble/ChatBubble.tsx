import Image from '../Image/Image';
import { ChatBubbleProp } from './interface';
import * as S from './style';
const ChatBubble = ({ side = 'left', message, img }: ChatBubbleProp) => {
	return (
		<S.ChatBubbleStyleContainer $side={side}>
			<div className="chat-bubble-wrap">
				{img && <Image src={img} />}
				<p>{message}</p>
			</div>
		</S.ChatBubbleStyleContainer>
	);
};

export default ChatBubble;
