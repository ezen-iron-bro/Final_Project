import React from "react";

const SidebarRightItem = ({ item }) => {
  const { category, title } = item;
  return (
    <li>
      <a href="">
        <span className="category">[{category}]</span>
        <span className="sidebar-right-list-title">{title}</span>
      </a>
    </li>
  );
};

export default SidebarRightItem;
