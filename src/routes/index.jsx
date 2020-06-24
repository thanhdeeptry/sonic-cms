import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
  return (
    <Route path={path} {...rest} render={props => <Component {...props} />} />
  );
};
export default function renderRoutes(isLogin) {
  return (
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <ProtectedRoute
        exact
        path="/"
        component={Product}
        isLogin={isLogin}
      ></ProtectedRoute>
      {/* <ProtectedRoute exact path="/addproduct" component={Addproduct}></ProtectedRoute> */}
    </Switch>
  );
}
