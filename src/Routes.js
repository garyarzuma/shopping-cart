import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { CartContextProvider } from "./context/cart-context";

const Routes = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/shopping-cart/" exact component={Home} />
            <Route path="/shopping-cart/products" exact component={Products} />
            <Route path="/shopping-cart/cart" exact component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default Routes;
