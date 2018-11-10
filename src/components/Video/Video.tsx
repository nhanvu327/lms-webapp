import React, { StatelessComponent } from "react";
import { WrapperStyled, MainVideo, SmallVideo, ListSmallVideos } from "./styles/Video";

interface IProps {
  isTeacher: boolean;
  isStudent: boolean;
  handleCall: () => void;
  smallVideoEl: any;
  mainVideoEl: any;
}

const CallingScreen: StatelessComponent<IProps> = ({
  isStudent,
  isTeacher,
  handleCall,
  smallVideoEl,
  mainVideoEl
}) => {
  return (
    <WrapperStyled>
      {isStudent && <button onClick={handleCall}>Calling teacher Nhan</button>}
      {/* <HangupIcon type="phone" theme="filled" /> */}
      <MainVideo autoPlay={true} playsInline={true} muted={isTeacher ? true : false} ref={mainVideoEl} />
      {isTeacher ? (
        <ListSmallVideos id="list-small-video" />
      ) : (
        <SmallVideo muted autoPlay={true} playsInline={true} ref={smallVideoEl} />
      )}
    </WrapperStyled>
  );
};

export default CallingScreen;
