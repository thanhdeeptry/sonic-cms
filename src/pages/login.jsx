import React,{useState} from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import * as ApiClient from '../helpers/ApiClient'
import history from '../services/history'


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
const Login=()=>{
    const [loading, setLoading]=useState(false);
    const [user,setUser]=useState({})
    return(
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={(e)=>{setUser({...user, username: e.target.value})}} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={(e)=>{setUser({...user,password: e.target.value})}}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button loading={loading} onClick={ async()=>{
            setLoading(true)
            await ApiClient.ApiPost('user/login', user)
            .then(res=>{
                message.success("ĐĂNG NHẬP THÀNH CÔNG!");
                history.push('/')
            })
            
        }} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
}
export default Login;