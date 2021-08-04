// componenta simpla care primeste doua props-uri
import React from "react";
import "../MenuItem/MenuItem.scss";

function MenuItem(props) {
  const { title, imageUrl, size } = props;
  return (
    //   prin atributul style am interlopat dinamic imagnea de fundal pentru fiecare menu-item in parte
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        {/*aplic metoda toUpperCase pentru ca title s fie scris cu majuscule  */}

        <h1 className="title">{title.toUpperCase()}</h1>

        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
