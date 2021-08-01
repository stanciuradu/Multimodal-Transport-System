import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import "../components/CartDropdown.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <ButtonSubmit>GO TO CHECKOUT</ButtonSubmit>
    </div>
  );
}

export default CartDropdown;
