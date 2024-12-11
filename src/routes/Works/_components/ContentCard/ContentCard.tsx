import { OPTIMA_RX_DATA } from "api/data";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import * as S from "./style";
import ChatBubble from "components/common/ChatBubble/ChatBubble";
import { useEffect, useState } from "react";
import { ProjectItemType } from "types/app/type";
import React from "react";
import Codebox from "components/common/Codebox/Codebox";
const ContentCard = ({ value }: { value: string }) => {
  const [projectData, setProjectData] = useState<ProjectItemType>();
  useEffect(() => {
    switch (value) {
      case "optimaRx":
        setProjectData(OPTIMA_RX_DATA);
        break;

      default:
        break;
    }
  }, []);
  if (!projectData) return <></>;
  return (
    <S.ContentCardStyleContainer>
      {projectData.map((item, idx) => {
        return (
          <InView key={idx} threshold={0.7}>
            {({ inView, ref }) => (
              <div className="card-sec" ref={ref}>
                <div className={inView ? "show title" : "title"}>
                  <ChatBubble side="left" message={item.title} />
                </div>
                <ul>
                  {item.contents.map((cont, idx) => (
                    <InView threshold={0.7} key={idx}>
                      {({ inView: inView2, ref: ref2 }) => (
                        <li
                          className={inView2 ? "show" : ""}
                          ref={ref2}
                          key={idx}
                        >
                          {typeof cont === "string" ? (
                            // 1. 그냥 string일 때
                            <ChatBubble side="right" message={cont} />
                          ) : typeof cont === "object" ? (
                            typeof cont.value === "string" ? (
                              // 3. obj && value가 string일 때
                              <ChatBubble side="right" message={cont.value} />
                            ) : (
                              // 4. obj && value가 object일 때
                              Object.entries(cont).map(
                                ([key2, value2], idx) => (
                                  <React.Fragment key={key2}>
                                    {Array.isArray(value2) ? (
                                      <ChatBubble
                                        key={idx}
                                        side="right"
                                        title={key2}
                                        message={value2}
                                      />
                                    ) : key2 === "code" ? (
                                      <Codebox side="right" content={value2} />
                                    ) : (
                                      <ChatBubble
                                        side="right"
                                        title={key2}
                                        message={value2}
                                      />
                                    )}
                                  </React.Fragment>
                                )
                              )
                            )
                          ) : null}
                        </li>
                      )}
                    </InView>
                  ))}
                </ul>
              </div>
            )}
          </InView>
        );
      })}
    </S.ContentCardStyleContainer>
  );
};

export default ContentCard;
