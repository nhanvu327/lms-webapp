import React from "react";
import { Dropdown, Menu } from "antd";
import { FormattedMessage } from "react-intl";
import { Language } from "../../containers";
import { GlobalIcon, Wrapper } from "./styles/LanguageSwitcher";

interface IProps {
  isFixed?: Boolean;
}

const LanguageSwitcher = (props: IProps) => (
  <Language.Consumer>
    {({ locale, setLocale }) => (
      <Wrapper isFixed={props.isFixed}>
        <Dropdown
          overlay={
            <Menu onClick={e => setLocale(e.key)} selectedKeys={[locale]}>
              <Menu.Item key="vi-VN">
                <FormattedMessage id="VIETNAMESE" />
              </Menu.Item>
              <Menu.Item key="en-US">
                <FormattedMessage id="ENGLISH" />
              </Menu.Item>
            </Menu>
          }
        >
          <GlobalIcon type="global" theme="outlined" />
        </Dropdown>
      </Wrapper>
    )}
  </Language.Consumer>
);

LanguageSwitcher.defaultProps = {
  isFixed: true
};

export default LanguageSwitcher;
