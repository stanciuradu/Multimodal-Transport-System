import React from "react";
import "../components/CheckoutItem.scss";

function CheckoutItem(props) {
  const { name, imageUrl, price } = props;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
}

export default CheckoutItem;
