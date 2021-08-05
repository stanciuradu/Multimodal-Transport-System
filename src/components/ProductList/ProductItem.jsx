import React from "react";
import "../ProductList/ProductItem.scss";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

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
      <ButtonSubmit>Add to Cart</ButtonSubmit>
    </div>
  );
}

export default ProductItem;
