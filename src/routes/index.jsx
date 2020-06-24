import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Product from "../pages/product";
import Login from "../pages/login";
import Phone from "../pages/phone";
import Laptop from "../pages/laptop";
import Gear from "../pages/gear";
import Bill from "../pages/BillManage";
import Statistics from "../pages/Statistics";

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
          component={Bill}
          isLogin={isLogin}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/statistics"
          component={Statistics}
          isLogin={isLogin}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/home"
          component={Product}
          isLogin={isLogin}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/phone"
          component={Phone}
          isLogin={isLogin}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/laptop"
          component={Laptop}
          isLogin={isLogin}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/gear"
          component={Gear}
          isLogin={isLogin}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/addproduct"
          component={Laptop}
          isLogin={isLogin}
        ></ProtectedRoute>

        {/* <ProtectedRoute exact path="/addproduct" component={Addproduct}></ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}
