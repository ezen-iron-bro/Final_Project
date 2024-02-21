import React, { useEffect, useState } from "react";
import { ContentsItemDetailContainer } from "../../styled/valorantStyled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "./CommentList";
import Sidebar from "./Sidebar";
import SidebarRight from "./SidebarRight";
import CommuVisual from "./CommuVisual";
import { changeInput, commentAdd, upHate, upLike, upViewCount } from "../../store/modules/commuSlice";
import ContentHeader from "./ContentHeader";
const ContentsItemDetail = () => {
  const { communityID } = useParams();
  const { data } = useSelector(state => state.community);
  const { authed, currentUser } = useSelector(state => state.auth);
  const { userId } = currentUser;
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const detailItem = data.find(item => item.id === Number(communityID));
  const { id, title, category, date, Author, content, comment, viewCount, islike, ishate, likeCount, hateCount } =
    detailItem;
  const { commentId, commentText, commentAuthor, commentDate, commentIslike, commentLikeCount, commentReply } = comment;

  const onUpLike = () => {
    if (authed) {
      dispatch(upLike(detailItem));
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };
  const onUpHate = () => {
    if (authed) {
      dispatch(upHate(detailItem));
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    if (authed) {
      dispatch(commentAdd({ detailItemId: id, commentText: inputText, userId: userId }));
      setInputText("");
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };
  useEffect(() => {
    dispatch(upViewCount(detailItem));
  }, []);
  // HTML 태그를 제거하는 함수
  const removeHTMLTags = html => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // 게시물 내용에서 HTML 태그가 제거된 텍스트
  const plainTextContent = removeHTMLTags(content);
  return (
    <>
      <CommuVisual />
      <ContentsItemDetailContainer>
        <div className="inner">
          <Sidebar />
          <div className="contents-item-detail-wrap">
            <ContentHeader />
            <section className="for-space"></section>
            <div className="commu-detail-header">
              <div className="commu-detail-title">{title}</div>
              <div className="commu-detail-meta">
                <div className="meta-list-left">
                  <div className="meta-item">{category}</div>
                  <div className="meta-item"> {date}</div>
                  <div className="meta-item">{Author}</div>
                </div>
                <div className="meta-list-right">
                  <div className="meta-item">
                    <span>조회 {viewCount}</span>
                  </div>
                  <div className="meta-item">
                    <span>댓글 {comment.length}</span>
                  </div>
                  <div className="meta-item">
                    <span>추천 {islike}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="commu-detail-contents-wrap">
              <div className="for-space"></div>
              <div className="commu-detail-content">
                <p>{plainTextContent}</p>
              </div>
            </div>
            <div className="vote-box">
              <button type="button" onClick={onUpLike}>
                <span className="vote-up"></span>
                <span className="vote-up-count">{likeCount}</span>
              </button>
              <button type="button" onClick={onUpHate}>
                <span className="vote-down"></span>
                <span className="vote-down-count">{hateCount}</span>
              </button>
            </div>
            <div className="commu-detail-footer">
              <ul>
                <li className="share">
                  <button>
                    <img src="/images/community/icon-share@2x.png" alt="" />
                    <span>공유하기</span>
                  </button>
                </li>
                <li className="report">
                  <button>
                    <span>신고</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="for-space"></div>
            <div className="comment-wrap">
              <div className="comment-header">
                <div>
                  <h2>댓글</h2>
                  <span className="comment-count">
                    총 <em>{comment.length}</em> 개
                  </span>
                </div>
              </div>

              <div className="comment-write">
                <form method="POST" onSubmit={onSubmit}>
                  <div className="comment-write-inner">
                    <div className="comment-write-content">
                      <textarea
                        name="commentText"
                        id="comment-textarea"
                        maxLength="1000"
                        placeholder="주제와 무관한 댓글,타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."
                        onChange={e => setInputText(e.target.value)}
                        value={inputText}
                      ></textarea>
                    </div>
                    <div className="comment-write-footer">
                      <div className="comment-write-addition">
                        <div className="comment-write-addition-upload">
                          <input type="file" name="imageURL" />
                          <button>
                            <img src="/images/community/icon-picture@2x.png" alt="" />
                            <span>사진</span>
                          </button>
                        </div>
                      </div>
                      <div className="comment-write-length">(0/1000)</div>
                      <div className="comment-write-submit">
                        <button type="submit" className="comment-submit">
                          작성
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="for-space"></div>
              <CommentList comment={comment} detailItem={detailItem} />
            </div>
          </div>
          <SidebarRight />
        </div>
      </ContentsItemDetailContainer>
    </>
  );
};

export default ContentsItemDetail;
