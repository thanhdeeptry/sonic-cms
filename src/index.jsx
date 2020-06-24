import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import renderApp from "./App";
import Product from "./pages/product";
import * as serviceWorker from "./serviceWorker";
import RenderApp from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RenderApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();