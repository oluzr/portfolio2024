import Image from "components/common/Image/Image";
import * as S from "./style";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiVelog } from "react-icons/si";
const Profile = () => {
  return (
    <S.ProfileStyleContainer>
      <div className="inner">
        <div className="avatar-sec">
          {/* <Image src="/assets/images/selfi1.jpeg" /> */}
          <Image src="/assets/images/appicon9.png" />
        </div>
        <div className="info">
          <h5>👩🏻‍💻</h5>
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
      </div>
    </S.ProfileStyleContainer>
  );
};

export default Profile;
