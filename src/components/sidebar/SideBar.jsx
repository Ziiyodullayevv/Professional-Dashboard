import React, { useState } from "react";
import "./sideBar.scss";
import "../../styles/variables.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Avatar } from "antd";
import logo from "../../assets/logo.svg";
import { Outlet, Link, useLocation } from "react-router-dom";
import { data } from "../../utils/data.jsx";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const location = useLocation();
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
                color: collapsed ? null : "white",
              }}
              className="logo-title"
            >
              MarketBook
            </span>
          ) : null}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={1}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0, background: "transparent" }}
        >
          {data.map(
            ({ id, label, icon, path, hidden }) =>
              !hidden && (
                <Menu.Item
                  className={`menu-item ${
                    location.pathname === path ? "active" : ""
                  }`}
                  key={id}
                  icon={icon}
                >
                  <Link to={path}>{label}</Link>
                </Menu.Item>
              ),
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined style={{ fontSize: "24px" }} />
              ) : (
                <MenuFoldOutlined style={{ fontSize: "24px" }} />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              width: 50,
              height: 50,
            }}
          />
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
            color: "white",
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
