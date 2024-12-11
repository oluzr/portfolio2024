import { Link } from "react-router-dom";
import * as S from "./style";
import AppIcon from "components/common/AppIcon/AppIcon";
import AppIcons from "components/common/AppIcons/AppIcons";

import { constants } from "constants";
const Header = () => {
  return (
    <S.HeaderStyleContainer>
      <div className="head-inner"></div>
      <AppIcon
        iconName="main"
        linkTo="/"
        imgUrl="/assets/images/fish1.png"
        style={{ top: "10%", right: "10%", position: "fixed" }}
      />
      <AppIcons
        title="Projects"
        icons={constants.APPICONS_1}
        style={{
          top: "30%",
          left: "5%",
          position: "fixed",
          transformOrigin: "left bottom",
        }}
      />
      <AppIcons
        title="about me"
        icons={constants.APPICONS_2}
        style={{
          bottom: "30%",
          right: "5%",
          position: "fixed",
        }}
      />
    </S.HeaderStyleContainer>
  );
};

export default Header;
