import React from "react";
import "../assets/less/App.less";
import { Layout, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
const { Header } = Layout;

const Headerbar = () => {
  return (
    <Header
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
      theme="dark"
    >
      <div>
        <Avatar
          style={{ float: "right", margin: 15 }}
          src={require("../assets/images/avatar.png")}
        ></Avatar>
        <Title
          style={{
            color: "white",
            float: "left",
            marginTop: 10,
            marginLeft: 10,
          }}
          level={1}
        >
          Sonic
        </Title>
      </div>
    </Header>
  );
};
export default Headerbar;
