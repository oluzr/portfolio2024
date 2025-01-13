import Image from "components/common/Image/Image";
import * as S from "./style";
import { Link } from "react-router-dom";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const ContactCard = () => {
  return (
    <S.ContactCardStyleContainer>
      <div className="thumb">
        <Image src="/assets/images/bg-1.jpg" />
        <h5 className="main-tit">Contact</h5>
        <p className="sub-tit">olu-zr@naver.com</p>
        <ul>
          <li>
            <Link to={""}>
              <FaGithub />
              <p>github</p>
            </Link>
          </li>
          <li>
            <Link to={""}>
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
