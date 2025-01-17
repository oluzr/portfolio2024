import * as S from "./style";
const Keywords = () => {
  return (
    <S.KeywordsStyleContainer>
      <ul>
        {keywordsContents.map((cont, idx) => (
          <li key={idx}>
            <div className="index">
              <span>{idx + 1}</span>
            </div>
            <div className="cont">
              <h5>{cont.title}</h5>
              <p>{cont.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </S.KeywordsStyleContainer>
  );
};

export default Keywords;

const keywordsContents = [
  {
    title: "<h1>I'm</h1>",
    content:
      " ",
  },
  {
    title: "% git checkout dev",
    content: "웹디자인&퍼블리셔 과정을 수료하여 웹퍼블리셔로 근무한 이력이 있습니다. 퍼블리싱을 하며 자연스레 프론트엔드 개발로도 영역을 확장하고자 공부를 시작하게 되었습니다",
  },
  {
    title: "Array.from('취미')",
    content: "['헬스', '클라이밍', '등산', '러닝', '피아노' ...]",
  },
  {
    title: "const { value } = useDev()",
    content: "완성도를 끌어올리기 위해 디테일한 부분 하나하나 놓치지 않습니다.",
  },
  {
    title: "animation: studyHard 1s infinite;",
    content:""
  }
];
