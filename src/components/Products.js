import Hoodies from "./Hoodies";
import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

const Products = () => {
  const [state] = useContext(CartContext);

  return (
    <div className="product-container">
      <h1>Hello from Products</h1>
      {state.carts.map((hoodie) => (
        <Hoodies
          key={hoodie.name}
          imgSrc={hoodie.url}
          price={hoodie.price}
          name={hoodie.name}
        />
      ))}
    </div>
  );
};

export default Products;
