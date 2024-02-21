import React from "react";
import { FooterContainer } from "../styled/valorantStyled";
import { BiLogoFacebookCircle, BiLogoYoutube } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterContainer id="footer">
      <div className="footer-links">
        <ul>
          <li>
            <a href="/download">게임 다운로드</a>
          </li>
          <li>
            <a href="#">라이엇 모바일 컴패니언 앱 다운로드</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <a href="#">
              <BiLogoFacebookCircle />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogoYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-logos">
        <div className="main-logos">
          <img src="/images/headerFooter/main_logo.png" alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          © 2023 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are trademarks, service marks, and/or
          registered trademarks of Riot Games, Inc.
        </p>
        <div className="markup">
          <br />
          라이엇게임즈코리아 유한회사 서울특별시 강남구 테헤란로 521 30층 (삼성동, 파르나스타워)
          <br />
          대표자 : 조혁진 | 대표전화 : 02-3454-1560 | FAX : 02-3454-1565
          <br />
          사업자등록번호 : 120-87-68488 |사업자등록번호 : 120-87-68488 |
        </div>
      </div>
      <div className="legal-links">
        <ul>
          <li>
            <a href="#">사용약관</a>
          </li>
          <li>
            <a href="#">개인정보 처리방침</a>
          </li>
          <li>
            <a href="#">게임시간 선택제</a>
          </li>
          <li>
            <a href="#">사업자정보확인</a>
          </li>
          <li>
            <a href="#">쿠키 설정</a>
          </li>
        </ul>
      </div>
      <div className="game-rating">
        <div>
          <a href="#">
            <img src="/images/headerFooter/Korea-15.png" alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/headerFooter/Korea-violence_descriptor-1.png" alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="/images/headerFooter/kr-ratings-footer.png" alt="" />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
