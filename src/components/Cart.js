import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import CartItem from "./CartItem";
import emptyCartImg from "../images/empty-cart.jpg";

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
      <h1>Shopping Cart</h1>
      <div className="cart-container">{cartArray}</div>
      {checkEmptyCart() && (
        <div className="empty-cart-container">
          <h2 className="empty-cart">Oops! Your cart is empty!</h2>
          <img
            src={emptyCartImg}
            alt={"Pretend a Sad Bear Sits here"}
            className="empty-img"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
