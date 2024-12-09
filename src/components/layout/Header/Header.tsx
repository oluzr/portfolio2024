import { Link } from "react-router-dom";
import * as S from "./style";
const Header = () => {
  return (
    <S.HeaderStyleContainer>
      <ul>
        <li>
          <Link to={"/"}>main</Link>
        </li>
        <li>
          <Link to={"/works"}>works</Link>
        </li>
      </ul>
    </S.HeaderStyleContainer>
  );
};

export default Header;
