class GetUserMedia {
  public constraints: MediaStreamConstraints;

  constructor(constraints?: MediaStreamConstraints) {
    this.constraints = constraints || {
      audio: true,
      video: true
    };
  }

  async getLocalStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        this.constraints
      )
      return stream;
    } catch (error) {
      if (error.name === "PermissionDeniedError") {
        alert(
          "Permissions have not been granted to use your camera and " +
            "microphone, you need to allow the page access to your devices in " +
            "order for the demo to work."
        );
      }
    }
  }
}

export default GetUserMedia;
