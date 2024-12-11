import { Link } from "react-router-dom";
import * as S from "./style";
import AppIcon from "components/common/AppIcon/AppIcon";
import AppIcons from "components/common/AppIcons/AppIcons";
import { IoIosHome } from "react-icons/io";
import { constants } from "constants";
const Header = () => {
  return (
    <S.HeaderStyleContainer>
      <div className="head-inner">
        <div className="home">
          <IoIosHome />
        </div>
      </div>
      <AppIcon
        iconName="main"
        linkTo="/"
        imgUrl="/assets/images/fish1.png"
        style={{ top: "10%", right: "10%", position: "fixed", zIndex: "10" }}
      />
      <AppIcons
        title="Projects"
        icons={constants.APPICONS_1}
        style={{
          top: "30%",
          left: "10%",
          position: "fixed",
          zIndex: "10",
        }}
      />
    </S.HeaderStyleContainer>
  );
};

export default Header;
