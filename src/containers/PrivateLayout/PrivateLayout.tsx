import React, { useState, useEffect } from "react";
import { Layout, Icon, Drawer, Dropdown, Avatar, Menu as AntdMenu } from "antd";
import localStorage from "../../services/localStorage";
import { LOCALSTORAGE_TOKEN } from "../../constants/app";
import { Menu } from "../../components";
import { MenuTriggerIcon, Logo } from "./styles/PrivateLayout";
const { Header, Content, Footer, Sider } = Layout;

export default function withPrivateLayout(WrappedComponent: any) {
  return () => {
    const [collapsed, setCollapsed] = useState(
      window.innerWidth > 576 ? false : true
    );
    const [isDesktop, setIsDesktop] = useState(
      window.innerWidth > 576 ? true : false
    );
    useEffect(() => {
      const setMobile = () => {
        if (window.innerWidth > 576) {
          setIsDesktop(true);
        } else {
          setIsDesktop(false);
        }
      };
      window.addEventListener("resize", setMobile);

      return () => {
        window.removeEventListener("resize", setMobile);
      };
    }, []);

    const handleLogout = () => {
      localStorage.removeItem(LOCALSTORAGE_TOKEN);
      window.location.href = '/login';
    };
    return (
      <Layout hasSider={isDesktop} style={{ height: "100vh" }}>
        {isDesktop ? (
          <Sider collapsible collapsed={collapsed} trigger={null} width={256}>
            <Logo>LOGO - SmartLearning</Logo>
            <Menu />
          </Sider>
        ) : (
          <Drawer
            placement="left"
            closable={false}
            onClose={() => setCollapsed(true)}
            visible={!collapsed}
          >
            <Menu />
          </Drawer>
        )}
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <MenuTriggerIcon
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={() => setCollapsed(!collapsed)}
            />
            <div style={{ marginRight: "16px" }}>
              <Dropdown
                placement="bottomRight"
                overlay={
                  <AntdMenu>
                    <AntdMenu.Item key="1">
                      <Icon type="user" /> Profile
                    </AntdMenu.Item>
                    <AntdMenu.Item key="2" onClick={handleLogout}>
                      <Icon type="poweroff" /> Log out
                    </AntdMenu.Item>
                  </AntdMenu>
                }
              >
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer"
                  }}
                >
                  U
                </Avatar>
              </Dropdown>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
              overflow: "auto"
            }}
          >
            <div>
              <WrappedComponent />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Nhan Vu <Icon type="copyright" theme="outlined" />{" "}
            {new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    );
  };
}
