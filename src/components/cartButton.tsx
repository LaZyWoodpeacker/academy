import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import CartIcon from "./cartIcon.tsx";
import cart from "../store/cart.state.ts";

const CartButton = () => {
  const navigate = useNavigate();

  const Badge = cart.selectedPositions.length ? (
    <div className="cart-button_badge">{cart.selectedPositions.length}</div>
  ) : (
    <></>
  );

  return (
    <div className="cart-button" onClick={() => navigate("/cart")}>
      <CartIcon />
      {Badge}
    </div>
  );
};

export default observer(CartButton);
