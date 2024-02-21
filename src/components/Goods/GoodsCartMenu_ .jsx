import React, { useState } from "react";
import { useSelector } from "react-redux";
import { products } from "../../assets/api/goodsData";
import GoodsProduct from "./GoodsProduct";

const GoodsCartMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredProducts = useSelector((state) => {
    if (selectedCategory === "전체") {
      return products;
    } else {
      return products.filter((product) => product.category === selectedCategory);
    }
  });

  const onShowScreen = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="menu-box">
      <p>
        <button onClick={() => onShowScreen("all")} className="menu-btn">
          all
        </button>
        <button onClick={() => onShowScreen("clothes")} className="menu-btn">
          clothes
        </button>
        <button onClick={() => onShowScreen("acc")} className="menu-btn">
          acc
        </button>
        <button onClick={() => onShowScreen("doll")} className="menu-btn">
          doll
        </button>
        <button onClick={() => onShowScreen("figure")} className="menu-btn">
          figure
        </button>
      </p>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <GoodsProduct key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default GoodsCartMenu;
