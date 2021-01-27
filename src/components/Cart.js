import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

const Cart = () => {
  const [state] = useContext(CartContext);

  const cartArray = state.carts.map((cartItem) => {
    if (cartItem.qty > 0) {
      return (
        <div key={cartItem.name}>
          {cartItem.name} x{cartItem.qty}
        </div>
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
