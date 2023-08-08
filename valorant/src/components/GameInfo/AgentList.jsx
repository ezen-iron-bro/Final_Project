import React, { useState, useRef } from "react";
import { AgentListContainer } from "../../styled/valorantStyled";
import { agentData } from "../../assets/api/agentData";

const AgentList = ({ selectAgent, onAgentSelect }) => {
  const carouselContentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const agentClick = (agent) => {
    onAgentSelect(agent);
  };

  const zero = (number) => {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  };

  const mouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientY);
  };

  const mouseUp = () => {
    setIsDragging(false);
  };

  const mouseMove = (e) => {
    if (isDragging) {
      const deltaY = startPosition - e.clientY;
      setScrollOffset((prevOffset) => prevOffset + deltaY);
      carouselContentRef.current.scrollTop += deltaY;
      setStartPosition(e.clientY);
    }
  };
  return (
    <AgentListContainer>
      <div className="agent-background">
        <video preload="true" muted loop playsInline autoPlay data-testid="agent:video" height="100%" width="100%">
          <source src="/images/agent/agent-background-generic.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="section-content">
        <div className="name-wrapper">
          <div className="carousel-content" ref={carouselContentRef} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseLeave={mouseUp} onMouseMove={mouseMove}>
            {agentData.map((item) => (
              <div className="agent-list" key={item.id} onClick={() => agentClick(item)}>
                <span style={{ color: item.id === selectAgent.id ? "#ff4456" : "#ece8e1" ,fontSize: item.id === selectAgent.id ? "18px" : ""}}>{zero(item.id)}</span>
                <h2 style={{ color: item.id === selectAgent.id ? "#ff4456" : "#ece8e1" }}>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="agent-wrapper">
          <img src={selectAgent.agentimg} alt="" />
        </div>
        <div className="agent-details">
          <div className="agent-hero-detail">
            <div className="role-wrapper">
              <h3 className="role-label">
                <span>// 역할</span>
              </h3>
              <div className="role-title-wrapper">
                <h2>{selectAgent.role}</h2>
                <img src={selectAgent.role === "타격대" ? "/images/agent/HeroImages/Duelist.png" : selectAgent.role === "척후대" ? "/images/agent/HeroImages/Initiator.png" : selectAgent.role === "전략가" ? "/images/agent/HeroImages/Controller.png" : selectAgent.role === "감시자" ? "/images/agent/HeroImages/Sentinel.png" : ""} alt={selectAgent.role} />
              </div>
            </div>
            <div className="desc-wrapper">
              <h3>
                <span>// 배경</span>
              </h3>
              <p>{selectAgent.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </AgentListContainer>
  );
};

export default AgentList;
