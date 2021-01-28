import React, { useReducer, createContext } from "react";
import colorBlockHoodie from "../images/color-block-hoodie.jpg";
import bubblegum from "../images/bubblegum-block-hoodie.jpg";
import gingham from "../images/gingham-colorblock-hoodie.jpg";
import patchwork from "../images/patchwork-knit-zip-up.jpg";
import threepanel from "../images/three-panel-hoodie.jpg";
import puffypaint from "../images/puffy-paint-hoodie.jpg";
import chenille from "../images/the-big-ass-chenille-hoodie.jpg";
import tfx from "../images/tf-x-spongebob-embroidered-hoodie.jpg";
import tfxcolorblock from "../images/tf-x-sponbgebob-color-block-hoodie.jpg";

export const CartContext = createContext();

const initialState = {
  carts: [
    { qty: 0, name: "COLOR BLOCK HOODIE", price: 85, url: colorBlockHoodie },
    { qty: 0, name: "BUBBLEGUM BLOCK HOODIE", price: 79, url: bubblegum },
    { qty: 0, name: "GINGHAM COLORBLOCK HOODIE", price: 85, url: gingham },
    { qty: 0, name: "PATCHWORK KNIT ZIP UP", price: 90, url: patchwork },
    { qty: 0, name: "THREE PANEL HOODIE", price: 79, url: threepanel },
    { qty: 0, name: "PUFFY PAINT HOODIE", price: 80, url: puffypaint },
    { qty: 0, name: "THE BIG ASS CHENILLE HOODIE", price: 85, url: chenille },
    { qty: 0, name: "TF X SPONGEBOB EMBROIDERED HOODIE", price: 90, url: tfx },
    {
      qty: 0,
      name: "TF X SPONGEBOB COLOR BLOCK HOODIE",
      price: 95,
      url: tfxcolorblock,
    },
  ],
};

const reducer = (state, action) => {
  let tempCart = state.carts;
  switch (action.type) {
    case "ADD_CART": //This is not great because Reducers need to be Pure...
      state.carts.forEach((element, index) => {
        if (element.name === action.payload.name) {
          tempCart[index].qty += action.payload.qty;
        }
      });
      return {
        carts: tempCart,
      };
    case "DEL_CART":
      state.carts.forEach((element, index) => {
        if (element.name === action.payload) {
          tempCart[index].qty = 0;
        }
      });
      return {
        carts: tempCart,
      };
    default:
      throw new Error();
  }
};

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};
