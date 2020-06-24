import React from "react";
import "../assets/less/App.less";
import { Layout, Avatar } from "antd";
import Title from "antd/lib/typography/Title";
const { Header } = Layout;

const Headerbar = () => {
  return (
    <Header theme="dark" style={{ padding: 0 }}>
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
            marginLeft: 40,
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
