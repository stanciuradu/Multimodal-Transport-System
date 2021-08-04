import React from "react";
import "../pages/Checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";

function Checkout(props) {
  const { products } = props;
  function totalSum(products) {
    return products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
        {products.map((product, index) => {
          return (
            <CheckoutItem
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
              key={index}
            />
          );
        })}
      </div>
      <div className="total">
        <span>Total:€{totalSum(products)}</span>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Checkout);
