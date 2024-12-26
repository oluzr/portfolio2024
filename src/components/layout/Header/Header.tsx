import { Link } from "react-router-dom";
import * as S from "./style";
import AppIcon from "components/common/AppIcon/AppIcon";
import AppIcons from "components/common/AppIcons/AppIcons";
import { media } from "assets/media";
import { constants } from "constants";
import { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import useIsMobile from "hooks/useIsMobile";
import BackBtn from "components/common/BackBtn/BackBtn";
import Hamberger from "components/common/Hamberger/Hamberger";

const Header = () => {
  const isItMobile = useIsMobile();
  const [isHamClicked, setHamClicked] = useState(false);
  useEffect(() => {
    console.log(isItMobile);
  }, [isItMobile]);

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
            title="works"
            icons={constants.APPICONS_1}
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
