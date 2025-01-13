import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";
import { IoMdHome, IoIosBatteryFull } from "react-icons/io";
import { IoWifi } from "react-icons/io5";
const LocationInfo = () => {
  const location = useLocation();
  const [paths, setPaths] = useState<string[]>([]);
  useEffect(() => {
    setPaths(location.pathname.split("/").filter((path) => path.length > 0));
  }, [location.pathname]);
  return (
    <S.LocationInfoStyleContainer>
      <div className="loc-left">
        {paths.length > 0 && (
          <>
            <Link to={"/"}>
              <IoMdHome />
            </Link>
            {paths.map((path, idx) => (
              <Link to={path === "work" ? "works" : path} key={idx}>
                {path}
              </Link>
            ))}
          </>
        )}
      </div>
      <div className="loc-right">
        <IoWifi />
        <IoIosBatteryFull />
      </div>
    </S.LocationInfoStyleContainer>
  );
};

export default LocationInfo;
