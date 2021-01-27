import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

const Hoodies = (props) => {
  const [state, dispatch] = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_CART",
      payload: props.name,
    });
  };

  return (
    <div>
      <img src={props.imgSrc} alt={props.name} className="hoodie-image"></img>
      <div className="hoodie-name">{props.name}</div>
      <div className="hoodie-price">${props.price}</div>
      <button className="add-cart-btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Hoodies;
