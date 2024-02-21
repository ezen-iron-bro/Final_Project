import { ContentsItemContainer } from "../../styled/valorantStyled";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ContentsItem = ({ item }) => {
  const { id, title, comment, category, date, Author, likeCount } = item;
  const { authed } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const onDetail = () => {
    if (authed === false) {
      alert("로그인 후 이용하실 수 있는 서비스입니다.\n우측 상단의『지금 플레이하기』를 누르고, \n 회원가입 또는 로그인을 진행해주세요.");
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
    </ContentsItemContainer>
  );
};

export default ContentsItem;
