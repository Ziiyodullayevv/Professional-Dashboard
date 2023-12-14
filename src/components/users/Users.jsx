import React, { useState } from "react";
import "./sideBar.scss";
import "../../styles/variables.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar } from "antd";
import logo from "../../assets/logo.svg";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
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
          mode="inline"
          style={{
            background: "transparent",
            color: "white",
          }}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Users",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Products",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Clients",
            },
          ]}
        />
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
              size={"medium"}
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
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
        </Content>
      </Layout>
    </Layout>
  );
};
export default SideBar;
