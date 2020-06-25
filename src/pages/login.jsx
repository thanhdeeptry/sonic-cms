import React, { useState, useContext, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import * as ApiClient from "../helpers/ApiClient";
import history from "../services/history";
import { AuthContext } from "../contexts";
import Styled from "./loginStyled";

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };
const Login = () => {
  const { state, actions } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  if (localStorage.getItem("_token")) {
    history.push("/");
  }
  const handleLogin = async () => {
    setLoading(true);
    await ApiClient.ApiPost("user/login", user)
      .then((res) => {
        console.log("resss", res);
        message.success("Đăng nhập thành công!");
        localStorage.setItem("_token", res.data.idToken);
        localStorage.setItem("_expiresAt", res.data.expiresAt);
        localStorage.setItem("_refreshToken", res.data.refreshToken);
        actions.setToken(res.data.idToken);
        history.push("/");
      })
      .catch((err) => {
        message.error("Sai tài khoản mật khẩu!");
      });
  };

  return (
    <Styled.Container>
      <div className="container">
        <h3 className="title">Login</h3>
        <p className="text-danger"></p>
        <Form className="login-form">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              autoFocus={true}
              placeholder="Username"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              // style={{ alignSelf: "center" }}
              loading={loading}
              type="primary"
              onClick={handleLogin}
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Styled.Container>
  );
};
export default Login;
