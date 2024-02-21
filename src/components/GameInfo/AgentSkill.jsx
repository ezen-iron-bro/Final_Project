import { AgentSkillContainer } from "../../styled/valorantStyled";
import { useEffect, useRef, useState } from "react";

const AgentSkill = ({ selectAgent }) => {
  const [selectSkill, setSelectSkill] = useState(0);

  const videoRef = useRef(null);

  const skillClick = (index) => {
    setSelectSkill(index);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [selectSkill, selectAgent]);

  return (
    <AgentSkillContainer>
      <div className="background-container">
        <div className="background-side"></div>
      </div>
      <div className="content-wrapper">
        <h6>
          <span className="scamble-text">
            <span>한계를</span>
            <span>돌파하라</span>
          </span>
        </h6>
        <h2 className="abilities-title">
          <span>특수 스킬</span>
        </h2>
        <div className="abilities-Container">
          <ul className="abilities-List">
            {selectAgent.skillimg.map((img, index) => (
              <li className="ability-icon-wrapper" key={index} onClick={() => skillClick(index)}>
                <img className="ability-icon" src={img} alt="skill" style={index === selectSkill ? { transform:'scale(1.2)',filter:'invert(100%)'} : {}} />
              </li>
            ))}
          </ul>
          <div className="ability-details-wrapper">
            <h3 className="ability-title">{selectAgent.skill[selectSkill]}</h3>
            <p className="ability-desc">{selectAgent.skillExplan[selectSkill]}</p>
          </div>
        </div>
        <div className="video-wrapper">
          <div className="detail-box">
            <span className="detail-line"></span>
          </div>
          <div className="overview-video">
            <div className="video-container">
              <div className="video">
                <video ref={videoRef} preload="true" muted loop playsInline autoPlay data-testid="agent:video" height="100%" width="100%">
                  <source src={selectAgent.skillvideo[selectSkill]} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="black-border"></div>
          </div>
        </div>
      </div>
    </AgentSkillContainer>
  );
};

export default AgentSkill;
