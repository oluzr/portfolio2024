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
    content:
      "낯선 것은 내가 못하는 것이 아니라 앞으로 새롭게 알아가야 할 것이라는 마음가짐으로, 낯선 것들이 익숙해질 때까지 끊임없이 배워나갑니다. 많은 시행착오를 겪고 꾸준히 연습하며 점차 상황을 빠르게 판단하는 능력을 키워왔습니다. 이러한 과정이 유능한 개발자로 성장하기 위한 발판이 된다고 믿습니다.",
  },
  {
    title: "% git checkout dev",
    content:
      "웹퍼블리셔로 근무하며 자연스럽게 프론트엔드 개발로의 영역 확장을 꿈꾸게 되어 공부를 시작했습니다. 공부한 내용을 바탕으로 동기들과 사이드 프로젝트를 성공적으로 마쳤고, 짧지만 실제 회사에서 진행했던 다양한 프로젝트를 통해 빠른 상황 판단력과 뛰어난 협업 능력을 키울 수 있었습니다. 🫡",
  },
  {
    title: "Array.from('취미')",
    content: `'Depressed? Go to the gym!'라는 말처럼, 건강한 몸과 마음을 위해 매일 헬스에 다니며 꾸준히 운동하고 있습니다. 가끔은 지인들과 함께 등산이나 클라이밍도 즐기며 에너지를 충전하곤 해요. 요즘엔 피아노에도 푹 빠져서 학원에서 레슨을 받으며 열심히 연습하고 있답니다. 🎹🎼 `,
  },
  {
    title: "animation: studyHard 1s linear infinite;",
    content:
      "99%에서 100%으로 완성도를 끌어올리고자 하는 욕심 때문에 자연스럽게 방법을 찾아다니며 이것저것 경험해보는 스타일입니다. 현재에 머물러있지 않고 성장하고자 하는 의지로 꾸준히 스터디 등 학습을 멈추지 않아요 ✍🏻",
  },
];
