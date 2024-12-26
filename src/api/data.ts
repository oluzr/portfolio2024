import { PrjCardProp } from "components/common/PrjCard/interface";
import { ProjectItemType } from "types/app/type";

export const OPTIMA_RX_DATA: ProjectItemType = [
  {
    title: "ai 소분판매 관련 작업한 내용에 대해 설명해줘",
    contents: [
      "React로 개발 후 기존 레거시 ASP와 통합 방법을 고안했습니다.",
      "web.config 파일에 별도 rule 추가하는 등 라우팅 관련 오류를 처리했습니다",
      {
        code: `<rule name="React App Routes" stopProcessing="true">
          ㅤ<match url="^ai/.*" />
          ㅤㅤ<conditions logicalGrouping="MatchAll">
          ㅤㅤㅤ<add input="{REQUEST_FILENAME}" matchType="IsFile"/>
          ㅤㅤㅤ<add input="{REQUEST_FILENAME}" matchType="IsDirectory"/>
          ㅤㅤ</conditions>
          ㅤ<action type="Rewrite" url="/Ai/index.html" />
          </rule>
        `,
      },
    ],
  },
  {
    title: "전체 디렉토리 코드 분석 및 문서화 정리한 것에 대해 설명해줘",
    contents: [
      "1. 페이지 별 호출 저장 프로시저명, 매개변수 등 문서화 정리",
      "2. API 요청 (ajax) 코드 HTTP 타입 및 실행 내용 파악 및 정리",
      "문서화된 내용을 기반으로 이후 버그 수정 및 디자인 리뉴얼 작업 시 빠른 처리와 업무 효율을 높일 수 있었습니다 🥰",
    ],
  },
  {
    title: "SEO 최적화 작업 건에 대해 설명해줘",
    contents: ["상품 상세 페이지 meta keywords 작업"],
  },
];

export const OPTIMACARE_DATA: ProjectItemType = [
  {
    title: "주요 내용입니다.",
    contents: [
      {
        "인터랙티브 애니메이션": [
          "스크롤 기반 사용자 상호작용 인터랙티브 애니메이션 UI 구현",
          "메인 페이지에서 섹션 전환 시 백그라운드와 우측 카드 내용을 변경하는 스크롤 애니메이션 구현.",
          "세련되고 직관적인 인터랙션을 통해 사용자 경험을 향상시켰으며, 페이지 탐색의 몰입감을 높임,",
          "PC/Tablet/Mobile 반응형 css 작업",
        ],
      },
      {
        "주변 약국 찾기 기능 개발": [
          "서버 지도 리스트 API 연동 및 kakao map API 활용",
          "약국 리스트와 마커를 연동하여 클릭 시 상세 정보 제공 UI 구현",
          "지도 중심 좌표를 기준으로 서버에서 약국 데이터를 받아와 표시하며, 지도를 이동할 때마다 재검색 버튼을 통해 실시간으로 정보 업데이트",
        ],
      },
      {
        "관련 뉴스 보기 서버 API 연동": "필터링 기능 및 페이지네이션 구현",
      },
      { "가맹 접수 폼 유효성 검사 처리": [""] },
      {
        "제품 보기 리스트 및 제품 상세 API 연동":
          "필터링 기능 및 페이지네이션 구현",
      },
    ],
  },
];

export const LSP_DATA: ProjectItemType = [
  {
    title: "주요내용",
    contents: [
      "스크롤 기반 사용자 상호작용 인터랙티브 애니메이션 UI 구현",
      { "관련 뉴스 보기 서버 API 연동": "필터링 기능 및 페이지네이션 구현" },
      "PC/Tablet/Mobile 반응형 css 작업",
    ],
  },
];

export const OPTIMA_MOBILE_APP_DATA: ProjectItemType = [
  {
    title: `환경변수 관련 팀 개발환경 자동화 설정한 경험에 대해 말해줘`,
    contents: [
      `브랜치별 빌드 시 .env 파일의 환경변수가 자동으로 변경되도록 하여,
      기존의 바라보는 API 서버 수동 변경으로 인한 휴먼 에러 문제를 해결했습니다.`,
      "test 브랜치와 main 브랜치에 따른 빌드 분기 처리를 통해 안전하고 효율적인 개발 환경을 조성했습니다.",
      "관련 포스팅",
      {
        link: "https://velog.io/@oluzr/Vite-브랜치별-.env-환경변수-분기처리하기",
      },
    ],
  },
  {
    title: `리액트 웹뷰로 개발하며
    네이티브와의 원활한 연동을 위해 신경썼던 점에 대해 말해줘`,
    contents: [
      "네이티브와의 원활한 연동을 위해 로그인, 로그아웃, 알림 읽음 처리 등 앱 스킴 호출을 통한 상호작용을 구현했습니다. ",
      "특히 AOS의 물리적 백버튼과 웹 백버튼 동작을 일치시키기 위해 다양한 버그를 해결하며 중요한 경험을 얻었습니다. ",
      "전역 상태 관리를 활용해 백버튼의 분기 처리를 구현하고, 예를 들어 모달 팝업창이 열려 있을 경우 물리적 백버튼 클릭 시 팝업을 닫도록 하여 사용자가 의도하지 않게 페이지가 이동하지 않도록 했습니다. ",
      "이로써 사용자 경험을 개선하고, 유저가 더 직관적으로 앱을 탐색할 수 있도록 도왔습니다.",
      "이 경험을 통해 모든 페이지의 플로우를 깊이 이해하게 되었고, 앱의 전반적인 안정성과 사용성을 높이는 데 기여했습니다.",
    ],
  },
  {
    title: "주요 작업 내용 정리해줘",
    contents: [
      {
        "백버튼 처리": [
          "✅ 페이지 별 뒤로가기 분기처리",
          "✅ 페이지 별 특이사항 및 백버튼 경로 정리/ 간이 테스트 문서 작성",
          "✅ AOS 디바이스 물리적 백버튼과 연동",
          "ㅤ- 히스토리 스택이 없을 경우 분기 처리",
          "ㅤㅤㄴ 로그인, 메인 페이지 이외 앱 푸시를 통해 들어온 페이지는 히스토리 스택이 없어도 홈으로 back path 지정",
          "ㅤ- 모달 창 열려있을 시 뒤로 가기x → 모달 창 닫기 처리",
          "ㅤ- 로그인, 메인에서 뒤로가기 누를 시 네이티브에서 앱 종료 처리",
        ],
      },
      {
        "모드 별 빌드 환경 구축": [
          "✅ test, main 브랜치 각각 빌드 시 환경 변수 분기 처리",
          "ㅤ- 휴먼 버그 최소화",
        ],
      },
      {
        "네이티브와의 연동을 위한 app scheme 호출 처리": [
          "✅ 로그인, 로그아웃 외 알림 읽기 등 특정 이벤트 발생 시 네이티브 스킴 호출",
          "✅ 유저 인증 여부에 따른 파라미터 분기 처리",
        ],
      },
      {
        "유저 접속 디바이스 및 앱 버전 체크": [
          "✅ 유저 디바이스 종류 체크 (userAgent)",
          "✅ 네이티브 단에서 추가한 앱 버전 확인(userAgent)",
          "ㅤ- 업데이트가 필요한 구버전 사용 유저일 시 업데이트 권장 alert 띄움 처리",
        ],
      },
      {
        "토큰 만료 시 refresh token 발급 후 교체 처리": [
          "✅ axios interceptor 활용",
          "✅ 401 에러 시 (토큰 만료) 로그아웃 처리가 아닌 response interceptor 이용하여 새로운 토큰 발급받은 GET refresh token API 서버에 요청 (만료된 토큰 값 header  Authorization 에 포함하여 전송)",
          "✅ 새로 발급받은 토큰으로 header Authorization 토큰 교체",
          "✅ 401 에러 응답 받았던 API  요청들 차례대로 재요청 처리",
        ],
      },
    ],
  },
  {
    title: "단독으로 작업한 페이지들에 대해 자세하게 설명해줘",
    contents: [
      {
        PB상품: [
          "✅ 상품 리스트 (무한 스크롤) 캐싱 처리",
          "✅ 상품 목록에서 상세로 이동 후 뒤로 가기로 넘어올 시 상품 리스트 데이터 및 스크롤 위치 유지",
          "✅ 상품 아이템 스켈레톤 처리",
          "✅ 상품 장바구니 담기 및 찜하기 기능",
          "ㅤㄴ useMutation 낙관적 UI 업데이트 처리",
        ],
      },
      {
        "카테고리 별 상품(메인,목록 페이지)": "위 PB상품 페이지와 동일",
      },
      {
        "이벤트 글 공유 관련 (앱 설치 확인)": [
          "✅ 공유된 이벤트 글 클릭 시 로그인 여부 먼저 판단",
          "ㅤ1. 로그인O : 2번으로",
          "ㅤ2. 로그인X ",
          "ㅤㅤ2-1. 해당 공유글 주소가 query param으로 포함된 로그인 페이지로 리다이렉트",
          "ㅤㅤ2-2. 로그인 성공 시 2번",
          "✅ 앱 설치 확인 페이지",
          "ㅤ1. 공유 글 링크 클릭 시 앱 설치 확인 페이지로 이동 → 네이티브 앱 스키마 호출",
          "ㅤ2. 일정 시간 내 반응이 없을 경우 앱 미설치 유저로 간주, 앱 스토어로 리다이렉트 처리",
        ],
      },
      {
        "약사 후기 관련 (목록,상세)": [
          " ✅ 목록P",
          "ㅤ- 약사 후기 검색 기능 (검색어 타입 : ALL/증상/상품명)",
          "ㅤㅤㄴ 약사 후기 (검색 결과 포함) 리스트 무한 스크롤",
          "ㅤㅤㄴ 상세 페이지 이동 시 검색 여부 판단 → 상세에서 다시 목록으로 올 시 검색어, 타입 등 결과 데이터 유지",
          "✅ 상세P",
          "ㅤ- 서버로부터 전달받는 콘텐츠 타입에 따른 분기처리",
        ],
      },
      {
        마이페이지: [
          "✅ 내 정보 수정",
          "ㅤ- 서버 API (PUT)는 비밀번호 변경, 휴대전화 변경, 주소 변경, 닉네임 변경으로 구성",
          "ㅤㅤㄴ 각 입력 필드 상태 값 체크하여 분기 처리",
          "ㅤㅤㄴ touched 여부 (유저가 변경을 시도했는지)등 체크",
          "ㅤ- 주소 입력 및 검색 기능",
          "ㅤㅤㅤㄴreact-daum-postcode",
          "✅ 프로필 이미지 수정",
          "ㅤ- 이미지 Crop 기능",
          "ㅤ- 이미지  리사이징 처리",
        ],
      },
      {
        "주문 내역 관련 (목록,상세)": [
          "주문 내역 리스트 무한 스크롤",
          "재주문 기능",
        ],
      },
      {
        "이벤트 (목록, 상세)": [
          "✅ 이벤트 목록P",
          "ㅤ- 프로모션/공동구매/약사톡 총 3개의 탭으로 구성",
          "ㅤㅤㄴ프로모션, 공동구매 페이지네이션 형식으로 목록 구성",
          "ㅤㅤㄴ 약사톡 무한 스크롤링 구현",
          "✅ 이벤트 상세P",
          "ㅤ- 글 공유하기 기능 (카카오 공유, 단순 클립보드 복사)",
          "ㅤ- 댓글, 대댓글 기능 개발",
          "ㅤㅤㄴ 수정, 삭제 기능 포함",
        ],
      },
      {
        "알림 내역": [
          "✅ 알림 리스트 무한 스크롤 구현",
          "✅ 알림 내역 조회 API 호출 성공 시",
          "ㅤ- 네이티브 앱 스킴 호출 (APP 아이콘 알림 뱃지 초기화 처리)",
        ],
      },
    ],
  },
  {
    title: "그 외에 기능 개발 및 유지보수 진행한 페이지에 대해 설명해줘",
    contents: [
      {
        회원가입: [
          "✅ 약사 면허증 이미지 업로드 UI 및 기능 개발",
          "✅ 주소 입력 및 검색 UI 및 기능 개발",
          "ㅤ- react-daum-postcode (주소 검색)",
        ],
      },
      {
        로그인: [
          "✅ 로그인 시 앱 푸시 스킴 호출 처리",
          "ㅤ- 인증된 유저 여부에 따라 sendbird 관련 데이터 쿼리에 포함/비포함 처리",
          "✅ 카카오 공유하기에서 넘어온 경우",
          "ㅤ- 비로그인 유저의 경우 공유 페이지로 이동 대신 공유 페이지 주소가 url쿼리 파라미터로 포함된 로그인 페이지로 리다이렉트",
          "ㅤ- 로그인 후 origin path (공유글) 로 리다이렉트 처리",
        ],
      },
    ],
  },
  {
    title: `공통 컴포넌트 작업한 것 알려줘
  (단독 작업)`,
    contents: [
      {
        백버튼: [
          "✅ location path에 따른 뒤로 가기 분기 처리 작업",
          "✅ AOS 디바이스 물리적 백버튼과 바라보는 path 통일 작업",
          "ㅤ- 모달창이 열려있을 경우 뒤로가기X 모달창 닫기",
          "ㅤ- 로그인/홈 페이지에서 뒤로가기 누를 시 네이티브에서 앱 종료 처리",
          "ㅤ- 그 외 페이지에서는 히스토리 스택이 없어도 홈 페이지로 이동되게 프론트 단에서 처리",
        ],
      },
      {
        상단: [
          "✅ 여러 타입의 상단 디자인을 하나의 Header.tsx 로 관리",
          "✅ location path별 분기 처리 진행",
          "✅ 계절별 이벤트 로고 적용 → 눈 내리는 애니메이션 효과 등 (css animation)",
          "✅ 백버튼 적용",
        ],
      },
      {
        "하단 아이콘 바": [
          "✅ 홈, 이벤트P, 약사톡P, 찜하기P, 마이페이지P 로 이동할 수 있는 아이콘이 포함되어 있으며",
          "✅ 약사톡 버튼의 경우 유저의 권한 여부를 체크하여 활성/비활성화 분기 처리 진행 (UI 포함)",
          "✅ 약사톡 진입 시 체크",
          "ㅤ- 인증 약사 여부 체크",
          "ㅤㅤㄴ 서버에서 내려주는 identified 데이터로 확인",
          "ㅤ- 접속 기기가 모바일 기기인지 체크",
          "ㅤㅤㄴ navigator.userAgent 값으로 기종 체크",
          "ㅤ- 앱 버전 체크",
          "ㅤㅤㄴ 약사톡 기능이 추가 개발된 건이라 기존 버전 사용 유저는 신규 버전으로 업데이트 하라는 알림 노출",
          "ㅤㅤㄴ 네이티브 단에서 userAgent에 포함시킨 앱 버전 체크",
          "ㅤㅤㄴ 이번 버전일 경우 업데이트 권장 alert 노출 (동의 시 앱스토어 이동 처리)",
        ],
      },
      {
        "댓글/대댓글": [
          "✅ 작성, 삭제, 수정 API 연동 (PUT/ DELETE/ POST)",
          "✅ 비밀 댓글 여부 / 볼 수 있는지 여부 / 내 댓글인지 여부 데이터 이용하여 유저에 따른 노출 분기 처리",
          "ㅤ- ex) 1. 작성자, 2. (답글일 경우) 원댓글 작성자 3. 원글 작성자일 경우에는 비밀 댓글도 볼 수 있게 처리",
          "✅ 내 댓글일 경우에만 수정 및 삭제 UI 적용",
        ],
      },
      {
        "크롭 모달창": [
          "✅ react-cropper 라이브러리 활용",
          "ㅤ- prop으로 선택된 이미지 전달",
          "ㅤ- 해당 컴포넌트에서 크롭 처리 후 크롭된 이미지 반환 (blob, dataURL 두 형식으로 전달)",
          "ㅤㅤㄴ blob→ 서버 전달 용 (File)",
          "ㅤㅤㄴ dataURL→ UI에 사용하기 위함",
        ],
      },
      {
        "공통 이미지 태그": [
          "✅img 태그 onError 핸들링 처리",
          "✅onError 핸들링 처리한 image 공통 컴포넌트 생성 (코드 중복 방지)",
        ],
      },
      {
        code: `import { ImageProp } from './interface';
import { handleErrorImage } from 'utils/imageFallback';
const Image = ({ src, alt = 'image', onError }: ImageProp) => {
ㅤreturn (
ㅤㅤ<img src={src} alt={alt} onError={onError ? onError : handleErrorImage} />
ㅤ);
};
// onError 핸들러를 prop 으로 전달하지 않을경우 기본 에러 이미지로 대체하는 핸들러 할당 

export default Image;`,
      },
      {
        "그 외": [
          "✅ Date picker",
          "✅ 페이지네이션",
          "✅ 스켈레톤 UI : 아이템, 카드 등 여러 타입의 레이아웃 개발",
          "✅ Toast 메세지 UI : 라이브러리가 아닌 전역 상태 스토어를 이용한 자체 toast ui 개발",
          "✅ 하단",
          "ㅤ",
          "등을 개발하였습니다 🥰",
        ],
      },
    ],
  },
];

export const SOM_DATA: ProjectItemType = [
  {
    title: "알림 기능 구현에 대해 설명해줘",
    contents: [
      `서버와 SSE 단방향 연결 통신을 맺어 알림이 발생했을 경우 실시간 우측 아이콘 상태 변동
클릭 시 서버로부터 전달받은 url로 라우팅`,
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/27c0a10c-c163-4224-ad2d-deaa57f94aa7/%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%85%E1%85%B5%E1%86%B71.gif?table=block&id=85a43599-8e47-430e-b7e3-b76fda6ed1d3&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=b5Un79SGzQa27j7BvpF8Wt1mjpXKH3UV0NHcSNTetX4&downloadName=%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%85%E1%85%B5%E1%86%B71.gif",
      },
    ],
  },
  {
    title: "react-query, useMutation 을 이용한 데이터 캐싱 및 업데이트 반영",
    contents: [
      "좋아요, 팔로우, 댓글 작성 및 삭제 시 기존 query 캐싱 초기화",
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/9fa9739a-7512-402f-b366-a31c6d0ecde6/%E1%84%91%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A9%E1%84%8B%E1%85%AE.gif?table=block&id=d502ef64-9543-49be-8c96-dfdd49a0959e&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=uhGwrCbehZpKZuf6GRQ9qMinB2xygzAPdJV-vtCoYzI&downloadName=%E1%84%91%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A9%E1%84%8B%E1%85%AE.gif",
      },
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/5959304b-e60c-4c73-9b01-3aa720802ce0/%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AD.gif?table=block&id=469efacf-7df1-47a9-a3c3-eaff05e66887&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=k62cof516NxwCpLmknm9ASAExnFqx3EArIzBLll9V3Q&downloadName=%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AD.gif",
      },
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/addb56e4-7686-44f5-a5d2-f7342685ac38/%E1%84%83%E1%85%A2%E1%86%BA%E1%84%80%E1%85%B3%E1%86%AF.gif?table=block&id=718c54d9-a72f-47ff-b15d-d9e6d48684d1&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=imqpRcm51E6uoyxD7o2NVbG_avdjbrBq0EqqqBE5E_s&downloadName=%E1%84%83%E1%85%A2%E1%86%BA%E1%84%80%E1%85%B3%E1%86%AF.gif",
      },
      "react-query infinite Query 를 이용한 무한 스크롤 기능 구현",
      "search param 을 이용한 게시글 필터링 작업",
    ],
  },
  {
    title: "필터링 검색 구현 관련해 작업했던 것들 알려줘",
    contents: [
      "블로그 페이지 내 필터링 (정렬 / 태그 / 검색어)",
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/5d76d2b3-64c1-4f97-8671-da0c105de273/%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%91%E1%85%B5%E1%86%AF%E1%84%90%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC.gif?table=block&id=b1a75e2a-ab52-4bad-a78d-8b588cc096ae&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=tXXCcoVM5hGY__2e-8qQSMnYtfUcR_hY6e6bWOtyqFM&downloadName=%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%91%E1%85%B5%E1%86%AF%E1%84%90%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC.gif",
      },
      "메인 페이지 내 필터링 (조회순, 최신순 정렬)",
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/8e5cfc9a-caed-4c11-b06d-844e5900b3e9/%E1%84%92%E1%85%A9%E1%86%B7.gif?table=block&id=282204a8-5a8c-4c89-8761-e172337d3165&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=LlDMWT5pS-0fnz2aLOJhoOzyVt3OdTXA3Xoe0jPB6oA&downloadName=%E1%84%92%E1%85%A9%E1%86%B7.gif",
      },
      "검색 페이지 내 검색 기능 (타입: 제목 및 소개 / 내용 / 태그)",
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/6b615a43-5362-4617-99ee-1016b8f908ee/%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8.gif?table=block&id=ab251e8e-636c-428d-9832-f5ede7e80752&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=BN7MNuX9En2HSfUc-TeotJp02u9uxDf_yIL8UV0Pk4I&downloadName=%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8.gif",
      },
    ],
  },
  {
    title: "axios Interceptor 을 이용한 각종 API 요청 및 응답 핸들링 ",
    contents: [
      "(에러 발생 시) 클라이언트 측에 에러 메세지를 띄워줘야 하는 에러 코드는 따로 배열로 구분 / 서버로부터 응답받는 에러 메세지 (error객체 내부) 출력",
      "유저 토큰(accessToken) 만료 시 refreshToken을 이용한 accessToken 재발급 및 요청 처리 등",
      "관련 포스팅",
      {
        link: "https://velog.io/@oluzr/axios-axios-interceptor-이용하여-errorCode-띄우기",
      },
    ],
  },
  {
    title: "react-quill 텍스트 라이브러리 활용하여 글 작성 및 수정",
    contents: [
      "하나의 text edit 컴포넌트로 글 최초 작성과 수정 진행. 글, 썸네일에 이용되는 이미지의 경우 파일 업로드 시 서버로 post 요청 후 반환받는 url 로 이미지 노출",
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/1c2fbc00-2eae-4676-be5a-57b81e0465c9/%E1%84%80%E1%85%B3%E1%86%AF1.gif?table=block&id=a3a6b862-d110-48e2-8eee-16d8f5e31b10&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=jCYb55JzlFz14sKm4vf26-JtxcHs-C87HES2-OTre8A&downloadName=%E1%84%80%E1%85%B3%E1%86%AF1.gif",
      },
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/cbcf09f7-0f32-46a8-a813-d60f0158cb20/%E1%84%80%E1%85%B3%E1%86%AF2.gif?table=block&id=bb5d7e6a-f556-4639-a00a-d36d156b0c82&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=sYrPLSAlfj2s2TKKihQ4hlk1F6Uu_UIUjNtcRMRaoaQ&downloadName=%E1%84%80%E1%85%B3%E1%86%AF2.gif",
      },
      `(수정 시) prop으로 글 데이터 전달
(초기 작성 시) prop으로 전달받는 값이 없을 경우 초기 작성 상태라 치부`,
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/522c5023-8227-46f0-b9f7-7795caca7471/%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC1.gif?table=block&id=f093bb5b-bca7-4958-b685-7ef0e6b4ea64&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=Wxl_1hz09K7UsbvQdy5RMbMzwzcG7Rt3S3gYaX3eWrI&downloadName=%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC1.gif",
      },
    ],
  },
  {
    title: "react-hook-form 활용",
    contents: [
      "실시간 유효성 검사에 따른 에러 메세지 출력",
      "사전 유효성 검사를 거쳐 무분별한 서버 API 요청 방지",
      "관련 포스팅",
      {
        link: "https://velog.io/@oluzr/react-hook-form-유효성-검사에-따른-조건부-클래스-작업-clsx-useForm",
      },
    ],
  },
  {
    title: "반응형UI 및 테마 적용 관련해 작업한 것 알려줘",
    contents: [
      "tailwind css, daisyui 를 활용한 각종 테마 레이아웃 작업",
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/74b82a7b-fdd8-4605-85e7-7ae0578c2ad1/%E1%84%90%E1%85%A6%E1%84%86%E1%85%A1.gif?table=block&id=21165a4e-a4e1-493e-869a-bcad3bad2bd6&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=ISfFjCaITHZA_ZA0QsLIf5oyfsu0oTZxTgSIqbXYU_Y&downloadName=%E1%84%90%E1%85%A6%E1%84%86%E1%85%A1.gif",
      },

      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/df7faea2-b669-4995-af66-0de65c25d6e1/%E1%84%90%E1%85%A6%E1%84%86%E1%85%A12.gif?table=block&id=0e54f5a0-4395-4665-935f-16e8a95189e6&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=ws_Si20un4qPIBGPaGQCd8lZwsUwOhPzBB-_lq6wnNw&downloadName=%E1%84%90%E1%85%A6%E1%84%86%E1%85%A12.gif",
      },
      "반응형 레이아웃 작업 진행 (pc, tablet, mobile)",
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/8a6da988-3609-4be2-8081-1721447ae9f6/%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC1.gif?table=block&id=29bf9b01-ab85-418a-b9b3-7167eec02847&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=fwvoEVw2dsjXbwk6w1NnqSKu9ABaN4au63A-mifsT98&downloadName=%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC1.gif",
      },
      {
        img: "https://file.notion.so/f/f/d0693a92-488b-47fb-874c-40973d6a3a97/a1f13c00-e617-4338-9979-30842b2e809c/%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC3.gif?table=block&id=2a1b058d-0e4c-4a30-a07e-7da90505c1e8&spaceId=d0693a92-488b-47fb-874c-40973d6a3a97&expirationTimestamp=1735286400000&signature=NdtkXNALfKJC3SP0JdlgjtW5uzWxW0rlL11MEfGxIc0&downloadName=%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC3.gif",
      },
    ],
  },
];

export const PRJ_CARDS_DATA: PrjCardProp[] = [
  {
    title: "옵티마 약사몰 모바일 APP",
    startDate: "2024/07",
    endDate: "2024/10",
    linkTo:
      "https://play.google.com/store/apps/details?id=com.lspworld.optimapharmn&pli=1",
    subTitle: "옵티마 약사몰 모바일 앱 (react 기반 웹 뷰)",
    contribution: 60,
    participants: ["front", "front", "ios", "aos"],
    path: "/works/optimaApp",
    keywords: [
      "📅 2024.07~2024.10",
      "✔️ React 기반 웹뷰 개발",
      "✔️ 프론트 개발 담당",
      "✔️ 기여도 50% (프론트 2인 진행)",
    ],
  },
  {
    title: "옵티마 RX",
    // startDate: "2024/07",
    // endDate: "2024/10",
    linkTo:
      "https://play.google.com/store/apps/details?id=com.lspworld.optimapharmn&pli=1",
    subTitle: "기존 ASP 사이트 유지보수 및 신규 리액트 페이지 개발",
    contribution: 60,
    participants: ["front"],
    path: "/works/optimaRx",
    keywords: [
      "기존 ASP 사이트 유지보수 및 신규 리액트 페이지 개발",
      "✔️ AI 소분판매 페이지 리액트 개발",
      "✔️ SEO 최적화 작업",
      "✔️ 전체 페이지 실행 코드 분석 및 정리",
    ],
  },
  {
    title: "옵티마 가맹 웹사이트 리뉴얼 (pc/mo)",
    startDate: "2024/07",
    endDate: "2024/07",
    linkTo: "https://www.optimacare.co.kr/",
    subTitle: "옵티마 가맹 웹 사이트 리뉴얼",
    contribution: 100,
    participants: ["front", "back"],
    path: "/works/optimacare",
    keywords: [
      "📅 2024.07~2024.07",
      "✔️ 프론트 개발 전담",
      "✔️ 반응형 제작 (PC, tablet, mobile)",
    ],
    feedback: [
      "🗣️ 옵티마 사이트 리뉴얼을 통해 브랜드의 신뢰성과 전문성을 대폭 강화했습니다.",
      "🗣️ 사용자 중심의 직관적이고 세련된 인터페이스를 구현함으로써 모든 디바이스에서 일관되고 매끄러운 사용자 경험을 위해 노력하였습니다 💪🏻",
    ],
  },
  {
    title: "LSP 자사 홈페이지 리뉴얼 (pc/mo)",
    startDate: "2024/06",
    endDate: "2024/07",
    linkTo: "http://www.lspworld.com/",
    subTitle: "LSP 자사 웹 사이트 리뉴얼",
    contribution: 100,
    participants: ["front", "back"],
    path: "/works/lsp",
    keywords: [
      "📅 2024.06~2024.07",
      "✔️ 프론트 개발 전담",
      "✔️ 반응형 제작 (PC, tablet, mobile)",
    ],
    feedback: [
      "🗣️ 자사 사이트 리뉴얼을 통해 다양한 애니메이션과 일관되고 매끄러운 사용자 경험을 고려한 인터페이스를 구현하며 브랜드의 메시지를 명확하게 전달하기 위해 노력하였습니다",
    ],
  },
];
export const SIDEPRJ_CARDS_DATE: PrjCardProp[] = [
  {
    title: "SOM",
    startDate: "2024/01",
    endDate: "2024/02",
    linkTo: "https://github.com/LeeAndRyu",
    subTitle:
      "블로그 서비스 앱으로 쉽고 간편한 블로그 개설을 통해 유저 간 팔로우, 좋아요, 댓글을 주고받을 수 있습니다.",
    contribution: 100,
    participants: ["front", "back"],
    path: "/works/som",
    keywords: [
      "📅 2024.01~2024.02",
      "✔️ 프론트 개발 전담",
      "✔️ SSE 통신을 활용한 실시간 알림 기능",
    ],
    feedback: [
      `🗣️ USports 프로젝트를 끝내자마자 바로 진행됐던 SOM! 
텍스트 에디터 라이브러리를 다뤄보고 싶어 블로그로 가닥을 잡고, 여러 보기들 중 비록 마크다운 형식은 아니지만 그래도 가장 안정적이고 이미지 리사이징이 가능한 react-quill 라이브러리를 사용했다. 
함께 협력한 백엔드 개발자분과는 USports 에서 한 번 호흡을 맞춰봐서인지 원활한 진행 덕에 예정보다 일찍 기능 개발을 마무리 짓고 반응형 작업과 세부적인 디테일 작업을 포함하여 전반적인 완성도를 높일 수 있었다. 비로그인 상태일 때도 마이페이지를 제외한 모든 페이지에 접근이 가능한 서비스인 만큼, 로그인/비로그인 상태를 판별하여 서비스 기능 사용 권한과 메뉴 보기에 차별화 두는 작업을 진행했다. daisyui를 활용하여 여러 가지 테마를 선택할 수 있게 작업하고 로그인 페이지의 백그라운드에는 spline 3d 컴포넌트를 활용하는 등 디자인적으로 다양한 시도를 해볼 수 있어 좋았고 또 그만큼 디자인 완성도도 높일 수 있어 개인적으로 정말 즐거운 프로젝트였다`,
    ],
  },
  {
    title: "usports",
    startDate: "2023/11",
    endDate: "2024/01",
    linkTo:
      "https://helloworldusports.notion.site/USPORTS-SNS-c10174ce56d7451094935fc9d4b4765f",
    subTitle: `각자의 운동 기록 을 공유할 수 있고, 같이 운동할 사람들을 모집할 수 있습니다.`,
    contribution: 99,
    participants: ["front", "back", "back", "back"],
    path: "/works/usports",
    keywords: [
      "📅 2023.11~2024.01",
      "✔️ 프론트 개발 전담",
      "✔️ 운동 전문 SNS",
      "✔️ Next.js 14버전 (app router) 개발",
    ],
    feedback: [
      `
       🗣️ 프로젝트를 하면서 느꼈던 것은 프론트엔드와 백엔드 모두 각자 포지션에서 역할의 최대치를 수행했을 때 그만큼 협업 과정이 수월해지고 프로젝트 완성도가 올라간다는 것이다. 물론 우리 모두 아직은 아마추어들이지만, 팀원들이 전부 열정적이고 적극적으로 임하는 것을 보고 이 프로젝트에서 정말 많은 동기부여를 얻고 가는 것 같다. 
 프론트엔드 인원 관련 이슈로 인해 프로젝트 중후반부터는 혼자 프론트를 전담하게 됐는데, 나머지 팀원분들이 그런 상황들을 많이 고려해 최대한 배려를 해주셔서 감사했다. 비록 개발 작업 진도가 늦어졌지만 조급한 마음에 엉성하게 짜맞춰 끝내는 것 보단, 모두가 차분하게 프로젝트에 집중하면서 완성도를 높이기 위해 노력하는 것이 느껴졌다. 
 데모데이 이후 추가로 2주간 모여서 못다한 기능 개발을 진행하게 됐는데, 지금껏 한 번도 다뤄보지 않았던 기능들을 배워 볼 생각에 설렌다. 하나도 힘들지 않았다면 거짓말이겠지만, 그걸 상쇄할 만큼 정말 뿌듯하고 즐거운 프로젝트였다! `,
    ],
  },
];
