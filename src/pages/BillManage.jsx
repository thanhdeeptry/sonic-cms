import React, { useState, useEffect, useContext } from "react";
import { Table, Badge, Menu, Dropdown, Button } from "antd";
import * as ApiClient from "../helpers/ApiClient";
import { AuthContext } from "../contexts";
import Item from "antd/lib/list/Item";
const BillManage = () => {
  const [data, setData] = useState();
  const { state, actions } = useContext(AuthContext);
  let token = state.token;
  const fetchData = async () => {
    await ApiClient.ApiGet("admin/bills", token).then((res) => {
      console.log("res", res);
      setData(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(
    "dataadsdasd",
    data &&
      data.map((item) => {
        return item.products;
      })
  );
  const _data =
    data &&
    data.map((item) => {
      return item.products;
    });
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Mã sản phẩm",
        render: (record) => {
          return <p>{record.id}</p>;
          // console.log(record);
        },
      },
      {
        title: "Tên sản phẩm",
        render: (record) => {
          // return record.map((item) => {
          //   return <p>{item.name}</p>;
          // });
        },
      },
      {
        title: "Hình ảnh",
        render: (record) => {
          // return record.map((item) => {
          //   return <img src={item.image} alt="" height={150}></img>;
          // });
        },
      },
      {
        title: "Số lượng",
        render: (record) => {
          // return record.map((item) => {
          //   return <p>{item.amount}</p>;
          // });
        },
      },
      {
        title: "Giá tiền",
        render: (record) => {
          // return record.map((item) => {
          //   return <p>{item.to}</p>;
          // });
        },
      },
    ];
    return (
      <Table
        rowKey="id"
        columns={columns}
        dataSource={_data}
        pagination={false}
      />
    );
  };

  const columns = [
    { title: "Mã hóa đơn", dataIndex: "billCode", key: "billCode" },
    { title: "Mã người dùng", dataIndex: "userId", key: "userId" },
    { title: "Số điện thoại", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "Ngày đặt hàng", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Trạng thái",
      key: "operation",
      render: (record) => {
        if (record.status === "Processing") {
          return <Button>Processing</Button>;
        }
        if (record.status === "Successful") {
          return <Button disabled={true}>Successful</Button>;
        }
      },
    },
  ];

  return (
    <div>
      <div align="center">
        <b style={{ fontSize: 28 }}>Quản lí hóa đơn</b>
      </div>
      <Table
        rowKey="_id"
        className="components-table-demo-nested"
        columns={columns}
        expandable={{ expandedRowRender }}
        dataSource={data}
      />
    </div>
  );
};
export default BillManage;
