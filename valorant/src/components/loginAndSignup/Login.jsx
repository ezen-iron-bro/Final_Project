import { LoginContainer } from "../../styled/valorantStyled";
import { FiArrowRight } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { IoLogoXbox } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/modules/authSlice";
import { useEffect, useState } from "react";
const Login = () => {
  const { user,authed, loginFailed } = useSelector(state => state.auth);
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // 로그인이 성공한 경우 메인 페이지로 이동
    if (authed) {
      navigate("/");
    }
  }, [authed, navigate]);

  const onSubmit = e => {
    e.preventDefault();
    if (!userID || !userPassword) {
      alert("아이디와 비밀번호를 입력하세요.");
    } else {
      dispatch(login({ userId: userID, userPwd: userPassword }));
    }
  };
  return (
    <LoginContainer>
      <div className="login-header">
        <h2>
          <Link to="/">
            <img src="./images/headerFooter/main_logo.png" alt="VALORANT" />
          </Link>
        </h2>
      </div>
      <div className="login-box">
        <h3>로그인</h3>
        {loginFailed && <p className="loginFailed">아이디와 비밀번호가 일치하지 않습니다.</p>}
        <form className="login-form" onSubmit={onSubmit}>
          <div className="login-id">
            <input
              type="text"
              value={userID}
              onChange={e => setUserID(e.target.value)}
              className={loginFailed ? "on" : undefined}
            />
            <label htmlFor="user-id" className={userID !== "" ? "on" : ""}>
              계정이름
            </label>
            <span className={userID !== "" ? "on" : ""}>계정이름</span>
          </div>
          <div className="login-pw">
            <input
              type="password"
              value={userPassword}
              onChange={e => setUserPassword(e.target.value)}
              className={loginFailed ? "on" : undefined}
            />
            <label htmlFor="user-password" className={userPassword !== "" ? "on" : ""}>
              비밀번호
            </label>
            <span className={userPassword !== "" ? "on" : ""}>비밀번호</span>
          </div>
          <div className="login-easy">
            <button className="login-facebook">
              <span>
                <BiLogoFacebookCircle />
              </span>
            </button>
            <button className="login-google">
              <span>
                <FcGoogle />
              </span>
            </button>
            <button className="login-apple">
              <span>
                <BsApple />
              </span>
            </button>
            <button className="login-xbox">
              <span>
                <IoLogoXbox />
              </span>
            </button>
          </div>
          <div className="keep-login">
            <input type="checkbox" id="login-keep" />
            <label htmlFor="login-keep">로그인 상태 유지</label>
          </div>
          <button type="submit" className={userID !== "" && userPassword !== "" ? "on" : ""}>
            <span>
              <FiArrowRight />
            </span>
          </button>
        </form>
        <div className="help-text">
          <Link to="/signup">
            <p>로그인이 안되시나요?</p>
          </Link>
          <Link to="/signup">
            <p>계정 생성하기</p>
          </Link>
        </div>
      </div>
      <div className="login-footer">
        <ul>
          <li>
            <a href="#">고객센터</a>
          </li>
          <li>
            <a href="#">개인정보 처리방침</a>
          </li>
          <li>
            <a href="#">서비스 약관</a>
          </li>
          <li>
            <a href="#">쿠키 설정</a>
          </li>
          <li>
            KO
            <span>
              <RiGlobalLine />
            </span>
          </li>
        </ul>
        <p>© 2020 RIOT GAMES. ALL RIGHTS RESERVED.</p>
      </div>
    </LoginContainer>
  );
};

export default Login;
