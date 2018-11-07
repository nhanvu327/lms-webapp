import React from "react";
import WebRTC from "../../services/peer";
import { connect } from "react-redux";

interface IProps {
  profile: any;
}

class CallingScreenContainer extends React.Component<IProps> {
  private localVideoEl: any;
  private remoteVideoEl: any;
  private webrtc: any;

  constructor(props: IProps) {
    super(props);
    this.localVideoEl = React.createRef();
    this.remoteVideoEl = React.createRef();
  }

  componentDidMount() {
    const webrtc = new WebRTC(
      this.props.profile.id,
      this.remoteVideoEl.current,
      this.localVideoEl.current
    );
    this.webrtc = webrtc;
  }

  handleCall = (peerId: string) => {
    this.webrtc.initializeConnection(this.props.profile.name, peerId);
    this.webrtc.call(peerId);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleCall("11")}>Calling Nhan</button>
        <video autoPlay={true} muted ref={this.localVideoEl} />
        <video autoPlay={true} ref={this.remoteVideoEl} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    profile: state.User.profile
  };
};

export default connect(mapStateToProps)(CallingScreenContainer);
