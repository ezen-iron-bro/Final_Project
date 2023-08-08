import { useDispatch, useSelector } from "react-redux";
import { ReplyListContainer } from "../../styled/valorantStyled";
import ReplyItem from "./ReplyItem";
import { changeInput, replyAdd } from "../../store/modules/commuSlice";
import { useState } from "react";
const ReplyList = ({ commentReply, detailItem, commentId, showReplyForm, setShowReplyForm }) => {
  const { replyId, replyText } = commentReply;
  const { id } = detailItem;
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const { authed, currentUser } = useSelector(state => state.auth);
  const { userId } = currentUser;
  const onClickReply = () => {
    setShowReplyForm(!showReplyForm);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (authed) {
      dispatch(replyAdd({ detailItemId: id, commentId: commentId, replyText: inputText, userId: userId }));
      setInputText("");
      setShowReplyForm(false);
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };
  return (
    <ReplyListContainer className="Reply-li">
      <ul>
        {showReplyForm && (
          <div className="reply-write">
            <form method="POST" onSubmit={onSubmit}>
              <div className="reply-write-inner">
                <div className="reply-write-content">
                  <textarea
                    name="replyText"
                    id="reply-textarea"
                    maxLength="1000"
                    placeholder="주제와 무관한 댓글,타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."
                    onChange={e => setInputText(e.target.value)}
                    value={inputText}
                  ></textarea>
                </div>
                <div className="reply-write-footer">
                  <div className="reply-write-addition">
                    <div className="reply-write-addition-upload">
                      <input type="file" name="imageURL" />
                      <button>
                        <img src="/images/community/icon-picture@2x.png" alt="" />
                        <span>사진</span>
                      </button>
                    </div>
                  </div>
                  <div className="reply-write-length">(0/1000)</div>
                  <div className="reply-write-submit">
                    <button type="submit" className="reply-submit">
                      작성
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
        {commentReply.map(item => (
          <ReplyItem key={item.replyId} item={item} detailItem={detailItem} />
        ))}
      </ul>
    </ReplyListContainer>
  );
};

export default ReplyList;
