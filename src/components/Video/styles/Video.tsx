import React from "react";
import { Icon } from "antd";
import styled from "styled-components";
import { IconProps } from "antd/lib/icon";

export const WrapperStyled = styled.div`
  position: relative;
  display: flex;

  #list-small-video {
     {
    }
  }
`;

export const SmallVideo = styled.video`
  width: 100%;
`;

export const MainVideo = styled.video`
  width: 100%;
  max-height: 715px;
`;

export const HangupIcon = styled<IconProps>(props => <Icon {...props} />)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: rotate(-135deg);
  font-size: 45px;
  padding: 20px;
  border-radius: 50%;
  background: white;
`;

export const ListSmallVideos = styled.div`
  display: flex;
  width: 400px;

  .small-video {
    width: 200px;
    height: 200px;
  }
`;
