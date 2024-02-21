import React, { useState, useEffect } from "react";
import { LeaderboardsBannerContainer } from "../../styled/valorantStyled";

const LeaderboardsBanner = () => {
  const [bannerPosition, setBannerPosition] = useState(0);

  const onScroll = () => {
    const scrollY = window.scrollY;
    setBannerPosition(scrollY * 0.15);
  };
  const showText = () => {
    const Text = document.querySelector(".lb-text");
    Text.style.transform = "translate(-50%,-50%)";
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    setTimeout(() => {
      showText();
    }, 500);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <LeaderboardsBannerContainer>
      <div className="lb-background-wrapper">
        <div
          className="lb-background"
          style={{ transition: "0.2s linear", transform: `translateY(${bannerPosition}px)` }}
        ></div>
        <div className="lb-text">
          <h2>발로란트 순위표</h2>
        </div>
      </div>
    </LeaderboardsBannerContainer>
  );
};

export default LeaderboardsBanner;
