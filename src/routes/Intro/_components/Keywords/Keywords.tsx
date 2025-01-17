import * as S from "./style";
const Keywords = () => {
  return (
    <S.KeywordsStyleContainer>
      <h3>Keywords</h3>
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
    title: "type Everything = 'practice' | null",
    content: "낯선 것은 내가 못하는 것이 아니라 앞으로 새로 알게되는 것이다, 라는 마음가짐으로 낯선 것이 익숙해질 때까지 익힙니다. 많은 시행착오와 연습이 빠른 상황판단을 가능케 하고 이것이 유능한 개발자로 나아가는 길이라 생각합니다",
  },
  {
    title: "% git checkout dev",
    content:
      "웹퍼블리셔로 근무하면서 자연스레 프론트엔드 개발로 영역을 확장하고자 공부를 시작했습니다. 동기들과의 사이드 프로젝트, 짧은 기간이지만 실제로 회사에 근무하며 진행했던 프로젝트들로 인해 빠른 상황 판단력과 협업 능력을 기를 수 있었습니다 🫡",
  },
  {
    title: "Array.from('취미')",
    content:
      "'Depressed? Go to the gym!' 건강한 몸과 정신을 위해 매일 운동을 하고 꾸준히 피아노 연습을 하고 있습니다. 😋 매일 헬스, 종종 지인들과 클라이밍과 등산도 해요! 피아노는 아직 아마추어 수준이지만 평소 클래식을 즐겨 들어서 제게 익숙한 곡을 직접 연주할 때 느끼는 희열이 있더라구요 😙",
  },
  {
    title: "const { value } = useDev()",
    content: "완성도를 끌어올리기 위해 디테일한 부분 하나하나 놓치지 않습니다.",
  },
  {
    title: "animation: studyHard 1s linear infinite;",
    content: "99%에서 100%으로 완성도를 끌어올리고자 하는 욕심 때문에 자연스럽게 방법을 찾아다니며 이것저것 경험해보는 스타일입니다. 현재에 머물러있지 않고 성장하고자 하는 의지로 꾸준히 스터디 등 학습을 멈추지 않아요 ✍🏻",
  },
];
