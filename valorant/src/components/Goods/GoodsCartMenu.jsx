import React, { useState } from "react";

const GoodsCartMenu = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const onCategory = category => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="menu-box">
      <ul>
        <li className={`menu-btn ${activeCategory === "All" ? "active" : ""}`} onClick={() => onCategory("All")}>
          All
        </li>
        <li
          className={`menu-btn ${activeCategory === "clothes" ? "active" : ""}`}
          onClick={() => onCategory("clothes")}
        >
          Clothes
        </li>
        <li className={`menu-btn ${activeCategory === "acc" ? "active" : ""}`} onClick={() => onCategory("acc")}>
          Accessory
        </li>
        <li className={`menu-btn ${activeCategory === "doll" ? "active" : ""}`} onClick={() => onCategory("doll")}>
          Doll
        </li>
        <li className={`menu-btn ${activeCategory === "figure" ? "active" : ""}`} onClick={() => onCategory("figure")}>
          Figure
        </li>
      </ul>
    </div>
  );
};

export default GoodsCartMenu;
