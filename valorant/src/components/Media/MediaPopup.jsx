import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { mediaGallery } from "../../assets/api/mediaData";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

const MediaPopup = ({ info, closePopup }) => {
  const { id, title, category, image } = info;
  const selectedIdx = mediaGallery.findIndex((item) => item.id === id);

  const paths = {
    wallpaper: <path d="M.26 1.48v11.05h13.48V1.48H.26zm12.98.5v5.28l-2.87-3.59L6.9 9.29 4.23 6.61.76 11.48v-9.5h12.48zM.99 12.03 4.3 7.39l2.7 2.7 3.43-5.56 2.81 3.52v3.97H.99z"></path>,
    artwork: <path d="M11.36 1.59 9.69.51l-4.11 6.6h-.09c-.03 0-2.59 1.17-2.02 3.63.4 1.74-.78 2.25-.83 2.27l.13.48c.13-.02 3.27-.51 4.62-2.42.52-.74.7-1.6.53-2.55l3.44-6.93zm-1.52-.38.87.56-3.16 6.36-1.5-.83 3.79-6.09zm-2.86 9.57c-.79 1.12-2.33 1.71-3.33 2 .31-.44.54-1.13.31-2.15-.42-1.81 1.17-2.79 1.62-3.02l.44.24 1.42.8c.13.8-.03 1.51-.46 2.13z" fill="#c5c8c0"></path>,
    content: (
      <React.Fragment>
        <path d="M13 .7H1C.8.7.7.8.7 1v12.1c0 .1.1.1.1.1s.1.1.2.1h12c.2 0 .3-.1.3-.3V1c0-.2-.1-.3-.3-.3zm-.4.6V3H1.3V1.3h11.3zm0 11.4H1.3V3.5h11.3v9.2z"></path>
        <path d="m7.8 9.9 4.6-4.5-1.2-1.2-4.7 4.5-.9.4-1 2.7 2.7-1 .5-.9zm-.7-1.1.2-.2.5.5-.1.2-.6-.5zm4.6-3.5L8.2 8.8l-.5-.6 3.4-3.4.6.5zM5.4 11 6 9.4l.8-.3.6.6-.4.7-1.6.6z"></path>
        <path d="M6.3 9.7c-.1.1-.1.3 0 .4.1.1.3.1.4 0s.1-.3 0-.4c-.1-.1-.3-.1-.4 0zM1.9 4.6V5H9v-.4H1.9zm0 3.1h4.9l.5-.5H1.9v.5zm6.3-1.3H1.9v.5h5.8l.5-.5zm-6.3-.5h6.7l.4-.4H1.9v.4z"></path>
      </React.Fragment>
      //React.Fragment = 리액트에서 여러 요소를 묶을 때 사용하는 컴포넌트
      //불필요한 DOM 노드를 생성하지 않고 여러 개의 자식 요소를 그룹화
    ),
  };

  return (
    <>
      <div className="popup-bg" onClick={closePopup}></div>
      <div className="media-popup">
        <div className="media-box">
          <button className="close-btn" onClick={closePopup}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" xmlSpace="preserve">
              <path d="m61.5 9.5-7 7m-38 38-7 7M30.3 42l2.8-3m8.6 3L30.3 30m11.4 0-2.6 2.8"></path>
            </svg>
          </button>
          <div className="popup-img">
            <Swiper navigation={true} modules={[Navigation]} initialSlide={selectedIdx}>
              {mediaGallery.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <p className="image-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      {paths[item.category]}
                    </svg>
                    {item.title}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPopup;
