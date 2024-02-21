import React, { useState } from "react";
import { ContentHeaderContainer } from "../../styled/valorantStyled";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeSort, onSearch, recentSort, viewSort } from "../../store/modules/commuSlice";
const ContentHeader = () => {
  const { authed } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("title");
  const onwriting = () => {
    if (authed) {
      navigator("/community/writing");
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };
  const handleSearch = e => {
    e.preventDefault();
    dispatch(onSearch({ keyword, searchType }));
  };
  return (
    <ContentHeaderContainer className="commu-header">
      <div className="commu-header-info">
        <h2 className="commu-header-title">
          <a href="#">전체</a>
        </h2>
        <button className="writing" onClick={onwriting}>
          <img src="/images/community/icon-write@2x.png" alt="" />
        </button>
      </div>
      <div className="sub-menu">
        <ul className="sub-menu-list">
          <li className="sub-menu-item" onClick={() => dispatch(likeSort())}>
            <img src="/images/community/icon-hot@2x.png" alt="" />
            <span>인기</span>
          </li>
          <li className="sub-menu-item" onClick={() => dispatch(recentSort())}>
            <img src="/images/community/icon-new@2x.png" alt="" />
            <span>최신</span>
          </li>
          <li className="sub-menu-item" onClick={() => dispatch(viewSort())}>
            <img src="/images/community/icon-top@2x.png" alt="" />
            <span>TOP</span>
          </li>
        </ul>
        <div className="sub-header-search">
          <form action="" id="sub-search" onSubmit={handleSearch}>
            <label>
              <select
                name="target"
                className="sub-header-search-select"
                id="search-target"
                value={searchType}
                onChange={e => setSearchType(e.target.value)}
              >
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="title_and_content">제목+내용</option>
                <option value="author">작성자</option>
              </select>
            </label>
            <input
              type="text"
              name="q"
              className="sub-header-search-input"
              id="search-input"
              placeholder="검색"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
            />
            <button className="sub-header-search-button">
              <img src="/images/community/icon-search@2x.png" width="24" alt="검색" />
            </button>
          </form>
        </div>
      </div>
    </ContentHeaderContainer>
  );
};

export default ContentHeader;
