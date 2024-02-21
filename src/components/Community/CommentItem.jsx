import { useDispatch, useSelector } from "react-redux";
import { commentDownLike, commentUpLike } from "../../store/modules/commuSlice";
import { CommentItemContainer } from "../../styled/valorantStyled";
import ReplyList from "./ReplyList";
import { useState } from "react";
const CommentItem = ({ item, detailItem }) => {
  const { commentId, commentText, commentAuthor, commentDate, commentIslike, commentLikeCount, commentReply } = item;
  const { id } = detailItem;
  const dispatch = useDispatch();
  const [showReplyForm, setShowReplyForm] = useState(false);
  const { authed } = useSelector(state => state.auth);

  const onClickReply = () => {
    if (authed) {
      setShowReplyForm(!showReplyForm);
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };
  return (
    <CommentItemContainer>
      <div className="comment-li">
        <div className="comment-vote">
          <button
            className="comment-vote-up-button"
            onClick={() => {
              if (authed) {
                dispatch(commentUpLike({ detailItemId: id, commentId: commentId }));
              } else {
                alert("로그인이 필요한 서비스입니다.");
              }
            }}
          >
            추천
          </button>
          <div className="comment-vote-count">{commentLikeCount}</div>
          <button
            className="comment-vote-down-button"
            onClick={() => {
              if (authed) {
                dispatch(commentDownLike({ detailItemId: id, commentId: commentId }));
              } else {
                alert("로그인이 필요한 서비스입니다.");
              }
            }}
          >
            비추천
          </button>
        </div>
        <div className="comment-meta">
          <span className="comment-name">{commentAuthor}</span>
          <span className="comment-date">{commentDate}</span>
        </div>
        <div className="comment-text">
          <p>{commentText}</p>
        </div>
        <div className="comment-buttons">
          <ul>
            <li>
              <button className="comment-button">신고</button>
            </li>
            <li>
              <button className="comment-button" onClick={onClickReply}>
                <img src="/images/community/icon-reply@2x.png" alt="" width="16" />
                답글 달기
              </button>
            </li>
          </ul>
        </div>
      </div>

      <ReplyList
        commentReply={commentReply}
        detailItem={detailItem}
        commentId={commentId}
        showReplyForm={showReplyForm}
        setShowReplyForm={setShowReplyForm}
      />
    </CommentItemContainer>
  );
};

export default CommentItem;
