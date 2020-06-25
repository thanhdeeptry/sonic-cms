import React from "react";
import "./App.less";
import { Router } from "react-router-dom";
import history from "./services/history";
import Index from "./container";
import { AuthContextProvider } from "./contexts/index";
import { AppContextProvider } from "./contexts";
function RenderApp() {
  return (
    <AppContextProvider>
      <AuthContextProvider>
        <Router history={history}>
          <Index />
        </Router>
      </AuthContextProvider>
    </AppContextProvider>
  );
}
export default RenderApp;
