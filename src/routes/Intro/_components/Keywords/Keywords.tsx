import * as S from "./style";
const Keywords = () => {
  return (
    <S.KeywordsStyleContainer>
      <ul>
        {keywordsContents.map((cont, idx) => (
          <li key={idx}>
            <div className="index">
              <span>{idx+1}</span>
            </div>
            <div className="cont">
              <h5>{cont.title}</h5>
              <p>{cont.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </S.KeywordsStyleContainer>
  );
};

export default Keywords;

const keywordsContents = [
  {
    title: "타이틀1",
    content: "블라블라~ 어쩌구저쩌구",
  },
  {
    title: "타이틀2",
    content: "블라블라~ 어쩌구저쩌구",
  },
  {
    title: "타이틀3",
    content: "블라블라~ 어쩌구저쩌구",
  },
  {
    title: "타이틀4",
    content: "블라블라~ 어쩌구저쩌구",
  },
];
