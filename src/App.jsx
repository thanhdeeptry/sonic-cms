import React from "react";
import "./App.less";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";
import Index from "./container";
import { AuthContextProvider } from "./contexts/index";
function RenderApp() {
  return (
    <AuthContextProvider>
      <Router history={history}>
        <Index />
      </Router>
    </AuthContextProvider>
  );
}
export default RenderApp;
