import React, { useEffect, useState } from "react";
import { MapInfoContainer } from "../../styled/valorantStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch } from "react-redux";
import { setMapData } from "../../store/modules/mapSlice";
import { mapData } from "../../assets/api/mapData";
import MapPopup from "./MapPopup";

const MapInfo = () => {
  const dispatch = useDispatch();
  const [mapIndex, setMapIndex] = useState(0);
  const [isPopup, setIsPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isText, setIsText] = useState("");

  useEffect(() => {
    const mapsTitle = mapData[mapIndex].titleSlice;
    let no = 0;
    const timer = setInterval(() => {
      setIsText(mapsTitle[no]);
      no++;
      if (no === mapsTitle.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [mapIndex]);

  useEffect(() => {
    dispatch(setMapData(mapData));
    setIsActive(true);
  }, [dispatch]);

  const textChange = index => {
    setMapIndex(index);
  };

  const onPopup = () => {
    setIsPopup(true);
  };

  const closePopup = () => {
    setIsPopup(false);
  };

  return (
    <>
      <MapInfoContainer>
        <div className="map-line">
          <h2 className="map-text">
            <span>We are</span>
            <br />
            <span>VALORANT</span>
          </h2>
        </div>
        <div className="map-wrapper">
          <h2 className="map-title">
            <span className={isActive ? "active" : ""}>맵</span>
          </h2>
          <div className="map-container">
            <div className="map-content">
              <div className="map-slider">
                <Swiper className="map-swiper" onSlideChange={swiper => textChange(swiper.activeIndex)}>
                  {mapData.map(item => (
                    <SwiperSlide key={item.id}>
                      <img src={item.titleimg} alt={item.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="map-desc">
                  <div className="map-desc-text">
                    <p className="map-gallery-num">{String(mapIndex + 1).padStart(2, "0")}</p>
                    <h5>{isText}</h5>
                    <span>{mapData[mapIndex]?.desc}</span>
                    <button onClick={() => onPopup()}>
                      <p>갤러리보기</p>
                      <div className="map-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15">
                          <path d="M16.2.5 19.9 4m4.6 3.5-8.3 7"></path>
                          <path strokeMiterlimit="10" d="M16 7.5H0"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-detail-wrapper">
              <div className="tile-details">
                <span className="tile-details-right"></span>
                <span className="tile-details-left"></span>
                <span className="tile-details-outer">
                  <span className="map-detail-box"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </MapInfoContainer>
      {isPopup && <MapPopup info={mapData[mapIndex]} closePopup={closePopup} />}
    </>
  );
};

export default MapInfo;
