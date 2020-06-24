import React, { useState, useEffect } from "react";
import "./App.less";
import {
  List,
  Card,
  Layout,
  Button,
  BackTop,
  Modal,
  Form,
  message,
} from "antd";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import * as ApiClient from "../helpers/ApiClient";
import ReadMoreAndLess from "react-read-more-less";
import { UpSquareOutlined } from "@ant-design/icons";
import history from "../services/history";
const { Search } = Input;
const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
const Product = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZWQwYmVmZTUzYWVkNjAwMTdlNDJmZjYiLCJ0eXBlIjoiSURfVE9LRU4iLCJpYXQiOjE1OTI5NjUyOTksImV4cCI6MTU5MzA1MTY5OX0.hLEVBB3d7o8AKsC5hl60j1n_KWaEa743FvjW4mPV9j0";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    await ApiClient.ApiGet("/products", token)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    fetchData();
  }, ...[]);
  const searchFilter = data.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 360 }}
    >
      <div style={{ margin: 20 }}>
        <Button type="primary" shape="round">
          Thêm sản phẩm
        </Button>

        <Search
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          size="large"
          style={{ marginLeft: 138, width: 600 }}
          placeholder="input search text"
          enterButton
        />
      </div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={searchFilter}
        renderItem={(item, index) => {
          return (
            <List.Item>
              <Card title="Tên sản phẩm">{item.title}</Card>
              <Card title="Giá">{item.price}</Card>
              <Card title="Giới thiệu">
                {" "}
                <ReadMoreAndLess
                  ref={this.ReadMore}
                  className="read-more-content"
                  charLimit={250}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  {item.description1 + item.description2 + item.description3}
                </ReadMoreAndLess>
              </Card>
              <Card title="Ảnh sản phẩm">
                <img src={item.image} alt="" height="150" width="150"></img>
              </Card>
              <Card title="Số lượng">{item.amount}</Card>
              <div style={{ backgroundColor: "white" }}>
                <Button
                  onClick={() => {
                    setVisible(true);
                  }}
                  type="primary"
                  style={{ margin: 10, width: 120, borderRadius: 25 }}
                >
                  Sửa thông tin sản phẩm
                </Button>

                <Modal visible={visible} footer={null}>
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
                        name={item.id}
                        label="Tên sản phẩm"
                      >
                        <Input
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setProduct({ ...product, name: undefined });
                            } else {
                              setProduct({ ...product, name: e.target.value });
                            }
                          }}
                        />
                      </Form.Item>
                      <Form.Item hasFeedback name={item.id} label="Số lượng">
                        <Input
                          type="number"
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setProduct({ ...product, amount: undefined });
                            } else {
                              setProduct({
                                ...product,
                                amount: e.target.value,
                              });
                            }
                          }}
                        />
                      </Form.Item>

                      <Form.Item
                        hasFeedback
                        name={item.id}
                        label="Giá tiền một sản phẩm"
                      >
                        <Input
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setProduct({ ...product, price: undefined });
                            } else {
                              setProduct({ ...product, price: e.target.value });
                            }
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        name={item.id}
                        label="Giới thiệu 1"
                      >
                        <TextArea
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setProduct({
                                ...product,
                                description1: undefined,
                              });
                            } else {
                              setProduct({
                                ...product,
                                description1: e.target.value,
                              });
                            }
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        name={item.id}
                        label="Giới thiệu 2"
                      >
                        <TextArea
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setProduct({
                                ...product,
                                description2: undefined,
                              });
                            } else {
                              setProduct({
                                ...product,
                                description2: e.target.value,
                              });
                            }
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        hasFeedback
                        name={item.id}
                        label="Giới thiệu 3"
                      >
                        <TextArea
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setProduct({
                                ...product,
                                description3: undefined,
                              });
                            } else {
                              setProduct({
                                ...product,
                                description3: e.target.value,
                              });
                            }
                          }}
                        />
                      </Form.Item>
                      <Form.Item name={item.id} label="Ảnh sản phẩm">
                        <Input
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setProduct({ ...product, image: undefined });
                            } else {
                              setProduct({ ...product, image: e.target.value });
                            }
                          }}
                        />
                      </Form.Item>

                      <Form.Item wrapperCol={{ span: 10, offset: 10 }}>
                        <Button
                          onClick={async () => {
                            await ApiClient.ApiPut(
                              `products/${item.id}`,
                              product,
                              token
                            )
                              .then((res) => {
                                setVisible(false);
                                setData(data);
                                message.success("Sửa thành công!");
                              })
                              .catch((err) => {
                                message.error("Có lỗi xảy ra!");
                              });
                          }}
                          type="primary"
                          htmlType="submit"
                        >
                          Sửa thông thin sản phẩm
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Modal>
                <Button
                  onClick={async () => {
                    await ApiClient.ApiGet(`products/${item._id}`).then(
                      (res) => {
                        data.splice(index, 1);
                        setData(data);
                        history.push();
                        message.success("Xóa thành công!");
                      }
                    );
                  }}
                  danger
                  style={{ margin: 10, width: 120, borderRadius: 25 }}
                >
                  Xoá sản phâmr
                </Button>
              </div>
            </List.Item>
          );
        }}
      />

      <BackTop>
        <div
          style={{
            height: 40,
            width: 50,
            lineHeight: "40px",
            borderRadius: 25,
            backgroundColor: "#1088e9",
            color: "#fff",
            textAlign: "center",
            fontSize: 14,
          }}
        >
          {" "}
          {<UpSquareOutlined />}
        </div>
      </BackTop>
    </div>
  );
};
export default Product;
