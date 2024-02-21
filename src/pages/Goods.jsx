import { Link, useNavigate } from "react-router-dom";
import { products } from "../assets/api/goodsData";
import GoodsProduct from "../components/Goods/GoodsProduct";
import { GoodsContainer } from "../styled/valorantStyled";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import GoodsCartMenu from "../components/Goods/GoodsCartMenu";

const Goods = () => {
  const { carts } = useSelector(state => state.cart);
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isActive, setIsActive] = useState(false);

  const [iconPosition, setIconPosition] = useState(0);

  useEffect(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const categoryChange = category => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter(item => item.category === selectedCategory);

  const onScroll = () => {
    const scrollY = window.scrollY;
    setIconPosition(scrollY * 0.5);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <GoodsContainer>
      <section className="goods-top">
        <div className="section-wrap">
          <div className="logo-wrap1">
            <div className="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690 98.9">
                <path d="M615.11 19.15h24.69l.08 75.59c0 .97.79 1.77 1.77 1.77l14.14-.01c.98 0 1.77-.79 1.77-1.77l-.08-75.58h30.96c.91 0 1.43-1.06.85-1.77l-10.6-13.26a4.68 4.68 0 0 0-3.65-1.76h-59.93c-.98 0-1.77.79-1.77 1.77v13.26c0 .96.79 1.76 1.77 1.76M19.25 94.75 91.67 4.13c.57-.71.06-1.77-.85-1.77H72.71c-1.42 0-2.77.65-3.65 1.76L17.68 68.4V4.12c0-.98-.79-1.77-1.77-1.77H1.77C.79 2.35 0 3.14 0 4.12v90.62c0 .98.79 1.77 1.77 1.77H15.6c1.42 0 2.76-.65 3.65-1.76m51.06 0 24.91-31.17 24.91 31.17a4.685 4.685 0 0 0 3.66 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-11.6c-2.84 0-5.53 1.29-7.31 3.51L47.69 94.73c-.57.71-.06 1.77.85 1.77h18.11c1.43.01 2.77-.64 3.66-1.75m51.39-66.21v41.75l-16.68-20.87 16.68-20.88zm404.37 66.19L453.65 4.11A4.68 4.68 0 0 0 450 2.35h-13.84c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h13.83c1.42 0 2.77-.65 3.65-1.76l24.91-31.17 24.91 31.17a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.78m-57.33-45.31L452.05 70.3V28.54l16.69 20.88zM269.45 0c-27.3 0-49.43 22.13-49.43 49.43s22.13 49.43 49.43 49.43 49.43-22.13 49.43-49.43C318.89 22.13 296.75 0 269.45 0m0 82.06c-17.54 0-31.75-14.61-31.75-32.63 0-18.02 14.21-32.64 31.75-32.64S301.2 31.4 301.2 49.43c.01 18.02-14.21 32.63-31.75 32.63M583.38 4.12V68.4L532 4.11a4.68 4.68 0 0 0-3.65-1.76H514.5c-.97 0-1.77.79-1.77 1.77v43.67c0 1.06.36 2.09 1.03 2.92l14.71 18.41c.65.81 1.95.35 1.95-.68v-38l51.39 64.31a4.68 4.68 0 0 0 3.65 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.8-1.77 1.77M410.62 23.76V4.12c0-.98-.79-1.77-1.77-1.77h-72.37c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h14.14c.98 0 1.77-.79 1.77-1.77V19.16h40.55l-27.37 34.26c-.51.64-.51 1.56 0 2.21l31.27 39.13a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.77l-32.14-40.21 22.28-27.84c.66-.85 1.03-1.88 1.03-2.94M162.39 96.51h41.96c1.42 0 2.77-.65 3.65-1.76l10.6-13.27c.57-.71.06-1.77-.85-1.77H178.3V4.12c0-.98-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.79-1.77 1.77v90.62c0 .97.8 1.77 1.77 1.77"></path>
              </svg>
            </div>
          </div>
          <div className="goods-info">
            <div className="info-image">
              <span className={`image-box ${isActive ? "active" : ""}`}></span>
              <div className="image-left-decoration"></div>
              <span className="image-right-decoration"></span>
            </div>
            <div className="info-text">
              <div>
                <h2 className="goods-title">
                  <span className={isActive ? "active" : ""}>굿즈</span>
                </h2>
                <div className="goods-description">
                  <div className={`des-box ${isActive ? "active" : ""}`}>
                    <p>
                      환상적인 세계로 여러분을 초대합니다! 발로란트의 멋진 캐릭터들과 아름다운 아트워크로 가득한
                      발로란트 굿즈를 소개합니다.
                    </p>
                    <p>
                      멋진 티셔츠와 후드티로 스타일을 완성하고, 발로란트 캐릭터들의 피규어와 포스터로 게임의 흥미진진한
                      순간을 영원히 기억할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="info-decoration"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="goods-mid">
        <div className="section-wrap">
          <GoodsCartMenu onCategoryChange={categoryChange} />
          <Link to="/goods/cart">
            <div className="cart-btn">
              <div>
                <span>
                  VIEW CART
                  <em> {carts.length}</em>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="goods-bot">
        <div className="goods-box">
          {filteredProducts.map(item => (
            <GoodsProduct key={item.id} item={item} />
          ))}

          <div className="logo-wrap2" style={{ transform: `translateY(${iconPosition}px)` }}>
            <div className="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690 98.9">
                <path d="M615.11 19.15h24.69l.08 75.59c0 .97.79 1.77 1.77 1.77l14.14-.01c.98 0 1.77-.79 1.77-1.77l-.08-75.58h30.96c.91 0 1.43-1.06.85-1.77l-10.6-13.26a4.68 4.68 0 0 0-3.65-1.76h-59.93c-.98 0-1.77.79-1.77 1.77v13.26c0 .96.79 1.76 1.77 1.76M19.25 94.75 91.67 4.13c.57-.71.06-1.77-.85-1.77H72.71c-1.42 0-2.77.65-3.65 1.76L17.68 68.4V4.12c0-.98-.79-1.77-1.77-1.77H1.77C.79 2.35 0 3.14 0 4.12v90.62c0 .98.79 1.77 1.77 1.77H15.6c1.42 0 2.76-.65 3.65-1.76m51.06 0 24.91-31.17 24.91 31.17a4.685 4.685 0 0 0 3.66 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-11.6c-2.84 0-5.53 1.29-7.31 3.51L47.69 94.73c-.57.71-.06 1.77.85 1.77h18.11c1.43.01 2.77-.64 3.66-1.75m51.39-66.21v41.75l-16.68-20.87 16.68-20.88zm404.37 66.19L453.65 4.11A4.68 4.68 0 0 0 450 2.35h-13.84c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h13.83c1.42 0 2.77-.65 3.65-1.76l24.91-31.17 24.91 31.17a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.78m-57.33-45.31L452.05 70.3V28.54l16.69 20.88zM269.45 0c-27.3 0-49.43 22.13-49.43 49.43s22.13 49.43 49.43 49.43 49.43-22.13 49.43-49.43C318.89 22.13 296.75 0 269.45 0m0 82.06c-17.54 0-31.75-14.61-31.75-32.63 0-18.02 14.21-32.64 31.75-32.64S301.2 31.4 301.2 49.43c.01 18.02-14.21 32.63-31.75 32.63M583.38 4.12V68.4L532 4.11a4.68 4.68 0 0 0-3.65-1.76H514.5c-.97 0-1.77.79-1.77 1.77v43.67c0 1.06.36 2.09 1.03 2.92l14.71 18.41c.65.81 1.95.35 1.95-.68v-38l51.39 64.31a4.68 4.68 0 0 0 3.65 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.8-1.77 1.77M410.62 23.76V4.12c0-.98-.79-1.77-1.77-1.77h-72.37c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h14.14c.98 0 1.77-.79 1.77-1.77V19.16h40.55l-27.37 34.26c-.51.64-.51 1.56 0 2.21l31.27 39.13a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.77l-32.14-40.21 22.28-27.84c.66-.85 1.03-1.88 1.03-2.94M162.39 96.51h41.96c1.42 0 2.77-.65 3.65-1.76l10.6-13.27c.57-.71.06-1.77-.85-1.77H178.3V4.12c0-.98-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.79-1.77 1.77v90.62c0 .97.8 1.77 1.77 1.77"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </GoodsContainer>
  );
};

export default Goods;
