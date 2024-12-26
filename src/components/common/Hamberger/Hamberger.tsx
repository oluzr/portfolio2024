import { useAsideState } from "store/app";
import * as S from "./style";
import { FaHamburger } from "react-icons/fa";
const Hamberger = () => {
  const { showAside } = useAsideState((set) => set);
  return (
    <S.HamberStyleContainer onClick={showAside}>
      <FaHamburger />
    </S.HamberStyleContainer>
  );
};

export default Hamberger;
