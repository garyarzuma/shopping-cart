import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const [state] = useContext(CartContext);

  const cartArray = state.carts.map((cartItem) => {
    if (cartItem.qty > 0) {
      return (
        <CartItem key={cartItem.name} name={cartItem.name} qty={cartItem.qty} />
      );
    }
  });
  return (
    <div>
      <h1>Hello from Cart</h1>
      {cartArray}
    </div>
  );
};

export default Cart;
