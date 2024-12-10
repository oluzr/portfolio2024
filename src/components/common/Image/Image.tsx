import { useState } from "react";
import { ImageProp } from "./interface";
import { TbFaceIdError } from "react-icons/tb";
import * as S from "./style";
const Image = ({
  src,
  alt = "image",
  onError,
  errorMsg = false,
}: ImageProp) => {
  const [imgError, setImgError] = useState(false);
  const handleErrorImage = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setImgError(true);
  };

  if (imgError)
    return (
      <S.NoImageStyleContainer>
        <TbFaceIdError />
        {errorMsg && <span>no Image</span>}
      </S.NoImageStyleContainer>
    );
  return (
    <img
      style={{ maxWidth: "100%", display: "block" }}
      alt={alt}
      src={src}
      onError={handleErrorImage}
    />
  );
};

export default Image;
