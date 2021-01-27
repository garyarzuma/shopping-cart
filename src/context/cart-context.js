import React, { useReducer, createContext } from "react";
import colorBlockHoodie from "../images/color-block-hoodie.jpg";
import bubblegum from "../images/bubblegum-block-hoodie.jpg";

export const CartContext = createContext();

const initialState = {
  carts: [
    { qty: 0, name: "Color Block Hoodie", price: 85, url: colorBlockHoodie },
    { qty: 0, name: "Bubblegum Block Hoodie", price: 79, url: bubblegum },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART": //This is not great because Reducers need to be Pure...
      let tempCart = state.carts;
      state.carts.forEach((element, index) => {
        if (element.name === action.payload) {
          tempCart[index].qty++;
        }
      });
      return {
        carts: tempCart,
      };
    case "DEL_CART":
      return {
        carts: state.carts.filter((cart) => cart.name !== action.payload),
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
