import React, { useState } from "react";
import "./sideBar.scss";
import "../../styles/variables.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import logo from "../../assets/logo(original).svg";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const location = useLocation();
  const getMenuSelectedKeys = () => {
    // Saqlangan sahifaning path'ini olish
    const pathName = location.pathname;

    if (pathName === "/") return ["1"];
    if (pathName === "/order") return ["2"];
    if (pathName === "/magazine") return ["3"];

    return [];
  };
  // paths:
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <NavLink to={"/"}>Home</NavLink>,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: <NavLink to={"/order"}>Order</NavLink>,
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: <NavLink to={"/magazine"}>Magazine</NavLink>,
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        className={"sider"}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <div className="sider-logo">
          <img
            style={{ width: 40, marginTop: "-6px", marginLeft: "-3px" }}
            src={logo}
            alt="logo"
          />
          {!collapsed ? (
            <span
              style={{
                color: collapsed ? "" : "white",
              }}
              className="logo-title"
            >
              MarketBook
            </span>
          ) : null}
        </div>
        <Menu
          theme="light"
          color="black"
          mode="inline"
          style={{ height: "100%", borderRight: 0, background: "transparent" }}
          defaultSelectedKeys={getMenuSelectedKeys()}
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <div
            onClick={() => setCollapsed(!collapsed)}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: "24px" }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: "24px" }} />
            )}
          </div>
          <div className="header-bar">
            <Avatar
              style={{ background: "white", color: "black" }}
              size="medium"
              icon={<UserOutlined />}
            />
          </div>
        </Header>
        <Content
          className="content"
          style={{
            color: "black",
            overflowY: "auto",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default SideBar;
