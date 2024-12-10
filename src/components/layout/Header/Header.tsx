import { Link } from "react-router-dom";
import * as S from "./style";
import AppIcon from "components/common/AppIcon/AppIcon";
import AppIcons from "components/common/AppIcons/AppIcons";
import { constants } from "constants";
const Header = () => {
  return (
    <S.HeaderStyleContainer>
      <AppIcons title="main" icons={constants.APPICONS_1}/>
    </S.HeaderStyleContainer>
  );
};

export default Header;
