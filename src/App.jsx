import React from "react";
import "./App.less";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";
// import App from "./container/App";
import Product from "./pages/product";
function RenderApp() {
  return (
    <Router history={history}>
      <Product />
    </Router>
  );
}
export default RenderApp;
