import React from "react";
import ToolBar from "./ToolBar";
import { CommuWritingContainer } from "../../styled/valorantStyled";
import { useDispatch, useSelector } from "react-redux";
import CommuVisual from "./CommuVisual";
import Sidebar from "./Sidebar";
import SidebarRight from "./SidebarRight";
import { useNavigate } from "react-router-dom";
import { changeInput, onListAdd } from "../../store/modules/commuSlice";
const CommuWriting = () => {
  const navigate = useNavigate();
  const { newData, data } = useSelector(state => state.community);
  const { currentUser } = useSelector(state => state.auth);
  const { userId } = currentUser;
  const dispatch = useDispatch();
  const { title, content, category } = newData;
  const onSubmit = e => {
    e.preventDefault();
    if (!title) return;
    dispatch(onListAdd({ newData: newData, userId: userId }));
    dispatch(changeInput({ name: "title", value: "" }));
    dispatch(changeInput({ name: "content", value: "" }));
    navigate("/community");
  };
  return (
    <>
      <CommuVisual />

      <CommuWritingContainer>
        <div className="inner">
          <Sidebar />
          <form method="post" id="write-form" onSubmit={onSubmit}>
            <div className="write-header">
              <h2>글쓰기</h2>
            </div>
            <div className="select-category">
              <label>
                <select
                  name="category"
                  value={category}
                  onChange={e => dispatch(changeInput({ name: "category", value: e.target.value }))}
                >
                  <option value="ValCom기획">ValCom기획</option>
                  <option value="팁과 노하우">팁과 노하우</option>
                  <option value="자유">자유</option>
                  <option value="유머">유머</option>
                  <option value="영상">영상</option>
                  <option value="유저 찾기">유저 찾기</option>
                  <option value="사건 사고">사건 사고</option>
                  <option value="팬 아트">팬 아트</option>
                </select>
              </label>
            </div>
            <div className="write-title-input">
              <input
                type="text"
                placeholder="제목"
                name="title"
                onChange={e => dispatch(changeInput({ name: "title", value: e.target.value }))}
                value={title}
              />
            </div>
            <div className="post-link">
              <input type="text" placeholder="동영상 또는 사이트 링크를 입력해주세요. (선택)" name="post-link" />
            </div>
            <ToolBar content={content} />
            <div className="write-buttons">
              <button type="button" onClick={() => navigate("/community")}>
                취소
              </button>
              <button type="submit">작성하기</button>
            </div>
          </form>
          <SidebarRight />
        </div>
      </CommuWritingContainer>
    </>
  );
};

export default CommuWriting;
