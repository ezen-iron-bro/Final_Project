import React from "react";
import WeaponItem from "./WeaponItem";
import { weaponItem } from "../../assets/api/weaponData";

const WeaponList = ({ selectedCategory }) => {
  const filterWeaponItems = () => {
    if (selectedCategory === "전체 무기") {
      return weaponItem;
    } else {
      return weaponItem.filter((item) => item.type === selectedCategory);
    }
  };

  return (
    <>
      <div className="weapon-list">
        <div className="outer-div">
          <div className="scroll">
            {filterWeaponItems().map((item) => (
              <WeaponItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="weapon-bottom-detail">
          <div className="weapon-bottom-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xmlSpace="preserve">
              <path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 0 0 .49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34 32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"></path>
            </svg>
          </div>
          <span className="weapon-bottom-icon-detail"></span>
        </div>
      </div>
    </>
  );
};

export default WeaponList;
