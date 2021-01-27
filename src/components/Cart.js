import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  const cartArray = state.carts.map((cartItem) => <div>{cartItem}</div>);

  return (
    <div>
      <h1>Hello from Cart</h1>
      {cartArray}
    </div>
  );
};

export default Cart;
