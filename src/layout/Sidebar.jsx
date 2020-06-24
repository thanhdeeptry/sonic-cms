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
    <Sider>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu key="1" icon={<AppstoreOutlined />} title="Sản phẩm">
          <Menu.Item key="2" icon={<MobileOutlined />}>
            <Link to="/home"> Điện thoại</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<LaptopOutlined />}>
            Laptop
          </Menu.Item>
          <Menu.Item key="4" icon={<ApiOutlined />}>
            Phụ kiện
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="5" icon={<AppstoreAddOutlined />}>
          <Link to="/addproduct">Thêm sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<AuditOutlined />}>
          Quản lí hoá đơn
        </Menu.Item>
        <Menu.Item key="8" icon={<LineChartOutlined />}>
          Thống kê doanh thu
        </Menu.Item>

        <Menu.Item key="9" icon={<LogoutOutlined />}>
          <Link to="/">ĐĂNG XUẤT</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default Sidebar;
