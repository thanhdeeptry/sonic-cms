import React from "react";
import "../assets/less/App.less";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MobileOutlined,
  ApiOutlined,
  LaptopOutlined,
  AppstoreAddOutlined,
  AuditOutlined,
  LineChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Sider
      width={242}
      style={{
        // background: "#333132",
        overflow: "auto",
        height: "100vh",
        zIndex: 100,
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu key="1" icon={<AppstoreOutlined />} title="Sản phẩm">
          <Menu.Item key="/home" icon={<MobileOutlined />}>
            <Link to="/home">Tất cả sản phẩm</Link>
          </Menu.Item>
          <Menu.Item key="/phone" icon={<MobileOutlined />}>
            <Link to="/phone">Điện thoại</Link>
          </Menu.Item>
          <Menu.Item key="/laptop" icon={<LaptopOutlined />}>
            <Link to="/laptop">Laptop</Link>
          </Menu.Item>
          <Menu.Item key="/gear" icon={<ApiOutlined />}>
            <Link to="/gear">Phụ kiện</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/addproduct" icon={<AppstoreAddOutlined />}>
          <Link to="/addproduct">Thêm sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="/bill" icon={<AuditOutlined />}>
          <Link to="/bill">Quản lí hóa đơn</Link>
        </Menu.Item>
        <Menu.Item key="/" icon={<LineChartOutlined />}>
          <Link to="/">Thống kê</Link>
        </Menu.Item>

        <Menu.Item key="9" icon={<LogoutOutlined />}>
          <Link to="/login">ĐĂNG XUẤT</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default Sidebar;
