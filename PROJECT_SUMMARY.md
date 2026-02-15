# Spanish Flashcards — 프로젝트 요약

> 새 채팅에서 이 프로젝트를 이어서 작업할 때 이 문서를 참고하세요.

---

## 1. 프로젝트 개요

- **이름**: Spanish Flashcards (플래시카드)
- **목적**: 스페인어 단어/표현을 플래시카드로 학습하는 웹 앱
- **스택**: React 18, TypeScript, Vite 5, React Router 6, Playwright (E2E)
- **배포**: Vercel (`vercel.json`에 SPA 리라이트 설정 있음)

---

## 2. 디렉터리 구조

```
flashcards/
├── src/
│   ├── main.tsx              # 엔트리: BrowserRouter + App
│   ├── App.tsx                # 라우트 정의
│   ├── index.css              # 전역 스타일 (box-sizing, body, #root, main)
│   ├── theme.ts               # 디자인 토큰 (색상, 패딩, getLinkStyle 등)
│   ├── data/
│   │   └── flashcards.ts      # 카드 데이터, 타입, CATEGORIES, getCardsByCategory
│   ├── components/
│   │   ├── PageLayout.tsx     # 페이지 공통 레이아웃 (main 래퍼)
│   │   ├── Flashcard.tsx      # 플립 카드 UI (스페인어 ↔ 영어)
│   │   └── Flashcard.module.css
│   └── pages/
│       ├── HomePage.tsx           # 홈: Study / Quiz / Stats 링크
│       ├── CategorySelectionPage.tsx  # 카테고리 선택 (Study/Quiz 공용)
│       ├── StudySessionPage.tsx   # 학습 세션 (카드 넘기기, Right/Wrong)
│       ├── PlaceholderSessionPage.tsx # 퀴즈 세션 placeholder (미구현)
│       └── StatsPage.tsx          # 통계 placeholder (미구현)
├── e2e/                        # Playwright E2E 테스트
│   ├── home.spec.ts
│   ├── category-selection.spec.ts
│   ├── study-session.spec.ts
│   └── stats.spec.ts
├── playwright.config.ts        # baseURL: localhost:5173, webServer: npm run dev
├── vercel.json                 # SPA: 모든 경로 → /index.html
├── package.json
└── .cursor/rules/testing.mdc   # 변경 후 테스트 실행, 새 기능 테스트 제안
```

---

## 3. 라우팅

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | HomePage | Study Mode / Quiz Mode / Stats Page 링크 |
| `/study/category` | CategorySelectionPage | 학습용 카테고리 선택 |
| `/study/:category` | StudySessionPage | 카테고리별 학습 세션 (플립 카드, Right/Wrong) |
| `/quiz/category` | CategorySelectionPage | 퀴즈용 카테고리 선택 |
| `/quiz/:category` | PlaceholderSessionPage | 퀴즈 세션 (다음 단계에서 구현 예정) |
| `/stats` | StatsPage | 통계 (placeholder) |

---

## 4. 데이터 모델

- **`Flashcard`**: `category`, `spanish`, `english`, `quiz: { type: 'multiple-choice', options: string[] }`
- **`CATEGORIES`**: `['animals', 'food', 'verbs']`
- **`getCardsByCategory(category)`**: 카테고리별 카드 배열 반환
- 카드 데이터는 `src/data/flashcards.ts`에 하드코딩 (카테고리당 4장, 총 12장)

---

## 5. 주요 기능

- **Study Mode**: 카테고리 선택 → 카드 한 장씩 표시, 클릭 시 뒤집어서 영어 확인, "맞음/틀림" 표시, 다음 카드, 세션 완료 시 요약 및 잘못 표시한 카드 수 안내
- **Quiz Mode**: 카테고리 선택 후 퀴즈 세션은 아직 placeholder (Multiple Choice 등 미구현)
- **Stats**: 통계 페이지는 placeholder
- **테마**: `theme.ts`에서 primary/study/quiz 색상, 링크/버튼 스타일 함수 제공

---

## 6. 테스트

- **E2E**: Playwright, `npm run test:e2e` (또는 `test:e2e:ui`)
- **설정**: `playwright.config.ts` — 테스트 디렉터리 `./e2e`, dev 서버 `npm run dev`, baseURL `http://localhost:5173`
- **규칙** (`.cursor/rules/testing.mdc`): 변경 후 테스트 실행 필수, 새 기능에 대한 테스트 작성 제안

---

## 7. 스크립트

- `npm run dev` — Vite 개발 서버
- `npm run build` — `tsc -b && vite build`
- `npm run preview` — 빌드 미리보기
- `npm run lint` — ESLint
- `npm run test:e2e` — Playwright E2E

---

## 8. 현재 상태·미구현

- **Quiz 세션**: `/quiz/:category`는 PlaceholderSessionPage만 있음. Multiple Choice / Fill-in 등은 이후 단계 예정.
- **Stats**: 실제 학습 통계 저장/표시 없음.
- **Study**: 잘못 표시한 카드만 수집하고 있으나, "다시 보기" 등 재학습 플로우는 없음.

---

## 9. 새 채팅에서 할 때

1. 이 파일(`PROJECT_SUMMARY.md`)을 컨텍스트에 포함하거나 요약해서 전달.
2. 수정한 뒤에는 `npm run test:e2e`로 E2E 통과 확인.
3. 새 기능 추가 시 테스트 추가 여부를 사용자에게 제안.
