## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 프로젝트 설명

## github issues API

## 폴더 설명

- pages : 페이지 단위를 구성하는 폴더
- component : 페이지를 구성하는 컴포넌트 및 UI 컴포넌트
- hooks : react-query hook (캐싱, 쿼리키, 쿼리함수)
- store : issue state, sort state를 관리하는 전역 store
- types : api콜을 통해 받아오는 데이터의 type들을 관리
- utils : tw merge 유틸 함수

## server state 관리 (react-query)

- data fetching과 loading, error 발생 시 사용자 경험 고려
  useQuery의 반환값 isLoading, isFetching, error의 값에 따라 로딩페이지, 에러페이지 구현

## 사용한 기술스택

- react18
- react-router-dom
- react-table
- react-query@5 version
- shadcn-ui
- tailwind css
- zustand
- lucide-react
