import React from "react";
import { LoginPopupContainer } from "../../styled/valorantStyled";
import { Link } from "react-router-dom";
const LoginPopup = ({ setIsPopupShow }) => {
  return (
    <LoginPopupContainer className="login-popup">
      <div className="bg-forPopup" onClick={() => setIsPopupShow(false)}></div>
      <div className="popup-inner">
        <span onClick={() => setIsPopupShow(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" xmlSpace="preserve">
            <path
              fill="none"
              stroke="#ece8e1"
              d="m61.5 9.5-7 7m-38 38-7 7M30.3 42l2.8-3m8.6 3L30.3 30m11.4 0-2.6 2.8"
            ></path>
          </svg>
        </span>
        <div className="popup-title">
          <h2>
            <span className="slash">\</span>
            발로란트 플레이하기
            <span className="slash">\</span>
          </h2>
        </div>
        <div className="popup-btn">
          <div className="signup">
            <span>아직 발로란트 계정이 없습니다.</span>
            <Link to="/signup">
              <button className="signup-btn">
                <div className="btn-style">
                  <span className="hover-mask"></span>
                  <span className="signup-text">생성하기</span>
                </div>
              </button>
            </Link>
          </div>
          <div className="login">
            <span>발로란트 계정이 있습니다.</span>
            <Link to="/login">
              <button className="login-btn">
                <div className="btn-style">
                  <span className="hover-mask"></span>
                  <span className="login-text">로그인</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </LoginPopupContainer>
  );
};

export default LoginPopup;
