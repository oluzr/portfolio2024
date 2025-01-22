import ThumbnailCard from "components/common/ThumbnailCard/ThumbnailCard";
import * as S from "./style";
import { Link } from "react-router-dom";
import Timeline from "./_components/Timeline/Timeline";
import Profile from "./_components/Profile/Profile";
import Keywords from "./_components/Keywords/Keywords";
import ContactCard from "routes/Main/_components/ContactCard/ContactCard";
import { useState } from "react";
const Intro = () => {
  const menuList = ["keywords", "timeline", "contact"];
  const [activeMenu, setActiveMenu] = useState("keywords");
  return (
    <S.IntroStyleContainer>
      <Profile />
      <div className="navigate-section">
        <ul>
          {menuList.map((menu) => (
            <li className={activeMenu == menu ? "active" : ""}>
              <Link to={`#${menu}`}>{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="contents-section">
        <div id="keywords">
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
