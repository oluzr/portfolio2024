import * as S from "./style";
const EmojiWrap = () => {
  const emojiContent = `
  ㅤㅤㅤㅤㅤㅤ🫧
  ㅤㅤㅤㅤㅤ🫧
  ㅤㅤ🐙🦐🪼🫧🪼ㅤ🐬🐠🐟ㅤ🐋
  ㅤ🪼ㅤㅤ🪼ㅤ🫧ㅤㅤㅤ🐟ㅤ🐡
  🪸🪸ㅤㅤ🌪️ㅤ🫧🌷ㅤㅤ🐚🐚🪷ㅤㅤ🐌
  `;
  return (
    <S.EmojiStyleContainer>
      <div className="inner"><p>{emojiContent}</p></div>
    </S.EmojiStyleContainer>
  );
};

export default EmojiWrap;
