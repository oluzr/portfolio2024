import * as S from "./style";
import AppIcon from "components/common/AppIcon/AppIcon";
import AppIcons from "components/common/AppIcons/AppIcons";
import { constants } from "constants";
import useIsMobile from "hooks/useIsMobile";
import BackBtn from "components/common/BackBtn/BackBtn";
import Hamberger from "components/common/Hamberger/Hamberger";
import { Link, useLocation } from "react-router-dom";
import TopMsg from "../TopMsg/TopMsg";

const Header = () => {
  const isItMobile = useIsMobile();
  const location = useLocation();
  return (
    <S.HeaderStyleContainer>
      {!isItMobile ? (
        <>
          <AppIcon
            iconName="main"
            linkTo="/"
            imgUrl="/assets/images/appicon1.png"
            style={{ top: "10%", right: "6%", position: "fixed" }}
          />
          <AppIcon
            iconName="works"
            notiNum={6}
            linkTo="/works"
            imgUrl="/assets/images/appicon9.png"
            style={{ top: "calc(10% + 150px)", right: "6%", position: "fixed" }}
          />
          <AppIcons
            title="In LSP"
            icons={constants.APPICONS_1}
            notiNum={4}
            style={{
              top: "30%",
              left: "5%",
              position: "fixed",
              transformOrigin: "left bottom",
            }}
          />
          <AppIcons
            title="oluzr"
            icons={constants.APPICONS_2}
            
            style={{
              bottom: "30%",
              right: "5%",
              position: "fixed",
            }}
          />
          <AppIcons
            title="Side Project"
            notiNum={3}
            icons={constants.APPICONS_3}
            style={{
              bottom: "30%",
              left: "5%",
              position: "fixed",
            }}
          />
        </>
      ) : (
        <>
          {location.pathname !== "/" ? <BackBtn /> : <div></div>}
          <div className="top-msg">
            <Link to={"/"}>workroom</Link>
          </div>
          <Hamberger />
        </>
      )}
    </S.HeaderStyleContainer>
  );
};

export default Header;
