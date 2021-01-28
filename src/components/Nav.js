import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [totalQty, setTotalQty] = useState(0);
  const [state] = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    //sums up all the quantities in our state
    state.carts.forEach((element) => {
      total = element.qty + total;
    });
    setTotalQty(total);
  }, [state]);

  return (
    <nav>
      <h3>Teddy Stale</h3>
      <ul className="nav-links">
        <Link to="/shopping-cart">
          <li>Home</li>
        </Link>
        <Link to="/shopping-cart/products">
          <li>Products</li>
        </Link>
        <Link to="/shopping-cart/cart">
          <li>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <div className="cart-number">{totalQty}</div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
