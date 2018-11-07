import Peer from "peerjs";
import getUserMedia from "./getUserMedia";

class WebRTC {
  private peer_id: String | null;
  private conn: Peer.DataConnection | null;
  private peer: Peer;
  private localStream: any;
  private remoteVideoElement: HTMLVideoElement;
  private localVideoElement: HTMLVideoElement;

  constructor(id: string, remoteVideoElement: HTMLVideoElement, localVideoElement: HTMLVideoElement) {
    const peer = new Peer(id, {
      host: "192.168.0.108",
      port: 3001,
      path: "/peerjs",
      debug: 3
    });

    this.peer_id = null;
    this.conn = null;
    this.remoteVideoElement = remoteVideoElement;
    this.localVideoElement = localVideoElement;
    try {
      new getUserMedia().getLocalStream().then((localStream: any) => {
        this.localStream = localStream
        this.localVideoElement.srcObject = localStream;
        console.log(remoteVideoElement, this.localVideoElement, this.localStream, ' this.localVideoElement');
      })
    } catch (e) {
      this.localStream = null;
    }

    peer.on("open", function(id) {
      console.log("My ID is:" + id);
    });

    peer.on("connection", connection => {
      this.conn = connection;
      this.peer_id = connection.peer;
      console.log("Peer id is calling: " + this.peer_id);
    });

    peer.on("error", function(err) {
      alert("An error ocurred with peer: " + err);
      console.error(err);
    });

    peer.on("call", call => {
      const acceptsCall = confirm(
        "Videocall incoming, do you want to accept it ?"
      );

      if (acceptsCall) {
        // Answer the call with your own video/audio stream
        call.answer(this.localStream);

        // Receive data
        call.on("stream", stream => {
          // Display the stream of the other user in the peer-camera video element !
          this.onReceiveStream(stream, remoteVideoElement);
        });

        // Handle when the call finishes
        call.on("close", function() {
          alert("The videocall has finished");
        });

        // use call.close() to finish a call
      } else {
        alert("Call denied !");
      }
    });

    this.peer = peer;
  }

  onReceiveStream(remoteStream: any, videoElement: HTMLVideoElement) {
    videoElement.src = window.URL.createObjectURL(remoteStream);
  }

  handleMessage(data: any) {
    console.log(data, "handleMessage");
  }

  initializeConnection(username: String, peer_id: string) {
    if (peer_id) {
      this.conn = this.peer.connect(
        peer_id,
        {
          metadata: {
            username: username
          }
        }
      );

      this.conn.on("data", this.handleMessage);
    } else {
      alert("You need to provide a peer to connect with !");
      return false;
    }
  }

  call(peer_id: string) {
    console.log("Calling to " + peer_id);

    var call = this.peer.call(peer_id, this.localStream);

    call.on("stream", remoteStream => {
      this.onReceiveStream(remoteStream, this.remoteVideoElement);
    });
  }
}

export default WebRTC;
