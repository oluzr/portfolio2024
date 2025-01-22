import Image from "components/common/Image/Image";
import * as S from "./style";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiVelog } from "react-icons/si";
import { constants } from "constants";
import { HiOutlineLink } from "react-icons/hi";
const Profile = () => {
  return (
    <S.ProfileStyleContainer>
      <div className="inner">
        <div className="avatar-sec">
          {/* <Image src="/assets/images/selfi1.jpeg" /> */}
          <Image src="/assets/images/cat.png" />
        </div>
        <div className="info">
          {/* <h5>👩🏻‍💻</h5> */}
          <h5>나라 이</h5>
          <div className="link">
            <Link to={constants.GITHUB_LINK}>
              <HiOutlineLink />
              <p>{constants.GITHUB_LINK}...</p>
            </Link>
          </div>
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
      </div>
    </S.ProfileStyleContainer>
  );
};

export default Profile;
