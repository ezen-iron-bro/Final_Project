import React, { useState } from "react";

const SelectBox = ({ onCategoryChange }) => {
  const options = ["전체 무기", "보조무기", "기관단총", "산탄총", "소총", "저격소총", "중기관총", "근접무기"];
  const [isActive, setIsActive] = useState(false);
  const [selected, setselected] = useState("전체 무기");

  const onToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  const selectOption = (option) => {
    setselected(option);
    setIsActive(false);
    onCategoryChange(option);
  };

  return (
    <div className={`select ${isActive ? "active" : ""}`} onClick={onToggle}>
      <div className="selected">
        <span className="selected-value">{selected}</span>
        <div className={`select-icon ${isActive ? "active" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="m6.3 3 3.6 3.5m4.5 3.5-8.2 7"></path>
          </svg>
        </div>
      </div>
      {isActive && (
        <ul>
          {options.map((option) => (
            <li key={option} className="option" onClick={() => selectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
