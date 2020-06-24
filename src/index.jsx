import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/less/App.less";
import renderApp from "./App";
import Product from "./pages/Product";
import * as serviceWorker from "./serviceWorker";
import RenderApp from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
