import { ProjectItemType } from "types/app/type";

export const OPTIMA_RX_DATA: ProjectItemType = [
  {
    title: "ai 소분판매",
    contents: [
      "React로 개발 후 기존 레거시 ASP와 통합 방법 고안",
      "web.config 파일에 별도 rule 추가(라우팅 관련 오류 처리)",
      {
        code: `
          <rule name="React App Routes" stopProcessing="true">
              <match url="^ai/.*" />
              <conditions logicalGrouping="MatchAll">
                  <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                  <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
              </conditions>
              <action type="Rewrite" url="/Ai/index.html" />
          </rule>
        `,
      },
    ],
  },
  {
    title: "전체 디렉토리 코드 분석 및 문서화 정리",
    contents: [
      "페이지 별 호출 저장 프로시저명, 매개변수 등 정리",
      "API 요청 (ajax) 코드 HTTP타입 및 실행 내용 파악 및 정리",
    ],
  },
  {
    title: "SEO 최적화 작업 건",
    contents: ["상품 상세 페이지 meta keywords 작업"],
  },
];

export const OPTIMACARE_DATA: ProjectItemType = [
  {
    title: "주요내용",
    contents: [
      "스크롤 기반 사용자 상호작용 인터랙티브 애니메이션 UI 구현",
      {
        "약국 찾기 기능 개발 (UI 디자인 자체 작업)":
          "서버 지도 리스트 API 연동 및 kakao map API 활용",
      },
      {
        "관련 뉴스 보기 서버 API 연동": "필터링 기능 및 페이지네이션 구현",
      },
      "가맹 접수 폼 유효성 검사 처리",
      {
        "제품 보기 리스트 및 제품 상세 API 연동":
          "필터링 기능 및 페이지네이션 구현",
      },
      "PC/Tablet/Mobile 반응형 css 작업",
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
    title: "페이지 단독 작업",
    contents: [
      {
        PB상품: [
          "상품 리스트 (무한 스크롤) 캐싱 처리",
          "상품 목록에서 상세로 이동 후 뒤로 가기로 넘어올 시 상품 리스트 데이터 및 스크롤 위치 유지",
          "상품 아이템 스켈레톤 처리",
          {
            "상품 장바구니 담기 및 찜하기 기능":
              "useMutation 낙관적 UI 업데이트 처리",
          },
        ],
      },
      {
        "카테고리 별 상품(메인,목록 페이지)": "위 PB상품 페이지와 동일",
      },
      {
        '이벤트': [
          
        ]
      }
    ],
  },
];
