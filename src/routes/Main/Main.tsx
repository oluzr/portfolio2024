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
            title="intro"
            imgSrc="/assets/images/selfi1.jpeg"
            size="square"
            linkTo="/intro"
          />
          <ThumbnailCard
            title="works"
            imgSrc="/assets/images/appicon9.png"
            size="square"
            linkTo="/works"
          />
          <ThumbnailCard
            title="archive"
            imgSrc="/assets/images/appicon5.png"
            size="square"
            linkTo="/intro"
          />
          <ThumbnailCard
            title="github"
            imgSrc="/assets/images/appicon17.png"
            size="square"
            linkTo="https://github.com/oluzr"
          />
        </div>
        <div className="app-icons">
          <ThumbnailCard
            title="optima app"
            imgSrc="/assets/images/appicon14.png"
            size="square"
            linkTo="/work/optimaApp"
          />
          <ThumbnailCard
            title="optima care"
            imgSrc="/assets/images/appicon10.png"
            size="square"
            linkTo="/work/optimacare"
          />
          <ThumbnailCard
            title="som"
            imgSrc="/assets/images/appicon15.png"
            size="square"
            linkTo="/work/som"
          />
          <ThumbnailCard
            title="usports"
            imgSrc="/assets/images/appicon16.png"
            size="square"
            linkTo="/work/usports"
          />
        </div>
      </div>
    </S.MainStyleContainer>
  );
};

export default Main;
