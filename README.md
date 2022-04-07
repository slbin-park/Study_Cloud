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

## Storybook
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
