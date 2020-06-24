import React, { useContext, useEffect } from "react";
import { Layout } from "antd";
import renderRoutes from "../routes";
import Sidebar from "../layout/Sidebar";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { AuthContext } from "../contexts";
const { Content, Header, Footer } = Layout;

const Index = React.memo(() => {
  const { state, actions } = useContext(AuthContext);
  let isLogin = false;
  if (state.token) {
    isLogin = true;
  }

  return (
    <div style={{ backgroundColor: "#f0f2f5", height: "100vh" }}>
      {isLogin ? (
        <Layout>
          <Sidebar></Sidebar>
          <Content style={{ margin: "24px 24px 0" }}>
            {renderRoutes(isLogin)}
          </Content>
        </Layout>
      ) : (
        <Content style={{ margin: "24px 24px 0" }}>
          {renderRoutes(isLogin)}
        </Content>
      )}

      <Footer style={{ textAlign: "right", padding: "24px" }}>
        Sonic admin by <strong>Wabi-sabi</strong> v0.1
      </Footer>
    </div>
  );
});
export default withRouter(Index);
