import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Product from "../pages/product";
import Login from "../pages/login";
import Phone from "../pages/phone";
import Laptop from "../pages/laptop";
import Gear from "../pages/gear";
import BillManage from "../pages/BillManage";
import Statistics from "../pages/Statistics";
import AddProduct from "../pages/AddProduct";
const PageLoading = () => (
  <div
    style={{
      width: "100vw",
      position: "absolute",
      height: "100vh",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <h6>Loading...</h6>
  </div>
);

const ProtectedRoute = ({
  component: Component,
  path,
  children = null,
  user = null,
  isLogin,
  ...rest
}) => {
  console.log("component", Component);
  if (!isLogin) return <Redirect to={"/login"} />;
  if (children) {
    return (
      <Route path={path} {...rest}>
        {children}
      </Route>
    );
  }

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default function renderRoutes(isLogin) {
  return (
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <ProtectedRoute
        exact
        path="/"
        component={Statistics}
        isLogin={isLogin}
      ></ProtectedRoute>
      <ProtectedRoute
        exact
        path="/bill"
        component={BillManage}
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
        component={AddProduct}
        isLogin={isLogin}
      ></ProtectedRoute>
      <Route exact path="*">
        <React.Suspense fallback={<PageLoading />}>
          <h1>404</h1>
        </React.Suspense>
      </Route>
    </Switch>
  );
}
