import React, { useEffect, useState } from "react";
import { HomeMapsContainer } from "../../styled/valorantStyled";
import { Link } from "react-router-dom";
const HomeMaps = () => {
  const [mapsTextPosition, setMapsTextPosition] = useState(0);
  const [birdPosition, setBirdPosition] = useState(0);
  const [textPosition, setTextPosition] = useState(120);
  const agentsImgMove = () => {
    const mapsText = document.querySelector(".text-stroke");
    const mapsBird = document.querySelector(".bird");
    if (mapsText && mapsBird) {
      const rect = mapsBird.getBoundingClientRect();
      const imageTop = rect.top + window.scrollY + rect.height / 10;
      const forMoveValue = rect.top + window.scrollY + rect.height + rect.height / 2;
      const viewportBottom = window.innerHeight + window.scrollY;
      if (viewportBottom > imageTop) {
        setMapsTextPosition((viewportBottom - forMoveValue) * 0.15);
        setBirdPosition((viewportBottom - forMoveValue) * 0.15);
      }
    }
  };

  const TextMove = () => {
    const Text = document.querySelector(".home-maps-title");
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
  <div className="lb-background"></div>;
  return (
    <HomeMapsContainer className="main-content Home-maps">
      <div className="bg-text-stroke">
        <h2 className="text-stroke" style={{ transition: "0.2s linear", transform: `translateY(${textPosition}px)` }}>
          <span>Place</span>
        </h2>
      </div>
      <div className="bg-side"></div>
      <div className="image-container">
        <div className="img-wrapper">
          <img
            className="bird"
            src="/images/main/birds.png"
            alt=""
            style={{
              transition: "0.2s linear",
              transform: `translateX(calc(-88% + ${birdPosition}px)) translateY(${birdPosition}px)`,
            }}
          />
        </div>
        <div className="img-wrapper">
          <img className="maps" src="/images/main/maps.png" alt="" />
        </div>
      </div>
      <div className="section-wrapper maps">
        <div className="copy-content">
          <h2 className="slideup-title">
            <span className="home-maps-title" style={{ transform: `translateY(${textPosition}px)` }}>
              맵
            </span>
          </h2>
          <h5 className="subtitle">전 세계에서 싸우세요</h5>
          <p className="description">
            <span>
              팀 전략, 환상적인 플레이, 클러치 상황에 맞게 기획된 각 맵에서 창의적인 판단력을 뽐내고 오랫동안 다른
              플레이어들이 따라 할 플레이를 선보이세요.
            </span>
          </p>
          <Link to="/gameinfo/map">
            <button className="maps-btn">
              <div className="btn-style">
                <span className="hover-mask"></span>
                <span className="btn-text">모든 맵 보기</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </HomeMapsContainer>
  );
};
export default HomeMaps;
