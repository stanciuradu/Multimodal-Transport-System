import React from "react";
import "../ProductList/ProductItem.scss";

function ProductItem(props) {
  const { name, imageUrl, price, currency } = props;
  return (
    <div className="product-item">
      <img src={imageUrl} alt="random" className="image" />
      <div className="product-item-details">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className='currency'>{currency}</span>
      </div>
    </div>
  );
}

export default ProductItem;
