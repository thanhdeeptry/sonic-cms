import React, { useState, useContext } from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const AddProduct = () => {
  const [data, setData] = useState(null);

  return (
    <div
      style={{ margin: 50, padding: 50, backgroundColor: "#fff" }}
      className="container"
    >
      <div align="center">
        <h1 style={{ fontSize: 50 }}>Thêm sản phẩm</h1>
      </div>
      <Form {...layout}>
        <Form.Item
          hasFeedback
          name="Tên sản phẩm"
          label="Tên sản phẩm"
          rules={[
            {
              required: true,
              message: "Vui lòng điền tên sản phẩm!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="Số lượng"
          label="Số lượng"
          rules={[
            {
              required: true,
              message: "Vui lòng điền số lượng",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          hasFeedback
          name="Giá tiền một sản phẩm"
          label="Giá tiền một sản phẩm"
          rules={[
            {
              required: true,
              message: "Vui lòng điền giá tiền của sản phẩm",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="Thông số chi tiết"
          label="Thông số chi tiết"
          rules={[
            {
              required: true,
              message: "Vui lòng điền thông số chi tiết cho sản phẩm!",
            },
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          name="Ảnh sản phẩm"
          label="Ảnh sản phẩm"
          valuePropName="fileList"
          rules={[
            {
              required: true,
              message: "Vui lòng điền đường dẫn của ảnh!",
            },
          ]}
        >
          <Input type="url" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 10, offset: 10 }}>
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddProduct;
