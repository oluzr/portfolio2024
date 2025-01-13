import { Prop } from "./interface";
import { SkillSetStyleContainer, SkillSpanStyleContainer } from "./style";

const SkillSet = ({ skills }: Prop) => {
  return (
    <SkillSetStyleContainer>
      <ul>
        {skills.map((skill,idx) => (
          <li key={idx}>
            <SkillSpan skill={skill} />
          </li>
        ))}
      </ul>
    </SkillSetStyleContainer>
  );
};

const SkillSpan = ({ skill }: { skill: string }) => {
  const notionColors = [
    "#EB5757", // 빨강
    "#F2994A", // 주황
    "#F2C94C", // 노랑
    "#27AE60", // 초록
    "#2F80ED", // 파랑
    "#9B51E0", // 보라
    "#FF65A3", // 분홍
  ];
  return (
    <SkillSpanStyleContainer
      $fontColor={notionColors[Math.floor(Math.random() * notionColors.length)]}
    >
      {skill}
    </SkillSpanStyleContainer>
  );
};

export default SkillSet;
