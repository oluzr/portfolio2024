import CursorAnimation from "components/common/Cursor/Cursor";
import * as S from "./style";
import ThumbnailCard from "components/common/ThumbnailCard/ThumbnailCard";
import AppIcon from "components/common/AppIcon/AppIcon";
import ContactCard from "./_components/ContactCard/ContactCard";
const Main = () => {
  return (
    <S.MainStyleContainer>
      <ContactCard />
      <div className="app-icons-wrapper">
        <div className="app-icons">
          <ThumbnailCard
            title="contact"
            imgSrc="/assets/images/ocean.jpeg"
            size="square"
          />
          <ThumbnailCard
            title="contact"
            imgSrc="/assets/images/ocean.jpeg"
            size="square"
          />
          <ThumbnailCard
            title="contact"
            imgSrc="/assets/images/ocean.jpeg"
            size="square"
          />
          <ThumbnailCard
            title="contact"
            imgSrc="/assets/images/ocean.jpeg"
            size="square"
          />
        </div>
        <div className="app-icons">
          <ThumbnailCard
            title="contact"
            imgSrc="/assets/images/selfi1.jpeg"
            size="square"
          />
          <ThumbnailCard
            title="contact"
            imgSrc="/assets/images/selfi1.jpeg"
            size="square"
          />
          <ThumbnailCard
            title="contact"
            imgSrc="/assets/images/selfi1.jpeg"
            size="square"
          />
        </div>
      </div>
    </S.MainStyleContainer>
  );
};

export default Main;
