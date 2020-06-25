import React, { useContext, useEffect } from "react";
import { Layout } from "antd";
import renderRoutes from "../routes";
import Sidebar from "../layout/Sidebar";
import Headerbar from "../layout/Headerbar";
import { AuthContext } from "../contexts";
import history from "../services/history";
const { Content, Footer } = Layout;

const App = () => {
  let isLogin = false;
  const { state } = useContext(AuthContext);
  // const token = localStorage.getItem("_token");
  if (state.token) {
    isLogin = true;
  } else {
    isLogin = false;
  }
  console.log("login", isLogin);
  if (isLogin === true) {
    return (
      <div style={{ backgroundColor: "#f0f2f5", height: "100vh" }}>
        <Layout>
          <Headerbar></Headerbar>
          <Layout style={{ minHeight: "100vh" }}>
            <Sidebar></Sidebar>
            <Content style={{ marginLeft: 230, marginTop: 60 }}>
              {renderRoutes(isLogin)}
            </Content>
          </Layout>
          <Layout>
            <div style={{ backgroundColor: "#2dfa2d" }}>
              <Footer style={{ textAlign: "center" }}>
                Powered by Nguyen Hop Thanh
              </Footer>
            </div>
          </Layout>
        </Layout>
      </div>
    );
  }
  if (isLogin === false) {
    localStorage.removeItem("_token");
    return (
      <div style={{ backgroundColor: "#f0f2f5", height: "100vh" }}>
        <Content style={{ marginLeft: 230 }}>{renderRoutes(isLogin)}</Content>
      </div>
    );
  }
};
export default App;
