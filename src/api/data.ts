import { PrjCardProp } from "components/common/PrjCard/interface";
import { ProjectItemType, TimelineType } from "types/app/type";

// projects
export const OPTIMA_RX_DATA: ProjectItemType = [
  {
    title: "옵티마 RX에 대해 간략하게 설명해줘",
    contents: [
      "옵티마RX(구 스킨RX)는 다양한 뷰티 및 생활용품을 제공하는 온라인 쇼핑몰으로 ASP 언어로 개발된 구 쇼핑몰 사이트입니다.",
    ],
  },
  {
    title: "담당한 업무 내용에 대해 말해줘",
    contents: [
      "첫째로 기존 ASP로 작성된 코드를 분석하고 문서화를 통해 팀의 업무 효율성을 극대화시켰습니다.",
      "LSP와 Skin RX의 합병 과정에서 인수인계 문서가 부족한 상태였기에, 기존 ASP 코드 및 기능에 대한 문서화 작업을 주도하여 사이트 이해도를 높이고 후속 작업 효율성을 극대화시키기 위해 노력했습니다",
      "뿐만 아니라 디자인 리뉴얼 및 버그 수정을 통해 웹사이트의 안정성과 기능 향상에 기여하였습니다.",
      "둘째로 SEO 최적화를 통해 검색 엔진 결과에서의 가시성을 증가시켰습니다. 메타 키워드 태그 개선을 통한 SEO 최적화를 담당하였습니다.",
      "셋째로 신규 서비스인 'AI 소분판매 기능' 을 위한 단독 페이지 개발에 참여했습니다. 해당 페이지의 경우에는 리액트로 개발되었으며 기존 asp 코드와 통합하는 과정에서 주도적으로 방법을 고안하였습니다.",
    ],
  },
  {
    title: "ai 소분판매 관련 작업한 내용에 대해 더 자세히 말해줘",
    contents: [
      "신규 서비스 론칭을 위해 'AI 소분판매 기능' 을 다루는 React 페이지를 개발 후 기존 레거시 ASP 코드와 통합하였습니다.",
      "그 과정에서 주도적으로 방법을 고안하였고 기존 옵티마RX 유저 정보를 신규 개발된 페이지에서 활용하기 위하여 서버 개발자와의 원활한 커뮤니케이션을 통해 사이트 안정성을 증대시켰습니다.",
      "web.config 파일에 별도 rule 추가하는 등 SPA 페이지 라우팅 오류를 처리했습니다",
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
      "각 페이지별로 호출하는 저장 프로시저명과 매개변수를 정리하여 문서화했습니다.",
      "또한, API 요청(ajax) 코드를 확인하여 HTTP 타입과 실행 내용을 파악하고 정리했습니다.",
      "이렇게 문서화된 내용을 바탕으로 이후 버그 수정이나 디자인 리뉴얼 작업 시 훨씬 빠르게 처리할 수 있었고, 업무 효율도 크게 향상되었습니다. 🥰",
    ],
  },
];

export const OPTIMACARE_DATA: ProjectItemType = [
  {
    title: "주요 작업 내용 정리해줘.",
    contents: [
      {
        "인터랙티브 애니메이션": [
          "✔️ 스크롤 기반 사용자 상호작용 인터랙티브 애니메이션 UI 구현",
          "✔️ 메인 페이지에서 섹션 전환 시 백그라운드와 우측 카드 내용을 변경하는 스크롤 애니메이션 구현.",
          "✔️ 세련되고 직관적인 인터랙션을 통해 사용자 경험을 향상시켰으며, 페이지 탐색의 몰입감을 높임,",
          "✔️ PC/Tablet/Mobile 반응형 css 작업",
        ],
      },
      {
        img: "/assets/gif/opcare-scroll.gif",
      },
      {
        "주변 약국 찾기 기능 개발": [
          "✔️ 서버 지도 리스트 API 연동 및 kakao map API 활용",
          "✔️ 약국 리스트와 마커를 연동하여 클릭 시 상세 정보 제공 UI 구현",
          "✔️ 지도 중심 좌표를 기준으로 서버에서 약국 데이터를 받아와 표시하며, 지도를 이동할 때마다 재검색 버튼을 통해 실시간으로 정보 업데이트",
        ],
      },
      {
        img: "/assets/gif/opcare-map.gif",
      },
      {
        "관련 뉴스 보기 서버 API 연동": [
          "✔️ 필터링 기능 및 페이지네이션 UI 구현",
          "✔️ 마우스 호버 시 카카오 공유 및 링크 복사 아이콘 노출",
          "✔️ 카카오 공유하기 기능",
        ],
      },
      {
        img: "/assets/gif/opcare-news.gif",
      },
      // { "가맹 접수 폼 유효성 검사 처리": [""] },
      {
        "제품 보기 리스트 및 제품 상세 ": [
          "✔️ 제품 리스트 필터링 검색 및 제품 상세 정보 API 연동",
          "✔️ 필터링 기능 및 목록 페이지네이션 UI 구현",
        ],
      },
      {
        img: "/assets/gif/opcare-item.gif",
      },
      "그 외 가맹 접수 폼 유효성 검사 처리와, 반응형 CSS 작업 등 프론트엔드 개발 전담하였습니다.",
    ],
  },
];

export const LSP_DATA: ProjectItemType = [
  {
    title: "주요 작업 내용 정리해줘.",
    contents: [
      "자사 사이트 리뉴얼을 통해 일관되고 매끄러운 사용자 경험을 고려한 인터페이스를 구현하며 브랜드의 메시지를 명확하게 전달하기 위해 노력하였습니다.",
      "웹디자이너와 백엔드 개발자와 긴밀한 협업을 통해 전체 프로젝트의 완성도를 높이기 위해 세심한 노력을 기울였습니다",
      "스크롤 기반 사용자 상호작용 인터랙티브 애니메이션 UI 구현 및 PC/Tablet/Mobile 반응형 CSS 작업 진행하였습니다.",
      { "관련 뉴스 보기 서버 API 연동": "필터링 기능 및 페이지네이션 구현" },
      {
        img: "/assets/gif/lsp-gif.gif",
      },
    ],
  },
];

export const OPTIMA_MOBILE_APP_DATA: ProjectItemType = [
  {
    title: "주요 작업 내용 정리해줘",
    contents: [
      {
        "모드 별 빌드 환경 구축": [
          "✔️ test, main 브랜치에 따른 빌드 분기 처리하여 환경 변수 자동 적용",
          "ㅤ- API 서버 변경을 수동으로 처리하던 기존 방식의 휴먼 에러를 최소화",
          "ㅤ- 안전하고 효율적인 팀 개발 환경 구축",
        ],
      },
      {
        "네이티브와의 연동을 위한 app scheme 호출 처리": [
          "✔️ 로그인, 로그아웃 외에도 알림 읽기, 특정 이벤트 발생 시 네이티브 스킴 호출",
          "✔️ 유저 인증 여부에 따른 파라미터 분기 처리",
        ],
      },
      {
        "유저 접속 디바이스 및 앱 버전 체크": [
          "✔️ User-Agent 기반 디바이스 종류 체크",
          "✔️ 네이티브에서 추가한 앱 버전 확인 후, 구버전 사용 유저에게 업데이트 권장 Alert 노출",
        ],
      },
      {
        "백버튼 처리": [
          "✔️ 페이지 별 뒤로가기 동작 분기 처리",
          "✔️ AOS 디바이스 물리적 백버튼 연동",
          "ㅤ- 히스토리 스택이 없을 경우 홈으로 이동",
          "ㅤ- 모달창이 열려있을 경우 뒤로 가기 대신 모달 닫기 처리",
          "ㅤ- 로그인/메인에서 뒤로 가기 시 네이티브에서 앱 종료 처리",
        ],
      },
      {
        "토큰 만료 시 refresh token 발급 후 자동 교체 처리": [
          "✔️ axios interceptor를 활용해 401 에러 발생 시 자동으로 Refresh Token 발급 및 교체",
          "✔️ 401 응답을 받았던 API 요청 재요청 처리",
        ],
      },
    ],
  },
  {
    title: `모드 별 빌드 환경 구축한 경험에 대해 더 자세히 설명해줘.`,
    contents: [
      `브랜치별 빌드 시 .env 파일의 환경변수가 자동으로 변경되도록 하여,
      기존의 바라보는 API 서버 수동 변경으로 인한 휴먼 에러 문제를 해결했습니다.`,
      "test 브랜치와 main 브랜치에 따른 빌드 분기 처리를 통해 안전하고 효율적인 팀 개발 환경을 조성했습니다.",
      "관련 포스팅 (click!👇🏻)",
      {
        link: "https://velog.io/@oluzr/Vite-브랜치별-.env-환경변수-분기처리하기",
      },
    ],
  },
  {
    title: `리액트 웹뷰로 개발하면서
    네이티브와의 연동을 위해 신경썼던 점에 대해 더 자세히 말해줘`,
    contents: [
      "네이티브와의 원활한 연동을 위해 로그인, 로그아웃, 알림 읽음 처리 등 앱 스킴 호출을 통한 상호작용을 구현했습니다. ",
      "특히 AOS의 물리적 백버튼과 웹 백버튼 동작을 일치시키기 위해 다양한 버그를 해결하며 중요한 경험을 얻었습니다. ",
      "전역 상태 관리를 활용해 백버튼의 분기 처리를 구현하고, 예를 들어 모달 팝업창이 열려 있을 경우 물리적 백버튼 클릭 시 팝업을 닫도록 하여 사용자가 의도하지 않게 페이지가 이동하지 않도록 했습니다. ",
      "이로써 사용자 경험을 개선하고, 유저가 더 직관적으로 앱을 탐색할 수 있도록 도왔습니다.",
      "이 경험을 통해 모든 페이지의 플로우를 깊이 이해하게 되었고, 앱의 전반적인 안정성과 사용성을 높이는 데 기여했습니다.",
    ],
  },

  {
    title: "단독으로 작업한 페이지들에 대해 설명해줘.",
    contents: [
      {
        PB상품: [
          "✔️ 상품 리스트 무한 스크롤 구현 + 데이터 캐싱 처리",
          "✔️ 상품 상세 이동 후 뒤로 가기 시 데이터 및 스크롤 위치 유지",
          "✔️ 스켈레톤 UI 적용",
          "✔️ 장바구니 담기 및 찜하기 기능 → useMutation 낙관적 UI 업데이트 적용",
        ],
      },
      {
        "카테고리 별 상품(메인,목록 페이지)": "위 PB상품 페이지와 동일",
      },
      {
        "이벤트 글 공유 관련 (앱 설치 확인)": [
          "✔️ 공유된 이벤트 글 클릭 시 로그인 여부 판단 후 페이지 리다이렉트",
          "✔️ 앱 설치 여부 체크 후, 미설치 시 앱스토어 이동 처리",
        ],
      },
      {
        "약사 후기 관련 (목록,상세)": [
          " ✔️ 목록P",
          "ㅤ- 약사 후기 검색 기능 구현 (검색어 타입: ALL/증상/상품명)",
          "ㅤㅤㄴ 검색어에 맞춰 약사 후기 리스트를 무한 스크롤로 출력하며, 로딩 중 스켈레톤 UI를 통해 사용자 경험 향상",
          "ㅤㅤㄴ 검색 필터링 기능을 활용하여 다양한 조건에 맞는 후기를 쉽게 찾을 수 있도록 개선",
          "ㅤㅤㄴ 상세 페이지로 이동 후, 검색 결과 및 필터 조건을 유지하여 사용자가 목록을 다시 찾을 때 이전 상태를 기억하도록 처리",
          "✔️ 상세P",
          "ㅤ- 서버로부터 받아오는 데이터의 콘텐츠 타입에 따라 동적으로 화면 분기 처리",
        ],
      },
      {
        마이페이지: [
          "✔️ 내 정보 수정 (비밀번호 변경, 휴대전화 변경, 주소 변경, 닉네임 변경)",
          "ㅤ- 입력 필드 상태 값 체크 및 분기 처리",
          "ㅤ- react-daum-postcode를 이용한 주소 입력/검색 기능 추가",
          "✔️ 프로필 이미지 수정 (이미지 Crop & 리사이징 처리)",
        ],
      },
      {
        "주문 내역 관련 (목록,상세)": [
          "✔️ 주문 내역 리스트 무한 스크롤",
          "✔️ 재주문 기능",
        ],
      },
      {
        "이벤트 페이지": [
          "✔️ 목록 페이지 (프로모션, 공동구매, 약사톡)",
          "ㅤ- 프로모션, 공동구매: 페이지네이션 적용",
          "ㅤ- 약사톡: 무한 스크롤 적용",
          "✔️ 이벤트 상세 페이지",
          "ㅤ- 카카오 공유 & 클립보드 복사 기능 추가",
          "ㅤ- 댓글, 대댓글 작성/수정/삭제 기능 추가",
        ],
      },
      {
        "알림 내역": [
          "✔️ 무한 스크롤 적용",
          "✔️ 알림 조회 API 호출 성공 시 네이티브 앱 스킴 호출 → 앱 아이콘 뱃지 초기화",
        ],
      },
    ],
  },
  {
    title: "그 외에 기능 개발 및 유지보수 진행한 페이지에 대해 설명해줘",
    contents: [
      {
        회원가입: [
          "✔️ 약사 면허증 이미지 업로드 UI 및 기능 개발",
          "✔️ 주소 입력 및 검색 UI 및 기능 개발 (react-daum-postcode 활용)",
        ],
      },
      {
        로그인: [
          "✔️ 로그인 성공 시 앱 푸시 스킴 호출",
          "ㅤ- 인증된 유저 여부에 따라 sendbird 관련 데이터 쿼리 포함/비포함 처리",
          "✔️ 카카오 공유에서 넘어온 경우, 로그인 후 원래 공유글로 이동 처리",
        ],
      },
    ],
  },
  {
    title: `단독으로 작업한 공통 컴포넌트는 어떤 것들이 있어?`,
    contents: [
      {
        "백버튼 컴포넌트": [
          "✔️ 페이지 경로별 뒤로 가기 동작 분기 처리",
          "✔️ AOS 물리적 백버튼과 웹 백버튼 동작 통일",
        ],
      },
      {
        "상단(Header) 컴포넌트": [
          "✔️ 하나의 Header.tsx에서 모든 상단 UI 관리",
          "✔️ 페이지 경로별 로고/디자인 분기 처리",
          "✔️ 계절별 이벤트 로고 적용 (예: 눈 내리는 애니메이션 효과)",
        ],
      },
      {
        "하단 아이콘 바": [
          "✔️ 홈, 이벤트, 약사톡, 찜하기, 마이페이지 이동 기능 포함",
          "✔️ 약사톡 버튼 클릭 시 권한 체크 (약사 인증 여부 & 모바일 기기 여부 & 앱 버전 체크)",
        ],
      },
      {
        "댓글/대댓글 컴포넌트": [
          "✔️ 작성, 삭제, 수정 API 연동 (PUT/ DELETE/ POST)",
          "✔️ 비밀 댓글 여부 및 작성자 권한에 따른 UI 분기 처리",
        ],
      },
      {
        "크롭 모달창": [
          "✔️ react-cropper 라이브러리를 활용해 이미지 크롭 기능 제공",
          "✔️ㅤ크롭된 이미지 반환 (서버 전송용 blob + UI 표시용 dataURL)",
        ],
      },
      {
        "공통 이미지 태그 컴포넌트": [
          "✔️ img 태그의 onError 핸들링 처리 → 기본 에러 이미지로 대체",
          "✔️ 코드 재사용성을 높이기 위해 공통 이미지 컴포넌트 생성",
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
        "기타 공통 컴포넌트": [
          "✔️ Date picker",
          "✔️ 페이지네이션",
          "✔️ 스켈레톤 UI (아이템/카드 등 다양한 타입 개발)",
          "✔️ Toast 메시지 UI (라이브러리 없이 자체 개발한 전역 상태 기반 Toast UI)",
          "ㅤ",
          "등을 개발하였습니다 🥰",
        ],
      },
    ],
  },
  {
    title: "프로젝트하면서 특이사항 있었어?",
    contents: [
      {
        "백버튼 이슈: navigate(-1)의 한계와 해결": [
          "맨 처음, 공통 레이아웃의 백버튼을 단순 navigate(-1)로 구현했지만, searchParam 변경도 히스토리 스택에 포함되어 예상과 다른 이동 흐름이 발생했습니다. 특히, 검색 및 이벤트 페이지에서는 원하는 페이지로 돌아가기 위해 여러 번 눌러야 하는 문제가 있었습니다. 이를 해결하기 위해 페이지별 기대 이동 경로를 명확히 정의하여 직접 이동하도록 수정하였고, 안드로이드 물리적 백버튼 동작도 조정했습니다.",
        ],
      },
      "이 경험을 통해 작은 기능도 전체 흐름과 밀접하게 연결되며, 협업 시 사전에 논의되지 않은 사소한 결정이 예상치 못한 이슈를 만들 수 있음을 깨달았습니다. 또한, 전체 프로젝트 플로우에 대한 이해도가 높아졌고, 앞으로는 공용 컴포넌트 설계 시 다양한 사용 시나리오를 고려하고, 팀원들과의 소통을 더욱 강화해야 함을 느꼈습니다.",
      {
        "상품 목록 페이지의 데이터 및 스크롤 위치 유지 이슈 해결": [
          "상품 목록 페이지에서 상세 페이지로 이동 후 돌아왔을 때, 상품 데이터가 사라지고 스크롤이 최상단으로 초기화되는 문제가 발생했습니다. 이를 해결하기 위해 useInfiniteQuery에서 staleTime을 설정하여 목록 데이터를 일정 시간 동안 유지하도록 했습니다. 또한, 상품 아이템 클릭 시 스크롤 위치(window.scrollY)를 SessionStorage에 저장하고, 목록 페이지로 돌아올 때 해당 위치를 복원하도록 구현했습니다",
        ],
      },
      "이 과정에서 사용자 경험을 더욱 신경쓰게 되었고, 유저 이탈을 방지하기 위해 페이지 간 이동 시 데이터와 UI 상태를 일관되게 유지하는 것이 얼마나 중요한지 실감한 계기가 되었습니다. 사용자에게 원활한 경험을 제공하는 것이 핵심이라는 점을 다시 한번 깨달았습니다.",
    ],
  },
];

export const SOM_DATA: ProjectItemType = [
  {
    title: "알림 기능을 어떻게 구현했는지 알려줘",
    contents: [
      "서버와 SSE(Server-Sent Events) 단방향 연결을 통해 실시간 알림 기능을 개발했습니다. SSE를 활용하여 서버에서 클라이언트로 지속적인 데이터 스트림을 유지할 수 있도록 구현하였으며, 특정 이벤트가 발생할 때마다 알림 데이터를 전달받을 수 있도록 설정하였습니다.",
      "알림이 발생하면 화면 우측 상단의 아이콘 UI가 즉시 변경되도록 처리하였으며, 사용자가 클릭하면 서버에서 전달받은 URL로 라우팅되도록 구현하였습니다.",
      {
        img: "/assets/gif/som-noti.gif",
      },
    ],
  },
  {
    title:
      "react-query와 useMutation을 활용한 데이터 캐싱 및 상태 관리를 설명해줘",
    contents: [
      "React Query의 `useQuery`와 `useMutation`을 적극 활용하여 클라이언트 상태를 관리하고, 불필요한 API 호출을 줄일 수 있도록 최적화하였습니다.",
      "좋아요, 팔로우, 댓글 작성 및 삭제 시 기존 query 캐싱을 초기화하여 최신 데이터가 즉시 반영되도록 처리하였습니다. 이를 통해 사용자가 변경 사항을 실시간으로 확인할 수 있도록 UX를 개선하였습니다.",
      {
        img: "/assets/gif/som-follow.gif",
      },
      {
        img: "/assets/gif/som-like.gif",
      },
      {
        img: "/assets/gif/som-commend.gif",
      },
      "또한, `infiniteQuery`를 활용하여 무한 스크롤 기능을 구현하여 사용자 경험을 향상시켰으며, search param을 이용한 게시글 필터링 기능도 추가하였습니다.",
    ],
  },
  {
    title: "게시글 필터링 및 검색 기능을 어떻게 구현했는지 설명해줘",
    contents: [
      "사용자의 검색 경험을 개선하기 위해 다양한 필터링 기능을 개발하였습니다.",
      "블로그 페이지에서는 정렬(조회순, 최신순), 태그 필터링, 검색어 입력을 통한 필터링 기능을 제공하였습니다.",
      {
        img: "/assets/gif/som-blogfilter.gif",
      },
      "메인 페이지에서는 인기 게시글과 최신 게시글을 쉽게 찾을 수 있도록 정렬 필터를 적용하였습니다.",
      {
        img: "/assets/gif/som-home.gif",
      },
      "검색 페이지에서는 게시글의 제목, 소개, 본문 내용, 태그를 기준으로 검색할 수 있도록 구현하였습니다..",
      {
        img: "/assets/gif/som-search.gif",
      },
    ],
  },
  {
    title: "axios Interceptor를 활용한 API 요청 및 응답 핸들링 방법을 알려줘",
    contents: [
      "Axios Interceptor를 활용하여 API 요청과 응답을 효율적으로 관리하였습니다.",
      "클라이언트 측에서 특정 에러 코드(예: 401, 403, 500)에 대한 에러 메시지를 사용자에게 출력하도록 구현하였으며, 서버에서 반환하는 에러 메시지를 error 객체에서 추출하여 사용자 친화적인 알림을 제공하였습니다.",
      "JWT 기반 인증 시스템을 적용하였으며, 유저의 `accessToken`이 만료될 경우 `refreshToken`을 활용하여 새로운 `accessToken`을 자동으로 발급받고, 이전 요청을 재처리하도록 설계하였습니다.",
      "관련 포스팅 (click!👇🏻)",
      {
        link: "https://velog.io/@oluzr/axios-axios-interceptor-이용하여-errorCode-띄우기",
      },
    ],
  },
  {
    title:
      "react-quill을 활용한 글 작성 및 수정 기능을 어떻게 구현했는지 설명해줘",
    contents: [
      "React-Quill 텍스트 에디터를 활용하여 사용자가 글을 작성하고 수정할 수 있도록 개발하였습니다.",
      "하나의 텍스트 편집 컴포넌트에서 최초 작성과 수정이 모두 가능하도록 구현하였으며, 기존 게시글 데이터를 prop으로 전달하여 수정 모드를 활성화하였습니다.",
      "이미지 파일 업로드 시 서버에 POST 요청을 보내고, 반환받은 URL을 통해 에디터 내에서 즉시 미리보기가 가능하도록 처리하였습니다.",
      {
        img: "/assets/gif/som-write.gif",
      },
      {
        img: "/assets/gif/som-write2.gif",
      },
      "수정 모드에서는 기존 데이터를 불러와 반영하고, 신규 작성 모드에서는 초기 상태로 에디터를 렌더링하는 방식으로 처리하였습니다.",
      {
        img: "/assets/gif/som-rewrite.gif",
      },
    ],
  },
  {
    title: "react-hook-form을 활용한 폼 유효성 검사 및 상태 관리 방법을 알려줘",
    contents: [
      "React-Hook-Form을 활용하여 폼 유효성 검사 및 상태 관리를 최적화하였습니다.",
      "실시간 유효성 검사를 수행하여 사용자가 입력한 데이터에 문제가 있을 경우 즉시 피드백을 제공하도록 구현하였습니다.",
      "사전 유효성 검사를 거쳐 불필요한 서버 API 요청을 방지하였으며, form 데이터가 유효할 경우에만 submit 버튼이 활성화되도록 설정하였습니다.",
      "관련 포스팅 (click!👇🏻)",
      {
        link: "https://velog.io/@oluzr/react-hook-form-유효성-검사에-따른-조건부-클래스-작업-clsx-useForm",
      },
    ],
  },
  {
    title: "반응형 UI 및 테마 적용 작업에 대해 설명해줘",
    contents: [
      "Tailwind CSS와 DaisyUI를 활용하여 다양한 테마를 지원하는 반응형 UI를 개발하였습니다.",
      "전역 테마 상태를 관리하여 사용자가 선택한 테마가 유지될 수 있도록 설정하였습니다.",
      {
        img: "/assets/gif/som-theme.gif",
      },

      "PC, 태블릿, 모바일 환경에서 최적의 사용자 경험을 제공하기 위해 반응형 레이아웃을 구축하였습니다. sass를 기반으로 다양한 해상도에서 일관된 UI를 유지하도록 설계하였습니다.",
      {
        img: "/assets/gif/som-size1.gif",
      },
      {
        img: "/assets/gif/som-size2.gif",
      },
    ],
  },
];

export const USPORTS_DATA: ProjectItemType = [
  {
    title: "Next.js 14 버전 (app router) 로 개발한 내용 설명해줘",
    contents: [
      "Next.js 14의 App Router 기능을 활용하여 유연하고 효율적인 페이지 라우팅을 구현하였습니다.",
      "Parallel Routes와 Intercepting Routes를 적극 활용하여 페이지 이동 없이 모달 형식으로 다양한 화면을 전환할 수 있도록 개발하였습니다. 이를 통해 사용자 경험을 개선하고 불필요한 페이지 리로딩을 방지하였습니다.",
      {
        "Middleware를 활용한 요청 및 응답 핸들링": [
          "쿠키에 저장된 유저 토큰을 자동으로 HTTP 요청 헤더에 설정하여 보안성과 편의성을 향상시켰습니다.",
          "유저의 로그인 상태를 기반으로 특정 페이지에 대한 접근을 제한하고, 로그인되지 않은 사용자는 로그인 페이지로 리다이렉트되도록 설정하였습니다.",
        ],
      },
      {
        code: `import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { setHeaderToken } from './func/fetchCall'
export async function middleware(request: NextRequest) {
ㅤconst cookieStore = cookies()
ㅤconst accessToken = cookieStore.get('accessToken')
ㅤ//쿠키에 저장된 accessToken 값 여부 확인
ㅤif (!accessToken) {
ㅤㅤreturn NextResponse.redirect('/login') // 없다면 미로그인 상태로 간주
ㅤ}
ㅤsetHeaderToken(accessToken + '')
ㅤif (
ㅤㅤrequest.nextUrl.pathname.startsWith('/login') || 
ㅤㅤrequest.nextUrl.pathname.startsWith('/createAccount')
ㅤ) { // 요청 url이 Login이거나 createAccount일 경우 && 토큰값이 있다면 
ㅤ// 로그인된 상태로 인지, Home 으로 redirect
ㅤif (accessToken) return NextResponse.redirect('/home') 
}
}`,
      },
      "Middleware를 활용함으로써 페이지 리다이렉션을 서버 측에서 처리하여 클라이언트의 불필요한 렌더링을 최소화하였으며, 이를 통해 보안성과 성능을 동시에 향상시켰습니다.",
      "관련 포스팅 (click!👇🏻)",
      { link: "https://velog.io/@oluzr/Next14-middleware" },
    ],
  },
  {
    title: "SSE(Server-Sent Events)를 이용한 실시간 알림 구현 방법을 알려줘",
    contents: [
      "서버와 SSE(Server-Sent Events) 단방향 연결을 통해 실시간 알림 기능을 개발하였습니다.",
      "새로운 알림이 도착하면 화면 상단 팝업을 통해 알림 내용을 즉시 노출하고, 좌측 알림 탭의 상태가 변경되도록 구현하였습니다.",
      {
        img: "/assets/gif/us-noti.gif",
      },
      "SSE 요청 시 유저 인증을 위해 `EventSourcePolyfill`을 활용하여 request header에 유저 토큰을 포함시켰습니다.",
      {
        link: "https://velog.io/@oluzr/Next.js14-SSE를-통한-알림-구현",
      },
    ],
  },
  {
    title:
      "웹소켓(Stomp.js)을 활용한 실시간 채팅 기능을 구현한 방법을 설명해줘",
    contents: [
      "웹소켓을 활용하여 실시간 1:1 및 그룹 채팅 기능을 구현하였습니다.",
      "Stomp.js를 사용하여 서버와의 실시간 연결을 유지하고, 메시지 송수신을 최적화하였습니다.",
      {
        img: "/assets/gif/us-chat1.gif",
      },
      "이전 채팅 기록을 불러오는 과정에서 `useInfiniteQuery`와 `Intersection Observer`를 조합하여 리버스(Reverse) 인피니트 스크롤을 구현하였습니다. 이를 통해 과거 채팅 내역을 자연스럽게 불러올 수 있도록 하였습니다.",
      {
        img: "/assets/gif/us-chat2.gif",
      },
      "웹소켓이 지원되지 않는 환경에서도 원활한 채팅 기능을 제공하기 위해 `webSocketFactory`를 활용하여 XHR 폴링(Fallback) 메커니즘을 제공하였습니다.",
      {
        code: `const client = new StompJs.Client({
        ㅤwebSocketFactory: () =>
        ㅤnew SockJS('https://3.39.34.245.nip.io/ws/chat'),
        ㅤㅤconnectHeaders: {
        ㅤㅤAuthorization: Bearer userToken,
        ㅤ},
        ㅤreconnectDelay: 50000,
        ㅤheartbeatIncoming: 10000,
        ㅤheartbeatOutgoing: 10000,
      })
        `,
      },
      "이러한 최적화를 통해 네트워크 환경이 좋지 않은 경우에도 안정적인 실시간 채팅 경험을 제공할 수 있도록 개발하였습니다.",
    ],
  },
  {
    title: "카카오 API를 활용하여 어떤 기능을 개발했는지 알려줘",
    contents: [
      "카카오 API를 활용하여 다양한 기능을 구현하였습니다.",
      "카카오 지도 API를 활용하여 사용자가 설정한 모집 장소의 위도와 경도를 지도 화면에 시각적으로 출력하였습니다.",
      "카카오 간편 로그인을 적용하여 사용자가 번거로운 회원가입 절차 없이 쉽게 로그인할 수 있도록 구현하였습니다.",
      "관련 포스팅 (click!👇🏻)",
      {
        link: "https://velog.io/@oluzr/Next.js14-카카오-간편-로그인-구현",
      },
    ],
  },
  {
    title:
      "search param을 활용한 검색 및 필터링 기능을 어떻게 구현했는지 알려줘",
    contents: [
      "검색 및 필터링 기능을 효율적으로 관리하기 위해 search param을 적극 활용하였습니다.",
      "필터링 옵션이 변경될 때마다 URL에 검색 조건을 반영하도록 구현하여, 사용자가 새로고침해도 동일한 검색 결과를 유지할 수 있도록 처리하였습니다.",
      {
        img: "/assets/gif/us-filter.gif",
      },
      "이러한 방식으로 UX를 향상시켜 사용자가 검색 조건을 직관적으로 이해하고 활용할 수 있도록 개선하였습니다.",
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
    path: "/work/optimaApp",
    keywords: [
      "📅 2024.07~2024.10",
      "✔️ React 기반 웹뷰 개발",
      "✔️ 프론트 개발 담당",
      "✔️ 기여도 50% (프론트 2인 진행)",
    ],
    skillset: [
      "react",
      "typescript",
      "react-query",
      "axios",
      "recoil",
      "styled-components",
    ],
  },
  {
    title: "옵티마 RX",
    // startDate: "2024/07",
    // endDate: "2024/10",
    linkTo: "https://www.optimarx.co.kr/",
    subTitle: "기존 ASP 사이트 유지보수 및 신규 리액트 페이지 개발",
    contribution: 60,
    participants: ["front"],
    path: "/work/optimaRx",
    keywords: [
      "기존 ASP 사이트 유지보수 및 신규 리액트 페이지 개발",
      "✔️ AI 소분판매 페이지 리액트 개발",
      "✔️ SEO 최적화 작업",
      "✔️ 전체 페이지 실행 코드 분석 및 정리",
    ],
    skillset: ["react", "asp", "javascript", "ajax", "axios", "recoil"],
  },
  {
    title: "옵티마 가맹 웹사이트 리뉴얼 (pc/mo)",
    startDate: "2024/07",
    endDate: "2024/07",
    linkTo: "https://www.optimacare.co.kr/",
    subTitle: "옵티마 가맹 웹 사이트 리뉴얼",
    contribution: 100,
    participants: ["front", "back"],
    path: "/work/optimacare",
    keywords: [
      "📅 2024.07~2024.07",
      "✔️ 프론트 개발 전담",
      "✔️ 주변 약국 지도 찾기 개발",
      "✔️ 반응형 제작 (PC, tablet, mobile)",
    ],
    feedback: [
      "🗣️ 옵티마 사이트 리뉴얼을 통해 브랜드의 신뢰성과 전문성을 대폭 강화했습니다.",
      "🗣️ 사용자 중심의 직관적이고 세련된 인터페이스를 구현함으로써 모든 디바이스에서 일관되고 매끄러운 사용자 경험을 위해 노력하였습니다 💪🏻",
    ],
    skillset: [
      "react",
      "axios",
      "typescript",
      "react-hook-form",
      "kakao maps",
      "recoil",
      "sass",
      "vite",
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
    path: "/work/lsp",
    keywords: [
      "📅 2024.06~2024.07",
      "✔️ 프론트 개발 전담",
      "✔️ 반응형 제작 (PC, tablet, mobile)",
    ],
    feedback: [
      "🗣️ 자사 사이트 리뉴얼을 통해 다양한 애니메이션과 일관되고 매끄러운 사용자 경험을 고려한 인터페이스를 구현하며 브랜드의 메시지를 명확하게 전달하기 위해 노력하였습니다",
    ],
    skillset: ["react", "zustand", "axios", "kakao maps", "sass", "typescript"],
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
    path: "/work/som",
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
    path: "/work/usports",
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

export const SITES_LINK = {
  optimacare: "https://www.optimacare.co.kr/",
  lsp: "http://www.lspworld.com/",
  optimaRx: "https://www.optimarx.co.kr/",
  som: "https://github.com/LeeAndRyu/SOM_FE",
  optimaApp:
    "https://play.google.com/store/apps/details?id=com.lspworld.optimapharmn&pli=1",
  usports: "https://github.com/AnonymousZB14/USports_FE",
};

// introduction

export const TIMELINE_DATA: TimelineType[] = [
  {
    year: 2021,
    contents: [
      { date: "2021/12", content: "웹디자인기능사 취득" },
      {
        date: "2021/06~2021/11",
        content:
          " 하이미디어 (스마트웹&콘텐츠개발) UI/UX 웹디자인&웹퍼블리셔 과정 수료",
      },
    ],
  },
  {
    year: 2022,
    contents: [
      {
        date: "2022.01~2023.05",
        content: "(주)커넥트웨이브 근무 / 웹퍼블리셔",
      },
    ],
  },
  {
    year: 2023,
    contents: [
      {
        date: "2023/08~2023/10",
        content: "모던 자바스크립트 Deep Dive 북스터디",
      },
      {
        date: "2023/06~2024/01",
        content: "제로베이스 프론트엔드 스쿨 16기 수료",
      },
      {
        date: "2023/11~2024/01",
        content: "사이드 프로젝트 'USPORTS'",
      },
    ],
  },
  {
    year: 2024,
    contents: [
      {
        date: "2024/01~2024/02",
        content: "사이드 프로젝트 'SOM'",
      },
      {
        date: "2024.04~2024.12",
        content: "(주)라이프스타일프로젝트 근무 / 프론트엔드 개발",
      },
    ],
  },
];
