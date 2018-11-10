import React from "react";
import WebRTC from "../../services/peer";
import { Video } from "../../components";
import {
  getProfileSelector,
  getIsTeacherSelector,
  getIsStudentSelector
} from "../../selectors/User/profileSelector";
import { connect, DispatchProp } from "react-redux";
import { AnyAction } from "redux";

interface IProps {
  profile?: any;
  isTeacher: boolean;
  peerId: string;
  isStudent: boolean;
}

class CallingScreenContainer extends React.Component<IProps> {
  private mainVideoEl: any;
  private smallVideoEl: any;
  private webrtc: any;

  constructor(props: IProps & DispatchProp<AnyAction>) {
    super(props);
    this.mainVideoEl = React.createRef();
    this.smallVideoEl = React.createRef();
  }

  componentDidMount() {
    const webrtc = new WebRTC(
      this.props.profile.id,
      this.mainVideoEl.current,
      this.smallVideoEl.current,
      this.props.profile.role
    );
    this.webrtc = webrtc;

    if (this.props.isStudent) {
      webrtc.listAllConnections();
      webrtc.initializeConnection(this.props.profile.name, this.props.peerId); 
    }
  }

  handleCall = (peerId: string) => {
    if (this.props.isStudent) {
      this.webrtc.call(this.props.profile.name, peerId);
    }
  };

  render() {
    const { isTeacher, isStudent, peerId } = this.props;
    return (
      <Video
        isTeacher={isTeacher}
        isStudent={isStudent}
        handleCall={() => this.handleCall(peerId)}
        mainVideoEl={this.mainVideoEl}
        smallVideoEl={this.smallVideoEl}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    profile: getProfileSelector(state),
    isTeacher: getIsTeacherSelector(state),
    isStudent: getIsStudentSelector(state),
    peerId: "11"
  };
};

export default connect(mapStateToProps)(CallingScreenContainer as any);
