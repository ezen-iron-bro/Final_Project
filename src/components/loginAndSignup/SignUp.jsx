import { SignUpContainer } from "../../styled/valorantStyled";
import { Link } from "react-router-dom";
import Box1 from "./signupbox/Box1";
import Box2 from "./signupbox/Box2";
import Box3 from "./signupbox/Box3";
import { useCallback, useState } from "react";
const SignUp = () => {
  const [step, setStep] = useState(1);
  const [userID, setUserID] = useState("");

  const handleNext = useCallback(() => {
    if (step < 3) {
      setStep(step + 1);
    }
  }, [step]);

  const renderPagination = () => {
    return [...Array(3)].map((_, index) => (
      <span key={index} className={`pagination ${step === index + 1 ? "current" : ""}`}></span>
    ));
  };

  const renderBox = () => {
    switch (step) {
      case 1:
        return <Box1 handleNext={handleNext} />;
      case 2:
        return <Box2 handleNext={handleNext} userID={userID} setUserID={setUserID} />;
      case 3:
        return <Box3 handleNext={handleNext} userID={userID} />;
      default:
        return <Box1 handleNext={handleNext} />;
    }
  };

  return (
    <SignUpContainer>
      <div className="signup-header">
        <div className="inner">
          <h2>
            <Link to="/">
              <img src="./images/headerFooter/main_logo.png" alt="VALORANT" />
            </Link>
          </h2>
        </div>
      </div>
      <div className="signup-section">
        <div className="signup-content">
          <h3>발로란트 계정 생성</h3>
          <div className="pagination-box">{renderPagination()}</div>
          <div className="signup-box">{renderBox()}</div>
        </div>
      </div>
      <div className="signup-footer">
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
        </ul>
        <p>© 2020 RIOT GAMES, INC. ALL RIGHTS RESERVED.</p>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
