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
    title: "주요 내용",
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
    title: "페이지 단독 작업",
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
        code: `<ul>
					ㅤ{data.contents.map((item, idx) => {
					ㅤㅤconst [[key, value]] = Object.entries(item);
				  ㅤㅤㅤreturn (
					ㅤㅤㅤㅤ<li key={idx}>
								<p className="tit"> {key}</p>
								<div className="cont">
									{typeof value == 'string' ? ( // 1. value가 stirng 일 때
										<p> {value}</p>
									) : Array.isArray(value) ? ( // 2. value가 배열일 때
										value.map((e) =>
											e.includes('http') ? ( // 2-1. 배열 중 img일 때
												<img
													src={e}
													alt="img"
												/>
											) : (
												<p className="sub-cont">{e}</p> // 2-2. 배열 중 string일 때
											),
										)
									) : (
										// 3. value가 object (JSON)일 때 -2depth
										Object.entries(value).map(([key2, value2], idx) => (
											<>
												<p className="sub-tit">{key2}</p>
												<span>{typeof value2 === 'string' && value2}</span>
											</>
										))
									)}
								</div>
							</li>
						);
					})}
				</ul>
          `,
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
    title: "페이지별 -2 ",
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
    title: "공통 컴포넌트 (단독 작업)",
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
