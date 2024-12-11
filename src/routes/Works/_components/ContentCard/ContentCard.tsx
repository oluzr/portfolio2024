import { OPTIMA_RX_DATA } from "api/data";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import * as S from "./style";
const ContentCard = () => {
  return (
    <S.ContentCardStyleContainer>
      {OPTIMA_RX_DATA.map((item, idx) => {
        return (
          <InView key={idx} threshold={0.7}>
            {({ inView, ref }) => (
              <div className="card-sec">
                <div className={inView ? "show title" : "title"}>
                  <p>{item.title}</p>
                  <Link to={"/aiService"}>
                    더 알아보기<span></span>
                  </Link>
                </div>
                <ul>
                  {item.contents.map((item, idx) => (
                    <InView threshold={0.7} key={idx}>
                      {({ inView: inView2, ref: ref2 }) => (
                        <li
                          className={inView2 ? "show" : ""}
                          ref={ref2}
                          key={idx}
                        >
                          {typeof item === "string" ? <p>{item}</p> : <></>}
                        </li>
                      )}
                    </InView>
                  ))}
                </ul>
              </div>
            )}
            {/*  {item.contents.map((content, idx) => (
                <InView key={idx} threshold={0.7}></InView>
              ))} */}
          </InView>
        );
      })}
    </S.ContentCardStyleContainer>
  );
};

export default ContentCard;
