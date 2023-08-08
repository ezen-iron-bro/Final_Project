import React, { useEffect, useState } from "react";

const WeaponItem = ({ item }) => {
  const { id, title, image, type, category, explanation, description, subdes } = item;

  return (
    <>
      <div className="weapon-card">
        <span className="weaponcard-bg"></span>
        <span className="weaponcard-detail"></span>
        <div className="weapon-container">
          <div className="heading">
            <h2>
              <span>{title}</span>
            </h2>
          </div>
          <figure className="Weapon-figure">
            <img src={image} alt={title} />
          </figure>
          <div className="weapon-type">
            <strong>
              유형 // <span>{type}</span>
            </strong>
          </div>
          <div className="weapon-des">
            <ul>
              <li>
                <p className="description">{description}</p>
              </li>
              {subdes && (
                <li>
                  <p className="description">{subdes}</p>
                </li>
              )}
            </ul>
          </div>
          <p className="explanation">{explanation}</p>
        </div>
        <div className="weapon-summary"></div>
      </div>
    </>
  );
};

export default WeaponItem;
