import React, { useState, useEffect } from "react";
import { Table, Badge, Menu, Dropdown, Button } from "antd";
import * as ApiClient from "../helpers/ApiClient";
import Item from "antd/lib/list/Item";
const BillManage = () => {
  const [data, setData] = useState();
  let token = localStorage.getItem("");
  const fetchData = async () => {
    await ApiClient.ApiGet("bills", token).then((res) => {
      setData(res);
    });
  };
  useEffect(() => {
    fetchData();
  }, ...[]);
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Mã sản phẩm",
        render: (record) => {
          return record.map((item) => {
            return <p>{item.id}</p>;
          });
        },
      },
      {
        title: "Tên sản phẩm",
        render: (record) => {
          return record.map((item) => {
            return <p>{item.name}</p>;
          });
        },
      },
      {
        title: "Hình ảnh",
        render: (record) => {
          return record.map((item) => {
            return <img src={item.image} alt="" height={150}></img>;
          });
        },
      },
      {
        title: "Số lượng",
        render: (record) => {
          return record.map((item) => {
            return <p>{item.amount}</p>;
          });
        },
      },
      {
        title: "Tổng tiền",
        render: (record) => {
          return record.map((item) => {
            return <p>{item.to}</p>;
          });
        },
      },
    ];
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: "Mã hóa đơn", dataIndex: "billCode", key: "billCode" },
    { title: "Mã người dùng", dataIndex: "userId", key: "userId" },
    { title: "Số điện thoại", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "Tổng tiền", dataIndex: "upgradeNum", key: "upgradeNum" },
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
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
    />
  );
};
