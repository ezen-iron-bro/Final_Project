import React, { useEffect, useState } from "react";
import { HomeAgentsContainer } from "../../styled/valorantStyled";
import { Link } from "react-router-dom";
const HomeAgents = () => {
  const [agentsPosition, setAgentsPosition] = useState(0);
  const [agentsBgPosition, setAgentsBgPosition] = useState(0);
  const [textPosition, setTextPosition] = useState(120);

  const agentsImgMove = () => {
    const agentsImg = document.querySelector(".add-background");
    const agentsBgImg = document.querySelector(".background-center");
    if (agentsImg && agentsBgImg) {
      const rect = agentsImg.getBoundingClientRect();
      const imageTop = rect.top + window.scrollY + rect.height / 10;
      const forMoveValue = rect.top + window.scrollY + rect.height + rect.height / 2;
      const viewportBottom = window.innerHeight + window.scrollY;
      if (viewportBottom > imageTop) {
        setAgentsPosition((viewportBottom - forMoveValue) * -0.15);
        setAgentsBgPosition((viewportBottom - forMoveValue) * 0.15);
      }
    }
  };

  const TextMove = () => {
    const Text = document.querySelector(".ag-title");
    if (Text) {
      const rect = Text.getBoundingClientRect();
      const TextTop = rect.top + window.scrollY;
      const viewportBottom = window.innerHeight + window.scrollY;
      if (viewportBottom > TextTop) {
        setTextPosition(0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", agentsImgMove);
    window.addEventListener("scroll", TextMove);
    return () => {
      window.removeEventListener("scroll", agentsImgMove);
      window.removeEventListener("scroll", TextMove);
    };
  }, []);
  return (
    <HomeAgentsContainer className="main-content home-agent">
      <div className="background-container">
        <div className="background-side"></div>
        <div
          className="background-center"
          style={{ transition: "0.3s ease-out", transform: `translateY(${agentsBgPosition}px)` }}
        ></div>
      </div>
      <div className="section-wrapper agents">
        <div className="copy-content">
          <h2 className="side-up-title">
            <span className="ag-title" style={{ transform: `translateY(${textPosition}%)` }}>
              요원
            </span>
          </h2>
          <h5 className="ag-subtitle">승부를 가르는 전략</h5>
          <p className="ag-description">
            <span>
              무기가 전부가 아닙니다. 상황에 맞춰 사격을 보조하는 빠르고 치명적인 스킬을 갖춘 요원을 선택하세요.
              요원들은 저마다 독특한 전투 스타일을 자랑합니다.
            </span>
          </p>
          <Link to="/gameinfo/agent">
            <button className="ag-btn">
              <div className="btn-style">
                <span className="hover-mask"></span>
                <span className="btn-text">모든 요원 보기</span>
              </div>
            </button>
          </Link>
        </div>
        <div className="animate-agents">
          <div
            className="add-background"
            style={{ transition: "0.3s ease-out", transform: `translateY(${agentsPosition}px)` }}
          ></div>
        </div>
      </div>
    </HomeAgentsContainer>
  );
};

export default HomeAgents;
