import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import "../components/CartDropdown.scss";
import CartProduct from "./CartProduct";
import { connect } from "react-redux";

function CartDropdown(props) {
  const { productsItem } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {productsItem.map((item, index) => {
          return (
            <CartProduct
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              currency={item.currency}
              key={index}
            />
          );
        })}
      </div>
      <ButtonSubmit>GO TO CHECKOUT</ButtonSubmit>
    </div>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return {
    // productsItem-> sunt produsele din cart
    productsItem: state.products,
  };
}

export default connect(mapStateToProps)(CartDropdown);
