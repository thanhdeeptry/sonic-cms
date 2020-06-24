import React, { useState, useContext, useEffect } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import * as ApiClient from "../helpers/ApiClient";
import history from "../services/history";
import { AuthContext } from "../contexts";
import Styled from "./loginStyled";
import { ApiPost } from "../helpers/ApiClient";
import { from } from "rxjs";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};
const Login = () => {
  const { state, actions } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const onSubmit = async values => {
    setLoading(true);
    const response = await ApiPost("user/login", values);
    const { idToken } = response.data;
    if (idToken) {
      history.push("/");
    }
    actions.setToken(idToken);
    setLoading(false);
  };

  return (
    <Styled.Container>
      <div className="container">
        <h3 className="title">Login</h3>
        <p className="text-danger"></p>
        <Form className="login-form" onFinish={onSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input autoFocus={true} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              // style={{ alignSelf: "center" }}
              loading={loading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </Styled.Container>
  );
};
export default Login;
