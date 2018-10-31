class GetUserMedia {

  public constraints: MediaStreamConstraints
  public videoElement: HTMLVideoElement

  constructor(constraints: MediaStreamConstraints, videoElement: HTMLVideoElement) {
    this.constraints = constraints || {
      audio: false,
      video: true
    };

    this.videoElement = videoElement;
  }

  async init() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        this.constraints
      );
      const videoTracks = stream.getVideoTracks();
      this.videoElement.srcObject = stream;
    } catch (error) {
      // if (error.name === "ConstraintNotSatisfiedError") {
      //   let v = this.constraints.video;
      //   alert(
      //     `The resolution ${v.width.exact}x${
      //       v.height.exact
      //     } px is not supported by your device.`
      //   );
      // } else if (error.name === "PermissionDeniedError") {
      //   alert(
      //     "Permissions have not been granted to use your camera and " +
      //       "microphone, you need to allow the page access to your devices in " +
      //       "order for the demo to work."
      //   );
      // }
    }
  }
}

export default GetUserMedia;
