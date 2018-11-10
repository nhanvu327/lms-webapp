import React, { useState, useEffect } from "react";
import { Layout, Icon, Drawer } from "antd";
import { Menu } from "../../components";
import { MenuTriggerIcon, Logo } from "./styles/PrivateLayout";
const { Header, Content, Footer, Sider } = Layout;

export default function withPrivateLayout(WrappedComponent: any) {
  return () => {
    const [collapsed, setCollapsed] = useState(window.innerWidth > 576 ? false : true);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 576 ? true : false);
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
          <Header style={{ background: "#fff", padding: 0 }}>
            <MenuTriggerIcon
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={() => setCollapsed(!collapsed)}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
              overflow: 'auto'
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
