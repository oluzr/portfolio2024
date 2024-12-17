import { FeedbackProp } from "./interface";
import * as S from "./style";
const Feedback = ({ feedback }: FeedbackProp) => {
  return (
    <S.FeedbackStyleContainer>
      {Array.isArray(feedback) ? (
        feedback.map((str, idx) => <p key={idx}>{str}</p>)
      ) : (
        <p>{feedback}</p>
      )}
    </S.FeedbackStyleContainer>
  );
};

export default Feedback;
