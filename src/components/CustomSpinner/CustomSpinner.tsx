import React from "react";
import { Spin } from "antd";
import { Wrapper } from "./styles/CustomSpinner";

interface IProps {
  size?: any;
  isFullScreen?: Boolean;
}

const CustomSpinner = (props: IProps) => (
  <Wrapper isFullScreen={props.isFullScreen}>
    <Spin size={props.size} />
  </Wrapper>
);

CustomSpinner.defaultProps = {
  isFullScreen: false
};

export default CustomSpinner;
