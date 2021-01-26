import React from "react";
import Hoodies from "./Hoodies";
import colorBlockHoodie from "../images/color-block-hoodie.jpg";
import bubblegum from "../images/bubblegum-block-hoodie.jpg";

const Products = () => {
  return (
    <div>
      <h1>Hello from Products</h1>
      <Hoodies imgSrc={colorBlockHoodie} price="85" name="Color Block Hoodie" />
      <Hoodies imgSrc={bubblegum} price="79" name="Bubblegum Block Hoodie" />
    </div>
  );
};

export default Products;
