import * as S from "./style";
import AppIcon from "components/common/AppIcon/AppIcon";
import AppIcons from "components/common/AppIcons/AppIcons";
import { constants } from "constants";
import useIsMobile from "hooks/useIsMobile";
import BackBtn from "components/common/BackBtn/BackBtn";
import Hamberger from "components/common/Hamberger/Hamberger";

const Header = () => {
  const isItMobile = useIsMobile();
  return (
    <S.HeaderStyleContainer>
      {!isItMobile ? (
        <>
          <AppIcon
            iconName="main"
            linkTo="/"
            imgUrl="/assets/images/fish1.png"
            style={{ top: "10%", right: "10%", position: "fixed" }}
          />
          <AppIcons
            title="회사 프로젝트"
            icons={constants.APPICONS_1}
            style={{
              top: "30%",
              left: "4.5%",
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
            title="사이드 프로젝트"
            icons={constants.APPICONS_3}
            style={{
              bottom: "30%",
              left: "4.5%",
              position: "fixed",
            }}
          />
        </>
      ) : (
        <>
          <BackBtn />
          <Hamberger />
        </>
      )}
    </S.HeaderStyleContainer>
  );
};

export default Header;
