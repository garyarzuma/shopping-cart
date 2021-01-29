import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

const CartItem = (props) => {
  const [state, dispatch] = useContext(CartContext);

  const delFromCart = () => {
    dispatch({
      type: "DEL_CART",
      payload: props.name,
    });
  };

  return (
    <div className="cart-item">
      <div className="cart-item-qty">x{props.qty}</div>
      <img className="small-img" src={props.url} alt={props.name} />
      <div className="cart-container">
        <div className="cartitem-name">{props.name}</div>
        <div className="cartitem-price">${props.price}</div>
        <button className="del-button" onClick={delFromCart}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
