import React, { useEffect, useState } from "react";
import { HomeOverviewContainer } from "../../styled/valorantStyled";
const HomeOverview = () => {
  const [textPosition, setTextPosition] = useState(102);
  const [onClass, setOnClass] = useState(false);
  const [isText, setIsText] = useState("");
  const [isTextSec, setIsTextSec] = useState("");
  const TextMove = () => {
    const Text = document.querySelector(".ov-title");
    if (Text) {
      const rect = Text.getBoundingClientRect();
      const TextTop = rect.top + window.scrollY + rect.height / 2;
      const viewportBottom = window.innerHeight + window.scrollY;
      if (viewportBottom > TextTop) {
        setTextPosition(0);
        setOnClass(true);
      } else {
        setOnClass(false);
      }
    }
  };

  const scambleTextMove = useEffect(() => {
    window.addEventListener("scroll", TextMove);
    const scambleText = [
      "ㅂ",
      "바",
      "바L",
      "발L",
      "바로",
      "발로A",
      "발롤",
      "발롤T",
      "발로라",
      "발로라S",
      "발로란",
      "발로란X",
      "발로란트",
      "발로란트 ",
      "발로란트 V",
      "발로란트 프",
      "발로란트 플",
      "발로란트 플H",
      "발로란트 프로",
      "발로란트 프롵",
      "발로란트 프롵H",
      "발로란트 프로토",
      "발로란트 프로톸",
      "발로란트 프로톸Z",
      "발로란트 프로토코",
      "발로란트 프로토콜",
    ];
    const scambleTextSec = [
      "M",
      "MR",
      "MR0",
      "MRHA",
      "MR#S",
      "MR%H",
      "MR0C ",
      "MR0C -",
      "MR$F - S",
      "MADF - SH",
      "MR0C - FDD",
      "MR0# - FDD",
      "MR0% - FAH",
      "MR0C - SWD ",
      "MR0D - SWS -",
      "MR0D - JWS -",
      "MR0D - A#S -",
      "MR0D - KFS -",
      "MR0C - DZD - ",
      "MNBC - HWD - B",
      "MHJC - SWD - BR",
      "MR0C - MBD - BH4",
      "MR0C - SAD - DA4",
      "MASD - TWD - KFH",
      "MFAC - UWD - B&D",
      "MR0C - SWD - BR4",
    ];
    let no = 0;
    let no2 = 0;
    const timer = setInterval(() => {
      if (no < scambleText.length) {
        setIsText(scambleText[no]);
        no++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    const secTimer = setInterval(() => {
      if (no2 < scambleTextSec.length) {
        setIsTextSec(scambleTextSec[no2]);
        no2++;
      } else {
        clearInterval(secTimer);
      }
    }, 50);
    return () => {
      window.removeEventListener("scroll", TextMove);
      clearInterval(timer);
      clearInterval(secTimer);
    };
  }, [onClass]);
  return (
    <HomeOverviewContainer className="mian-content overview">
      <div className="section-wrapper overview">
        <div className="ov-top-detail"></div>
        <div className="ov-detail-box"></div>
        <div className="ov-title-container">
          <h6 className={onClass ? "horizontal on" : "horizontal"}>
            <span className="scamble-text">
              <span>{isText}</span>
              <span>{isTextSec}</span>
            </span>
          </h6>
          <h2 className="ov-title">
            <span style={{ transform: `translateY(${textPosition})` }}>
              우리는 <br />
              발로란트다
            </span>
          </h2>
        </div>
        <div className="ov-content">
          <div className="ov-copy-content">
            <h5 className="ov-subtitle">한계를 돌파하라</h5>
            <p className="ov-description">
              <span>
                전 세계의 경쟁 무대에서 여러분의 스타일과 실력을 보여 주세요. 정밀한 사격과 전략 스킬을 사용해 13라운드
                동안 공격과 방어를 번갈아 진행하게 됩니다. 라운드당 목숨은 하나이며, 생존하려면 상대보다 더 빠르게
                판단해야 합니다. 데스매치와 스파이크 돌격, 경쟁전과 일반전에서 적과 싸워 이기세요.
              </span>
            </p>
            <button className="ov-btn">
              <div className="btn-style">
                <span className="hover-mask"></span>
                <span className="btn-text">게임 배우기</span>
              </div>
            </button>
          </div>
          <div className="ov-media-container">
            <div className="ov-video-box">
              <div className="ov-video-detil-box"></div>
              <div className="ov-video-detail">게임플레이</div>
              <div className="ov-video-container">
                <div className="ov-play-btn">
                  <div className="ov-video">
                    <div className="ov-video">
                      <video preload="true" muted loop playsinline="" autoPlay height="100%" width="100%">
                        <source
                          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <button className="ov-icon-wrapper">
                    <div className="ov-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" xml:space="preserve">
                        <path fill="none" stroke="#ece8e1" d="M33.5 34.5v-5l8 6v2l-8 6v-5m28-29-7 7m-38 38-7 7"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="video-border-bottom"></div>
            </div>
          </div>
          <span className="detail"></span>
        </div>
      </div>
    </HomeOverviewContainer>
  );
};

export default HomeOverview;
