import React from "react";
import { WrapperStyled } from "./styles/CallingScreen";

interface Props {
  videoRef: any
}

class CallingScreen extends React.PureComponent<Props> {
  render() {
    return (
      <WrapperStyled>
        <video ref={this.props.videoRef} autoPlay playsInline />
      </WrapperStyled>
    );
  }
}

export default CallingScreen;
