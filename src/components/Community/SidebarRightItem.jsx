import React from "react";
import { Link } from "react-router-dom";
const SidebarRightItem = ({ item }) => {
  const { category, title } = item;
  return (
    <li>
      <Link to={`/community/${item.id}`}>
        <span className="category">[{category}]</span>
        <span className="sidebar-right-list-title">{title}</span>
      </Link> 
    </li>
  );
};

export default SidebarRightItem;
