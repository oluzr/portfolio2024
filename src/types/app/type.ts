export type ProjectItemType = { title: string; contents: ProjectContentType }[];
export type ProjectContentType = (Record<string, string | string[]> | string)[];

/* <li
className={inView2 ? "show" : ""}
ref={ref2}
key={idx}
>
{typeof item === "string" ? ( 
  // 1. 그냥 string 일때
  <ChatBubble side="right" message={item} />
) : item && typeof item === "object" ? (
    // 2. 객체이고 value도 string일때 
  Object.entries(item).map(([key, value]) =>
    key !== "code" ? (
      <ChatBubble side="right" message={value as string} />
    ) : (
      <Codebox
        side="right"
        content={value as string}
      />
    )
  )
) : (
  <></>
)}
</li> */

/* 

{typeof cont === "string" ? (
  // 1. 그냥 string 일때
  <ChatBubble side="right" message={cont} />
) : // 2. obj && value 가 배열일 떄
typeof cont === "object" &&
  Array.isArray(cont.value) ? (
  cont.value.map((cont) => (
    <ChatBubble side="left" message={cont} />
  )) // 3. obj && value 가 string일 때 (key code 포함)
) : typeof cont === "object" &&
  typeof cont.value === "string" ? (
  <>
    <ChatBubble side="right" message={cont.value} />
  </>
) : (
  // 4. obj && value가 object일 때
  typeof cont === "object" &&
  Object.entries(cont).map(([key2, value2], idx) => (
    <>
      {key2 === "code" ? (
        <Codebox side="right" content={value2} />
      ) : (
        <ChatBubble
          side="right"
          title={key2}
          message={value2}
        />
      )}
    </>
  ))
)} */