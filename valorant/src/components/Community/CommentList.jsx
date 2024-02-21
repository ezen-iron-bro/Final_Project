import { CommentListContainer } from "../../styled/valorantStyled";
import CommentItem from "./CommentItem";
const CommentList = ({ comment, detailItem }) => {
  return (
    <CommentListContainer className="comment-sort">
      <div className="comment-list">
        <ul>
          {comment.map(item => (
            <CommentItem key={item.commentId} item={item} detailItem={detailItem} />
          ))}
        </ul>
      </div>
    </CommentListContainer>
  );
};

export default CommentList;
