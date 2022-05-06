# Study_Cloud
| 　　　　　　 |  | 　　　　　　　  | 3월 |  |  |  |  | 4월 |  |  |  |  | 5월 |  |  |  |  | 6월 |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  | 1 | 2 | 3 | 4 | 5 | 1 | 2 | 3 | 4 | 5 | 1 | 2 | 3 | 4 | 5 | 1 | 2 | 3 |
| 계획 및 분석 |  | 팀원구성 | ● | ● |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 팀원 역할분담 | ● | ● |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 수행 계획 일정 수립 | ● | ● |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 수행 계획서 제출 및 발표 | ● | ● | ● |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 개발 및 테스트 |  | DB 설계 |  |  |  | ● | ● |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | 프로젝트 퍼블리싱 |  |  |  | ● | ● | ● | ● | ● | ● |  |  |  |  |  |  |  |  |  |
|  |  | 프론트 기능 구현 |  |  |  |  |  | ● | ● | ● | ● | ● | ● | ● | ● |  |  |  |  |  |
|  |  | 백엔드 기능 구현 |  |  |  |  |  | ● | ● | ● | ● | ● | ● | ● | ● |  |  |  |  |  |
|  |  | 기능 테스트 |  |  |  |  |  |  |  |  |  | ● | ● | ● | ● | ● | ● |  |  |  |
| 수정 / 보완 |  | 오류 검사 및 수정 |  |  |  |  |  |  |  |  |  |  |  |  | ● | ● | ● | ● |  |  |
|  |  | 프로젝트 개선 사항 검토 |  |  |  |  |  |  |  |  |  |  |  |  | ● | ● | ● | ● |  |  |
|  |  | 오류 및 안정화 최종 점검 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ● | ● | ● |  |
| 프로젝트 종료 |  | 최종 보고서 제출 및 발표 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ● | ● |

# 1. 사용 기술 ( 프론트 )
## 1.1 React
JavaScript 라이브러리 
싱글 페이지 어플리케이션의 UI를 생성하는데 집중한 라이브러리
<br/>


## 1.2 Typescript
### 1.2.1 사용이유
>   Javasciprt는 타입 오류를 잡아내지 못함.
그래서 Typesciprt 라는 것이 생겼음.
컴파일 과정에서 오류를 검증할 수 있다.

<br/>


## 1.3 Next.js
### 1.3.1 사용이유
1. 리액트는 spa으로 검색 엔진 최적화(SEO)에 좋지않다.
> -이것을 해결하기 위해 SSR 기능을 더하여 SPA장점과 SSR장점 둘 다 가질 수 있게 된다.

<br/>


## 1.4 Styled-components
## 1.4.1 사용한 이유
> Classname을 사용하지 않고 스타일을 줄 수 있기때문에 Classname이 중복돼서 생기는 문제를 해결 할 수 있음.

> component의 props를 참조할 수 있어서 props의 값에 따라 다른 UI를 보여줄 수 있다.

<br/>
<br/>

## 1.5 Storybook
<br/>

# 2 사용한 디자인패턴
## 2.1 atomic 디자인 패턴

<br/>

### 2.1.1 아토믹 디자인은 원자(Atoms), 분자(Molecules), 유기체(Organisms), 템플릿(Templates), 페이지(Pages)로 효과적인 인터페이스 시스템을 만든다.
### 
<br/>

### 2.1.장점
1. 어플리케이션과 분리하여 컴포넌트를 개발 및 테스트를 할 수 있다.
2. 컴포넌트의 재사용이 쉽다.
#### 단점
1. 작은 프로젝트를 진행할 때에는 효율적이지 못할 수 있다.


# 3 폴더구조
## 3.1 pages폴더
nextjs pages 폴더는 라우터 기능을한다.
index는 각 폴더 명이 주소가 된다.
나머지는 이름명시한 파일이 라우터 경로가 된다.

<br/>

## 3.2 src 폴더
나머지 모든 컴포넌트가 들어가는 폴더
추후에 사용할 typesciprt를 사용하여 tpye을 명시한 파일이 들어가는 폴더

<br/>

## 3.3 components 폴더
실제로 사용하는 모든 페이지들이 작성되는 폴더

<br/>

## 3.4 UI폴더
Storybook을 이용하여 UI를 만드는 폴더


├─pages
│ ├─ api
│ └─ index.js
├─public
│
├─src
│ ├─ components
│ │ ├─ UI
│ ├─ └─ atoms
│ ├───└─index.js
│ ├─── molecules
│ ├───└─index.js
│ ├─── organisms
│ ├───└─index.js
│ ├─── template
│ └───└─index.js
│ └─ index.js
│
├─style
└─ global.css

1. 회원 정보 
    회원 정보 db
    아이디 ( pk 식별자 ) , 비밀번호 , 이름 , 학교 , 전공

    스톱워치
    아이디 ( pk 식별자 ) , 시작시간 , 종료시간 => 시간은 시 , 분만 넣기 

2. 공부기록페이지 
    공부기록 페이지 db
    게시글번호(식별자 fk로 내보냄) , 아이디 (회원정보 fk) , ( 날짜 데이터 (년,월,일) ) , 시작시간 , 종료시간 , 제목
        날짜로 해당하는 데이터를 다 가지고 옴

        기록 하는 방식 두가지
        1. 스톱워치로 저장
        2. 직접 입력해서 저장
        
    Reply db
    게시글번호 (fk) , 내용 (댓글)

    시간
        0시~ 23시 59분까지 구현
        시작 , 종료 둘 다 입력하기.

    내용
        댓글처럼 추가하는 형식으로
    
    기록한거 보기
        카드 형식으로 보여줌

3. 커뮤니티
    커뮤니티 db
    게시글번호(식별자) , 아이디 (fk) , 제목 , 게시글 , 내용 

    Reply db
    게시글번호 (fk) , 댓글


1. 메인페이지

공지사항 , 게시판

햄버거메뉴

2. 공부기록페이지 

달력 

제목

시간
    0시~ 23시 59분까지 구현
    시작 , 종료 둘 다 입력하기.

내용
    댓글처럼 추가하는 형식으로

    안녕하십니까 


이번 캡스톤 디자인 프로젝트 발표를 맡게될 000입니다

우선 목차로는

첫번째로는  앱의 다지인 그다음 앱의 기능 , 개선할 점 백엔드 셋팅과 DB설계 그다음으론

진행일정에 대해 설명해드리고 마치도록 하겠습니다


첫번째로는  현재 저희가 직접 구현한 디자인입니다

앱의 메인화면이고 학습 관리 캘린더 페이지 디자인입니다

그다음으로는 메뉴화면 팝업창 디자인과 메모기능 디자인입니다 상세한것은 뒷페이지에서 말씀드리겠습니다


두번째로는 앱의 기능에 대해 간단히 설명드리고 뒷페이지에서 상세하게 설명드리겠습니다

먼저 공부 시간 기록 , 공부할때 자신의 공부 시간을 측정해주는 기능이 있고

그 다음은 캘린더 메모작성 , 캘린더 페이지에서 날짜 지정한 후 할일 , 메모등을 간단히 기록할 수 있습니다

마지막으로는 도움말 기능입니다 , 처음 앱을 사용시 앱의 사용법 가이드를 제시합니다



그다음 으로는 좀더 앱의 기능에 대해 상세하게 설명드리겠습니다

처음 메인화면 디자인에서는 무엇을 할 수 있는 앱인지 알 수 없어서 디자인을 변경하게 되었습니다. 

보시는 화면과 같이 첫 페이지에서 스톱워치를 넣고 공부를 기록할 수 있다는것을 표시해두었습니다.

공부 시간기록 페이지에서는 공부할때 타이머 시간을 측정하여 본인이 얼마나 공부를 했는지 알 수 있습니다

날짜를 원하는대로 선택할수 있어서 지난날에 대한 기록도 확인 할 수 있습니다.


그다음으로는 캘린더 메모작성 페이지에서는

날짜별로 어떤 공부 또는 얼마나 했는지 그리고 간단한 메모가 가능합니다


도움말 기능입니다

메뉴 안에 도움말을 클릭하면 앱의 사용법을 제시합니다

처음 사용하시는 고객들을 위한 상세하고 간단한 설명을 제시합니다

그 다음으로는 앱의 개선점 입니다

첫번째로는 캘린더 월별칸을 좀더 가독성있게 수정하고

도움말에서는 부족한 가이드 부분을 좀더 한눈에 보기 쉽게 수정할 예정이고

메모 기능에서는 날짜별로 메모를 할 수 있는 페이지에서 가독성있게 수정할 예정입니다


그다음으로는 백엔드 셋팅입니다.

백엔드 에서는 nodejs express( 노드제이에스 익스프레스) 를 사용하였고
데이터베이스는 mysql을 사용했습니다.

다음으로는 디렉토리 구조입니다.

app.ts에서는 요청을 받았을때 제일 처음받는곳이고

( 오른쪽 그림 그대로 읽기 )

DB 설계에서는 '유저 데이터' 테이블을 바탕으로 각각의 게시판 또는 공부기록을 테이블을 외래키로

참조함으로써 데이터 무결성을 보장해주도록 설계를 했습니다


다음으로는 진행일정에 대해 설명드리겠습니다

퍼블리싱을 진행하는데 디자인이 진행중에 계속 바뀌어서 퍼블리싱에 시간이 더 소요될 예정이고 기능 구현과 
퍼블리싱을 같이 하는중입니다

백엔드의 중요도보다 프론트가 더 중요하다고 판단이 되어 프론트를 더 중심적으로 작업을 하는중입니다.


준비한 PPT는 여기까지 입니다 감사합니다