import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import BlackHanSans from "../assets/fonts/Black_Han_Sans/BlackHanSans-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  @font-face {

	font-family: "BlackHanSans-Regular";
	src: url(${BlackHanSans});
}

  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;

    color:#333;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  caption { display:none}
  #leaderboards {
    width: 100%;
    overflow: hidden;
  }
  #Home {
    overflow: hidden;
  }
`;
export default GlobalStyle;
