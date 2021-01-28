import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const [state] = useContext(CartContext);

  const cartArray = state.carts.map((cartItem) => {
    if (cartItem.qty > 0) {
      return (
        <CartItem
          key={cartItem.name}
          name={cartItem.name}
          qty={cartItem.qty}
          url={cartItem.url}
          price={cartItem.price}
        />
      );
    }
    return null;
  });

  const checkEmptyCart = () => {
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i] !== null) return false;
    }
    return true;
  };

  return (
    <div>
      <h1>Hello from Cart</h1>
      {cartArray}
      {checkEmptyCart() && (
        <h2 className="empty-cart">Oops! Your cart is empty!</h2>
      )}
    </div>
  );
};

export default Cart;
