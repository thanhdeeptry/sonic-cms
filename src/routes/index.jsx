import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Product from "../pages/product";
import Login from "../pages/login";
const ProtectedRoute = ({
  component: Component = null,
  path,
  children = null,
  user = null,
  isLogin,
  ...rest
}) => {
  if (!isLogin) return <Redirect to={"/login"} />;
  if (children) {
    return (
      <Route path={path} {...rest}>
        {children}
      </Route>
    );
  }
  console.log("aasds");
  return <Route path={path} {...rest} render={() => <Component />} />;
};
export default function renderRoutes(isLogin) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={() => <Login />}></Route>
        <ProtectedRoute
          exact
          path="/"
          component={Product}
          isLogin={isLogin}
        ></ProtectedRoute>
        {/* <ProtectedRoute exact path="/addproduct" component={Addproduct}></ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}
