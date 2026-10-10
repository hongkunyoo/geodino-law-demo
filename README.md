# GeoDino 공식 안내 페이지 템플릿 (법률사무소)

GeoDino가 고객 사무소에 만들어 드리는 "공식 안내 페이지"의 템플릿입니다. 지금은 영업용 가상 사무소 예시로 배포되어 있습니다: https://law-demo.geodino.io

- 실제 법률사무소가 아닙니다. 이름·주소·연락처·경력·진단 결과는 모두 가상입니다.
- 예시 사이트는 검색엔진에 색인되지 않도록 `noindex`를 넣었습니다.

## 구조

| 파일 | 내용 |
|---|---|
| `src/config/office.ts` | 사무소 정보 전부 (이 파일만 바꾸면 다른 사무소 페이지가 됨) |
| `src/config/ai-notes.ts` | "AI가 읽는 부분 보기" 설명 (예시 전용) |
| `src/pages/index.astro` | 공식 안내 페이지 (한 페이지) |
| `src/pages/[demo].astro` | 예시 자료: `/before-after/`, `/sample-report/` (예시 전용. 진단 요약은 구성 확정 전이라 링크 없이 주소로만 접근) |
| `src/lib/schema.ts` | 구조화 데이터 (LegalService, Person, FAQPage) |

## 실제 고객 사이트로 쓸 때

1. 이 저장소를 복사해 새 저장소를 만든다.
2. `office.ts`를 고객 정보로 채우고 `demo: false`로 바꾼다. `siteUrl`과 `public/CNAME`도 바꾼다.
3. 공개 문구는 변호사가 직접 확인·승인한 뒤에만 배포한다.

## 개발

```sh
npm install
npm run dev
npm run build
```

`main`에 push하면 GitHub Pages로 배포됩니다.
