import React, { useEffect, useState } from "react";
import { HomeGoodsContainer } from "../../styled/valorantStyled";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const HomeGoods = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [bannerPosition, setBannerPosition] = useState(0);
  const [textPosition, setTextPosition] = useState(115);

  const onScroll = () => {
    const scrollY = window.scrollY;
    setBannerPosition(scrollY * 0.15);
  };

  const TextMove = () => {
    const Text = document.querySelector(".home-goods-title");
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
    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", TextMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", TextMove);
    };
  }, []);
  return (
    <HomeGoodsContainer className="main-content goods">
      <div className="bg-for-stroke">
        <h2 className="bg-text" style={{ transition: "0.2s linear", transform: `translateY(${bannerPosition}px)` }}>
          <span>We are</span>
          <span>VALORANT</span>
        </h2>
      </div>
      <div className="detail-box"></div>
      <div className="section-wrapper goods">
        <div className="section-header">
          <h2>
            <span className="home-goods-title" style={{ transform: `translateY(${textPosition}%)` }}>
              신상 굿즈
            </span>
          </h2>
          <Link to="/goods" className="goods-move-wrapper">
            <p className="goods-move-text">굿즈 페이지 바로가기</p>
            <div className="move-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15">
                <path d="M16.2.5 19.9 4m4.6 3.5-8.3 7" fill="none" stroke="#ff4655"></path>
                <path fill="none" stroke="#ff4655" stroke-miterlimit="10" d="M16 7.5H0"></path>
              </svg>
            </div>
          </Link>
        </div>
        <>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            spaceBetween={100}
            modules={[Pagination, Navigation]}
            className="goods-slider"
          >
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/images/main/accessory1_1.png" alt="" />
              </div>
              <div className="date-and-category-wrapper">
                <span className="goods-slider-date">23.08.09.</span>
                <span className="goods-slider-category">악세사리</span>
              </div>
              <h3 className="goods-slider-title">2023 발로란트 마스터 총기장식 열쇠고리</h3>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/images/main/clothes1_1.png" alt="" />
              </div>
              <div className="date-and-category-wrapper">
                <span className="goods-slider-date">23.08.09.</span>
                <span className="goods-slider-category">상의</span>
              </div>
              <h3 className="goods-slider-title">2023 발로란트 마스터스 랭크 업! 후드티</h3>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/images/main/accessory4_1.png" alt="" />
              </div>
              <div className="date-and-category-wrapper">
                <span className="goods-slider-date">23.08.09.</span>
                <span className="goods-slider-category">패드</span>
              </div>
              <h3 className="goods-slider-title">발로란트 피닉스 마우스 패드</h3>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/images/main/figure1_1.png" alt="" />
              </div>
              <div className="date-and-category-wrapper">
                <span className="goods-slider-date">23.08.09.</span>
                <span className="goods-slider-category">피규어</span>
              </div>
              <h3 className="goods-slider-title">발로란트 제트 스태츄</h3>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/images/main/doll1_1.png" alt="" />
              </div>
              <div className="date-and-category-wrapper">
                <span className="goods-slider-date">23.08.09.</span>
                <span className="goods-slider-category">인형</span>
              </div>
              <h3 className="goods-slider-title">발로란트 전략가 곰 인형</h3>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/images/main/clothes4_1.png" alt="" />
              </div>
              <div className="date-and-category-wrapper">
                <span className="goods-slider-date">23.08.09.</span>
                <span className="goods-slider-category">상의</span>
              </div>
              <h3 className="goods-slider-title">True Damage 투어 후드티</h3>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/images/main/doll4_1.png" alt="" />
              </div>
              <div className="date-and-category-wrapper">
                <span className="goods-slider-date">23.08.09.</span>
                <span className="goods-slider-category">인형</span>
              </div>
              <h3 className="goods-slider-title">발로란트 전투 토끼 인형</h3>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </HomeGoodsContainer>
  );
};

export default HomeGoods;
