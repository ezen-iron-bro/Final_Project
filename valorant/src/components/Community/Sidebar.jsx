import React, { useState } from "react";
import { SidebarContainer } from "../../styled/valorantStyled";
import { categorySort } from "../../store/modules/commuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const { data } = useSelector(state => state.community);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SidebarContainer className="sidebar-wrap">
      <div className="sidebar-menu-content">
        <div className="sidebar-menu">
          <div className="sidebar-menu title">홈</div>
          <ul className="sidebar-menu list">
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("전체"));
              }}
            >
              전체
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu title">정보</div>
          <ul className="sidebar-menu list">
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("ValCom기획"));
              }}
            >
              ValCom 기획
            </li>
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("유저 뉴스"));
              }}
            >
              유저 뉴스
            </li>
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("팁과 노하우"));
              }}
            >
              팁과 노하우
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu title">커뮤니티</div>
          <ul className="sidebar-menu list">
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("자유"));
              }}
            >
              자유
            </li>
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("유머"));
              }}
            >
              유머
            </li>
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("영상"));
              }}
            >
              영상
            </li>
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("유저 찾기"));
              }}
            >
              유저 찾기
            </li>
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("사건 사고"));
              }}
            >
              사건 사고
            </li>
            <li
              className="sidebar-menu item"
              onClick={() => {
                navigate("/community");
                dispatch(categorySort("팬 아트"));
              }}
            >
              팬 아트
            </li>
          </ul>
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
