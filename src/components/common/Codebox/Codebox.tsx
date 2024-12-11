import { CodeboxProp } from "./interface";
import * as S from "./style";
const Codebox = ({ side = "left", content }: CodeboxProp) => {
  return (
    <S.CodeboxStyleContainer $side={side}>
      <div className="inner">
        <p>{content}</p>
      </div>
    </S.CodeboxStyleContainer>
  );
};

export default Codebox;
