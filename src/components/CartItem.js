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
    <div>
      <img class="small-img" src={props.url} alt={props.name} />
      <div className="cartitem-name">
        {props.name} x{props.qty}
      </div>
      <div className="cartitem-price">${props.price}</div>
      <button className="del-button" onClick={delFromCart}>
        Delete
      </button>
    </div>
  );
};

export default CartItem;
