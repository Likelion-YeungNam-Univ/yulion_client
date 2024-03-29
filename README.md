# YU LikeLion 웹페이지

### 폴더 구조
```
└─ src
 ├─ assets              이미지, 폰트
 ├─ components          재사용 공통 컴포넌트
 ├─ config              초기 설정 및 구성 정보
 ├─ constants           공통 상수
 ├─ layouts             공통 UI 레이아웃
 ├─ pages               페이지 컴포넌트
 ├─ api (= services)    api 관련 로직 모듈, auth 인증 관련 모듈
 ├─ store               전역 상태 관리 (redux)
 ├─ styles              UI 디자인 스타일 (styled-component)
 ├─ utils               정규표현식 패턴, 공통 함수
 ├─ App.js
```

<br/>

### 📌 Branch Naming Convention
```
main ── develop ── feature
└── hotfix
```

- main : 배포 중인 서비스 브랜치
  + 실제 서비스가 이루어지는 브랜치입니다.
  + 해당 브랜치를 기준으로 develop 브랜치가 분기됩니다.
  + 긴급 수정 안건에 대해서는 hotfix 브랜치에서 처리합니다.
- develop : 작업 브랜치
  + 개발, 테스트, 릴리즈 등 배포 전 단계의 기준이 되는 브랜치입니다.
  + 프로젝트의 default 브랜치입니다.
  + 해당 브랜치에서 feature 브랜치가 분기됩니다.
- feature : 기능 단위 구현
  + 개별 개발자가 맡은 작업을 개발하는 브랜치입니다.
  + feature/(feature-name)처럼 머릿말-꼬릿말(개발하는 기능)으로 명명합니다.
  + kebab-case 네이밍 규칙을 준수합니다. 
- hotfix : 서비스 중 긴급 수정 사항 처리
  + main에서 분기합니다.

<br/>

### 📌 Commit Convention
| emoji | message | description |
| --- | --- | --- |
| :sparkles: | feat | 새로운 기능 추가, 기존 기능을 요구 사항에 맞추어 수정 |
| :bug: | fix | 기능에 대한 버그 수정 |
| :green_heart: | build | 빌드 관련 수정 |
| :pushpin: | chore | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
| :construction_worker: | ci | CI 관련 설정 수정 |
| :closed_book: | docs | 문서(주석) 수정 |
| :art: | style | 코드 스타일, 포맷팅에 대한 수정 |
| :recycle: | refactor | 기능 변화가 아닌 코드 리팩터링 |
| :white_check_mark: | test | 테스트 코드 추가/수정 |
| :bookmark: | release | 버전 릴리즈 |
| :ambulance: | hotfix | 긴급 수정 |
| :twisted_rightwards_arrows: | branch | 브랜치 추가/병합 |
