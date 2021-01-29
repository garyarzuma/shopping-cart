import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart-context";

const Hoodies = (props) => {
  const [state, dispatch] = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const addToCart = () => {
    dispatch({
      type: "ADD_CART",
      payload: { name: props.name, qty: +qty },
    });
  };

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  return (
    <div className="hoodies">
      <img src={props.imgSrc} alt={props.name} className="hoodie-image"></img>

      <div class="hoodies-container">
        <div className="hoodie-name">{props.name}</div>
        <div className="hoodie-price">${props.price}</div>
        <div>
          <label htmlFor="qty-1">Qty: </label>
          <input
            type="number"
            name="qty-1"
            className="qty"
            value={qty}
            onChange={handleChange}
          />
          <button className="add-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hoodies;
