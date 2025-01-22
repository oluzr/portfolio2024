import { constants } from "constants";
import * as S from "./style";
import { TIMELINE_DATA } from "api/data";
const Timeline = () => {
  return (
    <S.TimelineStyleContainer>
      <h3>Timeline</h3>
      <ul>
        {TIMELINE_DATA.map((timeline, idx) => (
          <li key={idx}>
            <h4>{timeline.year}</h4>
            <ol>
            {timeline.contents.map((cont, idx) => (
              <li key={idx}>
                <span>{cont.date}</span>
                <p>{cont.content}</p>
              </li>
            ))}
            </ol>
          </li>
        ))}
      </ul>
    </S.TimelineStyleContainer>
  );
};

export default Timeline;
