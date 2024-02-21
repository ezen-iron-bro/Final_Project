import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Box3 = ({ handleNext, userID }) => {
  return (
    <>
      <div className="signup-box-header">
        <h5>계정 생성 완료</h5>
      </div>
      <div className="signup-box-text">
        <p>
          발로란트 계정 생성이 완료되었습니다. <br />
          이제 게임으로 돌아가 로그인 하실 수 있습니다.
        </p>
      </div>
      <div className="user-id-info">
        <p>계정이름</p>
        <strong>{userID}</strong>
      </div>

      <button className="last-btn on">
        <Link to="/">
          <span>
            <AiFillHome />
          </span>
        </Link>
      </button>

      <div className="signup-box-footer">
        <p>
          동일 명의 계정에 등록되어 있는 이메일 주소 정보가 반영되어 이메일 인증 단계가 생략되었습니다.
          <a href="#">계정 관리</a>에서 이메일 주소를 변경하실 수 있습니다.
        </p>
      </div>
    </>
  );
};

export default Box3;
