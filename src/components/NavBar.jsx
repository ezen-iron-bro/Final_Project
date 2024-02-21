import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBarContanier } from "../styled/valorantStyled";

const NavBar = () => {
  const [isGameInfoShow, setIsGameInfoShow] = useState(false);
  const [isMediaShow, setIsMediaShow] = useState(false);
  const [isLeaderboardsShow, setIsLeaderboardsShow] = useState(false);
  const [isGoodsShow, setIsGoodsShow] = useState(false);
  const [isCommunityShow, setIsCommunityShow] = useState(false);

  const onGameInfoSubMenu = () => {
    setIsGameInfoShow(true);
  };

  const offGameInfoSubMenu = () => {
    setIsGameInfoShow(false);
  };

  const onMediaSubMenu = () => {
    setIsMediaShow(true);
  };

  const offMediaSubMenu = () => {
    setIsMediaShow(false);
  };

  const onLeaderboardsSubMenu = () => {
    setIsLeaderboardsShow(true);
  };

  const offLeaderboardsSubMenu = () => {
    setIsLeaderboardsShow(false);
  };

  const onGoodsSubMenu = () => {
    setIsGoodsShow(true);
  };

  const offGoodsSubMenu = () => {
    setIsGoodsShow(false);
  };

  const onCommunitySubMenu = () => {
    setIsCommunityShow(true);
  };

  const offCommunitySubMenu = () => {
    setIsCommunityShow(false);
  };

  return (
    <NavBarContanier className="nav">
      <ul className="gnb">
        <li onMouseOver={onGameInfoSubMenu} onMouseOut={offGameInfoSubMenu}>
          <Link to="#">
            게임 정보 <i className="xi-caret-down-min"></i>
          </Link>
          <div className={isGameInfoShow ? "sub-menu on" : "sub-menu"} onMouseOver={onGameInfoSubMenu} onMouseOut={offGameInfoSubMenu}>
            <Link to="gameinfo/agent">
              <p>요원</p>
            </Link>
            <Link to="gameinfo/map">
              <p>맵</p>
            </Link>
            <Link to="gameinfo/weapon">
              <p>무기고</p>
            </Link>
          </div>
        </li>
        <li onMouseOver={onMediaSubMenu} onMouseOut={offMediaSubMenu}>
          <Link to="/media">미디어</Link>
          <div className={isMediaShow ? "sub-menu onlyLine" : "sub-menu"} onMouseOver={onMediaSubMenu} onMouseOut={offMediaSubMenu}></div>
        </li>
        <li onMouseOver={onLeaderboardsSubMenu} onMouseOut={offLeaderboardsSubMenu}>
          <Link to="/leaderboards">순위표</Link>
          <div className={isLeaderboardsShow ? "sub-menu onlyLine" : "sub-menu"} onMouseOver={onLeaderboardsSubMenu} onMouseOut={offLeaderboardsSubMenu}></div>
        </li>
        <li onMouseOver={onGoodsSubMenu} onMouseOut={offGoodsSubMenu}>
          <Link to="/goods">굿즈</Link>
          <div className={isGoodsShow ? "sub-menu onlyLine" : "sub-menu"} onMouseOver={onGoodsSubMenu} onMouseOut={offGoodsSubMenu}></div>
        </li>
        <li onMouseOver={onCommunitySubMenu} onMouseOut={offCommunitySubMenu}>
          <Link to="/community">커뮤니티</Link>
          <div className={isCommunityShow ? "sub-menu onlyLine" : "sub-menu"} onMouseOver={onCommunitySubMenu} onMouseOut={offCommunitySubMenu}></div>
        </li>
      </ul>
    </NavBarContanier>
  );
};

export default NavBar;
