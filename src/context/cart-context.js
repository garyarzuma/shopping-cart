import React, { useReducer, createContext } from "react";

export const CartContext = createContext();

const initialState = {
  carts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        carts: [...state.carts, action.payload],
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
