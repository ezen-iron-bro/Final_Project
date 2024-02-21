import React, { useEffect, useState } from "react";
import { HomeMediaContainer } from "../../styled/valorantStyled";
import { Link } from "react-router-dom";

const HomeMedia = () => {
  const [textPosition, setTextPosition] = useState(115);

  const TextMove = () => {
    const Text = document.querySelector(".home-media-title");
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
    window.addEventListener("scroll", TextMove);

    return () => {
      window.removeEventListener("scroll", TextMove);
    };
  }, []);
  return (
    <HomeMediaContainer className="main-content media">
      <div className="keyart-container">
        <img src="/images/main/keyart-bg.jpg" alt="키아트" />
      </div>
      <div className="section-wrapper media">
        <div className="copy-content">
          <h2>
            <span className="home-media-title" style={{ transform: `translateY(${textPosition}%)` }}>
              에볼루션
            </span>
          </h2>
          <h5>WELLMADE 바탕화면 // LOGO // 자료</h5>
          <Link to="/media">
            <button className="move-btn">
              <div className="btn-style">
                <span className="hover-mask"></span>
                <span className="btn-text">미디어 구경하기</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </HomeMediaContainer>
  );
};

export default HomeMedia;
