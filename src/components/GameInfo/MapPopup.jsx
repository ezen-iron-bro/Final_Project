import { MapPopupContainer } from "../../styled/valorantStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const MapPopup = ({ info, closePopup }) => {
  const { id, title, desc, subimg } = info;
  const [currentIdx, setCurrentIdx] = useState(0);

  const countChange = (swiper) => {
    setCurrentIdx(swiper.realIndex);
  };
  


  return (
    <MapPopupContainer>
      <div className="map-popup-bg">
        <div className="map-bg-stoke">
          <h2 className="map-bg-text">
            <span>{title}</span>
          </h2>
        </div>
        <div className="map-section-wrapper">
          <Swiper navigation={true} modules={[Navigation]} className="map-popup-swiper" onSlideChange={countChange}>
            {subimg.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={title} />
              </SwiperSlide>
            ))}
            <span className="map-count">
              0{currentIdx + 1}
              <br />/<br />0{subimg.length}
              <br />
            </span>
          </Swiper>
          <div className="map-desc-box">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <button className="close-btn" onClick={() => closePopup()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" xmlSpace="preserve">
          <path d="m61.5 9.5-7 7m-38 38-7 7M30.3 42l2.8-3m8.6 3L30.3 30m11.4 0-2.6 2.8"></path>
        </svg>
      </button>
    </MapPopupContainer>
  );
};

export default MapPopup;
