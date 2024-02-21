# Valorant Project

## 프로젝트 소개

본 프로젝트는 인기 온라인 게임인 '발로란트'의 기존 메인 홈페이지를 바탕으로  
**React와 상태 관리를 위한 Redux를 연습하기 위한 새로운 홈페이지를 제작하는 것이 목적**입니다.

기존 홈페이지와는 다르게  
**게임 내의 굿즈를 구매( 굿즈 페이지 )** 하며,  
**다른 사용자들과 소통할 수 있는 공간( 커뮤니티 페이지 )을 제공**하는 기능을 구현하였습니다.

## 멤버 구성

- [김기철](https://github.com/habi-er) - 메인, 순위표, 커뮤니티, 로그인/회원가입
- [이원철](https://github.com/wonchuring) - 게임정보, 미디어, 굿즈

## 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=sty ledcomponents&logoColor=white">

---

## Demo

![](https://github.com/ezen-iron-bro/Final_project/assets/133613789/f9d0e765-0753-4692-aa70-786b293e45e7)

[link](https://ezen-iron-bro.github.io/project-view/)

## 주요 기능

### 1. 메인

![be6fea2b-18c2-436d-bdab-868920274eb4](https://github.com/ezen-iron-bro/Final_project/assets/133613789/747615fc-6064-420f-aa1c-350767bde367)

- 스크롤 시, 헤드 고정
- 스크롤 시, Background 동적 처리
- 최초 스크롤 시, 문자 동적 처리
- Route를 통해 여러 페이지 연결

### 2. 로그인 / 회원가입

![signuplogin](https://github.com/ezen-iron-bro/Final_project/assets/133613789/e2134f42-15e4-4e45-92fa-2e3a9f320c55)

- Redux를 이용하여 로그인 및 회원가입 구현에 이용되는 유저 정보 관리
- 약관동의 체크박스
- 정규식을 통한 회원가입 로직 제한
- localStorage로 회원가입 및 로그인 구현

### 3. 게임정보

1. 요원

   ![gameinfo-agents](https://github.com/ezen-iron-bro/Final_project/assets/133613789/40ea4ef2-172a-4783-9b7d-69d4a931ddf4)

2. 맵

   ![gameinfo-maps](https://github.com/ezen-iron-bro/Final_project/assets/133613789/528cce53-f5e6-4b36-8583-bbe19d95bd74)

3. 무기고

   ![gameinfo-weppon](https://github.com/ezen-iron-bro/Final_project/assets/133613789/5d644a7e-10bf-4284-9bba-b204101ea8c0)

- swiper를 이용한 각각의 캐릭터 정보 제공
- styled-components를 통한 SASS 작업
- UI 향상에 집중된 CSS를 경험

### 4. 미디어

![media](https://github.com/ezen-iron-bro/Final_project/assets/133613789/5a9a90af-9fe3-4b92-afc3-97004c284905)

- display : grid로 구현
- Fisher-Yates 알고리즘을 사용하여 렌더링시마다 무작위 shuffle 기능 구현
- 각 item 클릭시 이미지 popup 및 slide 기능 제공

### 5. 순위표

![readerborad](https://github.com/ezen-iron-bro/Final_project/assets/133613789/6126acf9-1369-4c28-b9a8-01d36b2d5300)

- Redux를 이용하여 리더보드 구현
- Pagination
- Search Box
- 플레이어 이름 검색 시, 해당 플레이어가 있는 Page로 자동 Page 이동 및 검색된 플레이어 강조 표시

### 6. 굿즈

![goods](https://github.com/ezen-iron-bro/Final_project/assets/133613789/efb5302d-0fc8-4f59-94d4-b1b3c96e6fb3)

- Redux를 이용하여 굿즈 아이템 관리 및 구현
- 장바구니 기능 구현

### 7. 커뮤니티

![community](https://github.com/ezen-iron-bro/Final_project/assets/133613789/8d0469e9-76f3-4874-8e2b-dd43efe85db8)

- Redux를 이용하여 커뮤니티 구현에 이용되는 각종 Data의 상태 관리
- 게시글 마다 카테고리, 좋아요, 업로드 날짜, 작성자, 댓글 수 UI로 제공
- 게시글 및 댓글 업로드 시, 현재 날짜로 자동 출력
- 게시글 24시간 기준 : 최다 댓글 / 최고 조회 정렬
- 게시글 확인 시 조회수 증가 / 좋아요 싫어요 증가
- 인기(좋아요 기준), 최신(날짜 기준)으로 정렬
- 댓글에 대댓글 기능
