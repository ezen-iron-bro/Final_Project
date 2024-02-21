import React, { useState } from "react";

const MediaMenu = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const onCategory = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };
  return (
    <div className="section-wrap">
      <div className="media-filter">
        <div className="filter-option">
          <ul>
            <li className={`media-btn ${activeCategory === "All" ? "active" : ""}`} onClick={() => onCategory("All")}>
              All
            </li>
            <li className={`media-btn ${activeCategory === "wallpaper" ? "active" : ""}`} onClick={() => onCategory("wallpaper")}>
              Wallpaper
            </li>
            <li className={`media-btn ${activeCategory === "artwork" ? "active" : ""}`} onClick={() => onCategory("artwork")}>
              Artwork
            </li>
            <li className={`media-btn ${activeCategory === "content" ? "active" : ""}`} onClick={() => onCategory("content")}>
              Content creater
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediaMenu;
