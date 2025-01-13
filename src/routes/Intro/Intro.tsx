import ThumbnailCard from "components/common/ThumbnailCard/ThumbnailCard";
import * as S from "./style";
import { Link } from "react-router-dom";
import Timeline from "./_components/Timeline/Timeline";
const Intro = () => {
  /*
    내 소개
    타임라인
    contact card
  */
  return (
    <S.IntroStyleContainer>
      <div className="navigate-section">
        <ul>
          <li>
            <Link to={"#about"}>about me</Link>
          </li>
          <li>
            <Link to={"#timeline"}>timeline</Link>
          </li>
          <li>
            <Link to={"#contact"}>contact</Link>
          </li>
        </ul>
      </div>
      <div className="contents-section">
        <div id="about"></div>
        <div id="timeline">
          <Timeline />
        </div>
        <div id="contact"></div>
      </div>
      {/* <ThumbnailCard title="contact" imgSrc="/assets/images/bg-1.jpg" /> */}
    </S.IntroStyleContainer>
  );
};

export default Intro;
