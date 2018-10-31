import React from "react";
import CallingScreen from "../../components/CallingScreen/CallingScreen";


interface Props {
}

interface State {}

interface MyProperties {
  videoRef: any
}

class CallingScreenContainer extends React.Component<Props, State> {


  // componentDidMount() {
  //   const getUserMedia = new GetUserMedia(null, this.videoRef.current);
  //   getUserMedia.init();
  // }

  render() {
    return (
      <div>
        {/* <CallingScreen videoRef={this.videoRef} with="100%" height="auto" /> */}
      </div>
    );
  }
}

export default CallingScreenContainer;
