import ThumbnailCard from "components/common/ThumbnailCard/ThumbnailCard";
import * as S from "./style";
import { Link } from "react-router-dom";
import Timeline from "./_components/Timeline/Timeline";
import Profile from "./_components/Profile/Profile";
import Keywords from "./_components/Keywords/Keywords";
import ContactCard from "routes/Main/_components/ContactCard/ContactCard";
const Intro = () => {
  /*
    내 소개
    타임라인
    contact card
  */
  return (
    <S.IntroStyleContainer>
      <Profile />
      <div className="navigate-section">
        <ul>
          <li>
            <Link to={"#about"}>keywords</Link>
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
        <div id="about">
          <Keywords />
        </div>
        <div id="timeline">
          <Timeline />
        </div>
        <div id="contact">
          <ContactCard />
        </div>
      </div>
      {/* <ThumbnailCard title="contact" imgSrc="/assets/images/bg-1.jpg" /> */}
    </S.IntroStyleContainer>
  );
};

export default Intro;
