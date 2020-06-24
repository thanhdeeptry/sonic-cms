import React from "react";
import "./App.less";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";
import App from "./container/App";
function RenderApp() {
  return (
    <Router history={history}>
      <App />
    </Router>
  );
}
export default RenderApp;
