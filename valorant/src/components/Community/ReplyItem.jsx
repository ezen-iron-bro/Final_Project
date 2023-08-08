import { useDispatch } from "react-redux";
import { changeInput, replyAdd } from "../../store/modules/commuSlice";
import { ReplyItemContainer } from "../../styled/valorantStyled";

const ReplyItem = ({ item }) => {
  const { replyText, replyAuthor, replyDate } = item;

  return (
    <ReplyItemContainer>
      <div className="reply-meta">
        <span className="reply-name">{replyAuthor}</span>
        <span className="reply-date">{replyDate}</span>
      </div>
      <div className="reply-text">
        <p>{replyText}</p>
      </div>
      <div className="reply-buttons">
        <ul>
          <li>
            <button className="reply-button">신고</button>
          </li>
          <li>
            <button className="reply-button">
              <img src="/images/community/icon-reply@2x.png" alt="" width="16" />
              답글 달기
            </button>
          </li>
        </ul>
      </div>
    </ReplyItemContainer>
  );
};

export default ReplyItem;
