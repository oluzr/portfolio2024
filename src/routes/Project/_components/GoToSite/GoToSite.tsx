import { useEffect, useState } from "react";
import { Prop } from "./interface";
import { SITES_LINK } from "api/data";
import * as S from "./style";
import Image from "components/common/Image/Image";
import { Link } from "react-router-dom";
import { IoArrowRedoCircle } from "react-icons/io5";
const GoToSite = ({ value }: Prop) => {
  const [siteInfo, setSiteInfo] = useState("");
  useEffect(() => {
    setSiteInfo(SITES_LINK[value]);
  }, []);
  if (!siteInfo) return <></>;
  return (
    <S.GoToSiteStyleContainer>
      <ul>
        <li>
          <Link to={"/works"}>
            <h6>
              <IoArrowRedoCircle />
              works
            </h6>
            <p>다시 프로젝트 목록으로 가기</p>
          </Link>
        </li>
        <li>
          <Link to={siteInfo}>
            <h6>
              <IoArrowRedoCircle />
              site
            </h6>
            <p>해당 사이트 혹은 관련 페이지로 이동</p>
          </Link>
        </li>
      </ul>
    </S.GoToSiteStyleContainer>
  );
};

export default GoToSite;
