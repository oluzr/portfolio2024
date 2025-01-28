import ThumbnailCard from "components/common/ThumbnailCard/ThumbnailCard";
import * as S from "./style";
import { Link } from "react-router-dom";
import Timeline from "./_components/Timeline/Timeline";
import Profile from "./_components/Profile/Profile";
import Keywords from "./_components/Keywords/Keywords";
import ContactCard from "components/common/ContactCard/ContactCard";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
const Intro = () => {
  const menuList = ["keywords", "timeline", "contact"];
  type Menu = (typeof menuList)[number];
  const [activeMenu, setActiveMenu] = useState("keywords");
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
  });
  // Scroll sections references
  const keywordsRef = useRef(null);
  const timelineRef = useRef(null);
  const contactRef = useRef(null);
  // Scroll sections references
  const sectionRefs: Record<
    Menu,
    React.MutableRefObject<HTMLDivElement | null>
  > = {
    keywords: useRef(null),
    timeline: useRef(null),
    contact: useRef(null),
  };
  const handleScroll = (id: Menu) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (inView1) {
      setActiveMenu("keywords");
    } else if (inView2) {
      setActiveMenu("timeline");
    } else if (inView3) {
      setActiveMenu("contact");
    }
  }, [inView1, inView2, inView3]);
  return (
    <S.IntroStyleContainer>
      <Profile />
      <div className="navigate-section">
        <ul>
          {menuList.map((menu) => (
            <li
              className={activeMenu == menu ? "active" : ""}
              onClick={() => handleScroll(menu)}
            >
              <Link to={`#${menu}`}>{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="contents-section">
        <div
          ref={(el) => {
            ref1(el);
            sectionRefs.keywords.current = el;
          }}
          id="keywords"
        >
          <Keywords />
        </div>
        <div
          ref={(el) => {
            ref2(el);
            sectionRefs.timeline.current = el;
          }}
          id="timeline"
        >
          <Timeline />
        </div>
        <div
          ref={(el) => {
            ref3(el);
            sectionRefs.contact.current = el;
          }}
          id="contact"
        >
          <ContactCard />
        </div>
      </div>
      {/* <ThumbnailCard title="contact" imgSrc="/assets/images/bg-1.jpg" /> */}
    </S.IntroStyleContainer>
  );
};

export default Intro;
