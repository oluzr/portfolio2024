import {
  LSP_DATA,
  OPTIMA_MOBILE_APP_DATA,
  OPTIMA_RX_DATA,
  OPTIMACARE_DATA,
} from "api/data";
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
        return;
      case "optimaApp":
        setProjectData(OPTIMA_MOBILE_APP_DATA);
        return;
      case "optimacare":
        setProjectData(OPTIMACARE_DATA);
        return;
      case "lsp":
        setProjectData(LSP_DATA);
        return;
      default:
        break;
    }
  }, []);
  if (!projectData) return <></>;
  return (
    <S.ContentCardStyleContainer>
      {projectData.map((item, idx) => {
        return (
          <InView key={idx} threshold={0.2}>
            {({ inView, ref }) => (
              <div className="card-sec" ref={ref}>
                <div className={inView ? "show title" : "title"}>
                  <ChatBubble side="left" message={item.title} />
                </div>
                <ul>
                  {item.contents.map((cont, idx) => (
                    <InView threshold={0.5} key={idx} triggerOnce={true}>
                      {({ inView: inView2, ref: ref2 }) => (
                        <li
                          className={inView2 ? "show" : ""}
                          ref={ref2}
                          key={idx}
                        >
                          {typeof cont === "string" ? (
                            // 1. 그냥 string일 때
                            <ChatBubble key={idx} side="right" message={cont} />
                          ) : typeof cont === "object" ? (
                            typeof cont.value === "string" ? (
                              // 3. obj && value가 string일 때
                              <ChatBubble
                                key={idx}
                                side="right"
                                message={cont.value}
                              />
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
                                      <Codebox
                                        key={idx}
                                        side="right"
                                        content={value2}
                                      />
                                    ) : key2 === "link" ? (
                                      <p>{value2}</p>
                                    ) : (
                                      <ChatBubble
                                        key={idx}
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
