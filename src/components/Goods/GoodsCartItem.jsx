import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../../store/modules/cartSlice";

const GoodsCartItem = ({ item }) => {
  const { id, image, title, price } = item;
  const dispatch = useDispatch();
  const [zoomImage, setZoomImage] = useState(false);

  const onMouse = () => {
    setZoomImage(true);
  };

  const leaveMouse = () => {
    setZoomImage(false);
  };
  return (
    <article>
      <img src={image} alt={title} className="small-image" onMouseEnter={onMouse} onMouseLeave={leaveMouse} />
      {zoomImage && (
        <div className="zoomed-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="goods-info">
        <h3>{title}</h3>
        <span> {price.toLocaleString()}원</span>
      </div>
      <button onClick={() => dispatch(removeCart(id))} className="del-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" xmlSpace="preserve">
          <path fill="none" d="m61.5 9.5-7 7m-38 38-7 7M30.3 42l2.8-3m8.6 3L30.3 30m11.4 0-2.6 2.8"></path>
        </svg>
      </button>
    </article>
  );
};

export default GoodsCartItem;
