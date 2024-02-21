import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../store/modules/authSlice";

const Box2 = ({ handleNext, userID, setUserID }) => {
  const validateUserID = userID => {
    return userID.toLowerCase().match(/^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,24}$/);
  };

  const validatePwd = password => {
    return password.toLowerCase().match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
  };
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [userIDMsg, setUserIDMsg] = useState("영문으로 시작하는 4~24자의 영문+숫자로 입력해주세요.");
  const [pwdMsg, setPwdMsg] = useState("8자리 이상의 영문, 숫자, 특수문자 조합을 입력하세요.");
  const isUserIDValid = validateUserID(userID);
  const isPwdValid = validatePwd(password);
  const isConfirmPwd = password === confirmPwd;
  const { users } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onChangeUserID = e => {
    const currUserID = e.target.value;
    setUserID(currUserID);
    if (!validateUserID(currUserID)) {
      setUserIDMsg("올바른 형식이 아닙니다.");
    } else {
      setUserIDMsg("올바른 아이디 형식입니다.");
    }
  };
  const onChangePwd = e => {
    const currPwd = e.target.value;
    setPassword(currPwd);

    if (!validatePwd(currPwd)) {
      setPwdMsg("8자리 이상의 영문, 숫자, 특수문자 조합을 입력하세요.");
    } else {
      setPwdMsg("안전한 비밀번호입니다.");
    }
  };
  const onChangeConfirmPwd = e => {
    const currConfirmPwd = e.target.value;
    setConfirmPwd(currConfirmPwd);
    if (password !== currConfirmPwd){
      setPwdMsg("비밀번호가 서로 다릅니다. 다시 확인해주세요.")
    }else {
      setPwdMsg("안전한 비밀번호입니다.")
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!isUserIDValid || !isPwdValid || !isConfirmPwd) return alert("아이디 및 비밀번호를 입력해주시기 바랍니다.");
    dispatch(signup({ userId: userID, userPwd: password }));
    handleNext();
  };

  return (
    <>
      <div className="signup-box-header">
        <h5>아이디/비밀번호 입력</h5>
      </div>
      <form className="signup-form" onSubmit={onSubmit}>
        <div className="signup-id">
          <input type="text" id="user-id" onChange={onChangeUserID} value={userID} />
          <label htmlFor="user-id" className={userID !== "" ? "on" : ""}>
            아이디
          </label>
          <span>아이디</span>
        </div>
        <p className="signup-hint">{userIDMsg}</p>
        <div className="signup-pw">
          <input type="password" id="user-password" onChange={onChangePwd} value={password} />

          <label htmlFor="user-password" className={password !== "" ? "on" : ""}>
            비밀번호
          </label>
          <span>비밀번호</span>
        </div>
        <div className="signup-pw-confirm">
          <input type="password" id="user-password2" onChange={onChangeConfirmPwd} value={confirmPwd} />
          <label htmlFor="user-password2" className={confirmPwd !== "" ? "on" : ""}>
            비밀번호 확인
          </label>
          <span>비밀번호 확인</span>
        </div>
        <p className="signup-hint">{pwdMsg}</p>
        <button type="submit" className={isUserIDValid && isPwdValid && isConfirmPwd ? "on" : ""}>
          <span>
            <FiArrowRight />
          </span>
        </button>
      </form>
    </>
  );
};

export default Box2;
