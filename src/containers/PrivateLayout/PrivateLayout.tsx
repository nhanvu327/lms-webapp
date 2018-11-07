import React, { useState } from "react";
import { Layout, Icon } from "antd";
import { Menu } from "../../components";
import { MenuTriggerIcon, Logo } from "./styles/PrivateLayout";
const { Header, Content, Footer, Sider } = Layout;

export default function withPrivateLayout(WrappedComponent: any) {
  return () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider collapsible collapsed={collapsed} trigger={null} width={256}>
          <Logo>LOGO - SmartLearning</Logo>
          <Menu />
        </Sider>
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
              minHeight: 280
            }}
          >
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
              <WrappedComponent />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Nhan Vu <Icon type="copyright" theme="outlined" /> {new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    );
  };
}
