import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./styles/App.css";

/*Removed the react.strictmode since it was running reducer twice which
was a problem since my reducer wasn't pure since I was changing the qty paramter
Need to change this in the future*/
ReactDOM.render(<Routes />, document.getElementById("root"));
