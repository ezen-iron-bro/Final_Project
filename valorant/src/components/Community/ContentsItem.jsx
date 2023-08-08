import { ContentsItemContainer } from "../../styled/valorantStyled";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ContentsItem = ({ item }) => {
  const { id, title, comment, category, date, Author, likeCount } = item;
  const { authed } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const onDetail = () => {
    if (authed === false) {
      alert("로그인 후 이용하실 수 있는 서비스입니다.");
      navigate("/community");
    }
  };
  return (
    <ContentsItemContainer onClick={onDetail}>
      <div className="vote">
        <img src="/images/community/icon-vote-up.png" alt="" />
        <div>{likeCount}</div>
      </div>
      <div className="content">
        <Link to={`/community/${id}`}>
          <div className="title">
            <span className="post-title">{title}</span>
            <em>[{comment ? comment.length : 0}]</em>
          </div>
        </Link>
        <div className="meta">
          <div className="meta-item">{category}</div>
          <div className="meta-item">{date}</div>
          <div className="meta-item">{Author}</div>
        </div>
      </div>
      <div className="thumbnail">
        <a href="">
          <img src="/images/community/viper-specs.png" alt="" />
        </a>
      </div>
    </ContentsItemContainer>
  );
};

export default ContentsItem;
