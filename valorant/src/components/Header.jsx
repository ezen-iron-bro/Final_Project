import React, { useEffect, useState } from "react";
import { HeaderContainer } from "../styled/valorantStyled";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/modules/authSlice";
const Header = ({ setIsPopupShow }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const { currentUser, authed } = useSelector(state => state.auth);
  const [isUserShow, setIsUserShow] = useState();
  const dispatch = useDispatch();
  const onUser = () => {
    setIsUserShow(true);
  };
  const offUser = () => {
    setIsUserShow(false);
  };
  return (
    <HeaderContainer id="header">
      <div className="header-left">
        <h1>
          <Link to="/">
            <img src="/images/headerFooter/main_logo.png" alt="VALORANT" />
          </Link>
        </h1>
        <NavBar />
      </div>
      <ul className="header-right">
        <li className={isSearchShow ? "search on" : "search"} onClick={() => setIsSearchShow(true)}>
          <input type="text" />
          <i className="xi-search"></i>
        </li>
        <li
          style={isSearchShow ? { visibility: "visible" } : {}}
          className="close-btn"
          onClick={() => setIsSearchShow(false)}
        >
          <i style={isSearchShow ? { opacity: 1 } : {}} className={authed ? "xi-close-thin on" : "xi-close-thin"}></i>
        </li>
        <li className="global">
          <i className="xi-globus"></i>
        </li>
        {authed ? (
          <li onMouseOver={onUser} onMouseOut={offUser} className="login-play-now">
            <Link to="#">
              {currentUser.userId}
              <i className="xi-caret-down-min"></i>{" "}
            </Link>
            <div className={isUserShow ? "sub-menu on" : "sub-menu"} onMouseOver={onUser} onMouseOut={offUser}>
              <Link to="/download">
                <p>게임 다운로드</p>
              </Link>
              <Link to="/">
                <p onClick={() => dispatch(logout())}>로그아웃</p>
              </Link>
            </div>
          </li>
        ) : (
          <span className="play-now" onClick={() => setIsPopupShow(true)}>
            지금 플레이하기
          </span>
        )}
      </ul>
    </HeaderContainer>
  );
};

export default Header;
