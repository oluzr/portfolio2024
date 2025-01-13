import * as S from "./style";
const EmojiWrap = () => {
  const emojiContent = `
🫧 ㅤㅤㅤ ㅤ
ㅤ ㅤ 🪼 ㅤㅤ🫧ㅤ🪼🪼ㅤ🪼ㅤㅤㅤㅤ
🫧 🪼ㅤ
 ㅤ 🫧ㅤㅤㅤㅤㅤ  🪼
ㅤㅤ🫧 ㅤㅤㅤㅤㅤㅤㅤ
  `;
  return (
    <S.EmojiStyleContainer>
      <div className="inner">
        <p>{emojiContent}</p>
        <span>🐠</span>
      </div>
    </S.EmojiStyleContainer>
  );
};

export default EmojiWrap;
