import Image from "components/common/Image/Image";
import * as S from "./style";
import { Link } from "react-router-dom";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { constants } from "constants";
import { IoMailSharp } from "react-icons/io5";
const ContactCard = () => {
  return (
    <S.ContactCardStyleContainer>
      <div className="inner">
        <div className="thumb">
          <Image src="/assets/images/appicon1.png" />
        </div>
        <h5 className="main-tit">Contact</h5>
        <p className="sub-tit">
          <IoMailSharp />
          olu-zr@naver.com
        </p>
        <ul>
          <li>
            <Link to={constants.GITHUB_LINK}>
              <FaGithub />
              <p>github</p>
            </Link>
          </li>
          <li>
            <Link to={constants.VELOG_LINK}>
              <SiVelog />
              <p>velog</p>
            </Link>
          </li>
        </ul>
      </div>
    </S.ContactCardStyleContainer>
  );
};

export default ContactCard;
