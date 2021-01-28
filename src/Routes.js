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
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default Routes;
