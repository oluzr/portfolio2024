import { constants } from "constants";
import * as S from "./style";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { useState } from "react";
const Aside = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <S.AsideStyleContainer>
      <div className="inner">
        <div className="close">
          <IoIosClose />
        </div>
        <ul className="main-cate">
          {constants.ASIDE_MEMU.map((menu, idx) => (
            <li key={idx}>
              {menu.subMenu ? (
                <>
                  <p onClick={() => toggleSubMenu(idx)}>
                    {menu.title}
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </p>
                  <ul
                    className={`sub-cate ${
                      openMenuIndex === idx ? "open" : ""
                    }`}
                  >
                    {menu.subMenu.map((subMenu, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subMenu.link}>{subMenu.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={menu.link}>{menu.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </S.AsideStyleContainer>
  );
};

export default Aside;
