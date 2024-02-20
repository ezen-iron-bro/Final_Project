# Valorant Project

## 프로젝트 소개

본 프로젝트는 인기 온라인 게임인 '발로란트'의 기존 메인 홈페이지를 바탕으로 **React와 상태 관리를 위한 Redux를 연습하기 위한 새로운 홈페이지를 제작하는 것이 목적**입니다.

**기존 홈페이지와는 다르게** 게임 내의 굿즈를 구매( **굿즈 페이지** )하며, 다른 사용자들과 소통할 수 있는 공간( **커뮤니티 페이지** )을 제공하는 기능을 구현하였습니다.

---

### 멤버 구성

- [김기철](https://github.com/habi-er) - 메인, 순위표, 커뮤니티, 로그인/회원가입
- [이원철](https://github.com/wonchuring) - 미디어, 순위표, 굿즈

### 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=sty ledcomponents&logoColor=white">

## Demo

![](https://github.com/ezen-iron-bro/Final_project/assets/133613789/98bd38a1-f7a4-484e-9b24-95bfd6f8ab55)
[link](https://ezen-iron-bro.github.io/project-view/)

## 주요 기능

### 1. 메인

- 스크롤 시, 헤드 고정
- 스크롤 시, Background 동적 처리
- 최초 스크롤 시, 문자 동적 처리
- Route를 통해 여러 페이지 연결

### 2. 로그인 / 회원가입

- 약관동의 체크박스
- 정규식을 통한 회원가입 로직 제한
- localStorage로 회원가입 및 로그인 구현

### 3. 게임정보

### 4. 미디어

### 5. 순위표

- Search Box
- Pagination
- 플레이어 이름 검색 시, 해당 플레이어가 있는 Page로 자동 Page 이동 및 검색된 플레이어 강조 표시

### 6. 굿즈

### 7. 커뮤니티

- 게시글 마다 카테고리, 좋아요, 업로드 날짜, 작성자, 댓글 수 UI로 제공
- 게시글 및 댓글 업로드 시, 현재 날짜로 자동 출력
- 게시글 24시간 기준 최다 댓글 최고 조회 정렬
- 게시글 확인 시 조회수 증가 / 좋아요 싫어요 증가
- 인기(좋아요 기준), 최신(날짜 기준)으로 정렬
- 댓글에 대댓글 기능
