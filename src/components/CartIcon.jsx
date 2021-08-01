// este o componenta simpla care reprezinta iconita de cart->svg la care se adauga nr de produse din cart
import React from "react";
import "../components/CartIcon.scss";
import { ReactComponent as ShoppingBag } from "../assets/icons/shopping-bag.svg";

function CartIcon() {
  return (
    <div className="cart-icon">
      <ShoppingBag className="shopping-icon" />
      {/* adauga la svg numarul total de itemuri din cart */}
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
