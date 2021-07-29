import React from "react";
import "../components/CollectionItem.scss";

function CollectionItem(props) {
  const { name, price, imageUrl, currency } = props;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="currency">{currency}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
