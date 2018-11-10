import React, { StatelessComponent } from "react";
import { Menu as AntdMenu, Icon } from "antd";

interface IProps {}

const Menu: StatelessComponent<IProps> = ({}) => {
  return (
    <AntdMenu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
      <AntdMenu.Item key="1">
        <Icon type="message" />
        <span className="nav-text">Inbox</span>
      </AntdMenu.Item>
      <AntdMenu.Item key="2">
        <Icon type="dashboard" />
        <span className="nav-text">Dashboard</span>
      </AntdMenu.Item>
      <AntdMenu.Item key="3">
        <Icon type="desktop" />
        <span className="nav-text">Open class</span>
      </AntdMenu.Item>
      <AntdMenu.Item key="4">
        <Icon type="team" />
        <span className="nav-text">Manage Classes</span>
      </AntdMenu.Item>
      <AntdMenu.Item key="5">
        <Icon type="calendar" />
        <span className="nav-text">Timetable</span>
      </AntdMenu.Item>
      <AntdMenu.Item key="6">
        <Icon type="setting" />
        <span className="nav-text">Settings</span>
      </AntdMenu.Item>
    </AntdMenu>
  );
};

export default Menu;
