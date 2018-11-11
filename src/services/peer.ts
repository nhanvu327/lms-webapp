import Peer from "peerjs";
import { Modal } from "antd";
import roles from "../constants/roles";
import getUserMedia from "./getUserMedia";

const confirm = Modal.confirm;

class WebRTC {
  private peer_id: String | null;
  private conn: Peer.DataConnection | null;
  private peer: Peer;
  private localStream: any;
  private mainVideoElement: HTMLVideoElement;
  private smallVideoElement: HTMLVideoElement;

  constructor(
    id: string,
    mainVideoElement: HTMLVideoElement,
    smallVideoElement: HTMLVideoElement,
    role: number
  ) {
    const peer = new Peer(id, {
      host: process.env.REACT_APP_IP,
      port: process.env.NODE_ENV === 'development' ? 3001 : 80,
      path: "/peerjs",
      debug: 3,
      secure: true
    });

    this.peer_id = null;
    this.conn = null;
    this.smallVideoElement = smallVideoElement;
    this.mainVideoElement = mainVideoElement;
    try {
      new getUserMedia().getLocalStream().then((localStream: any) => {
        this.localStream = localStream;

        if (role === roles.Teacher) {
          this.mainVideoElement.srcObject = localStream;
        } else {
          this.smallVideoElement.srcObject = localStream;
        }
      });
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
      confirm({
        title: "Do you want to accept this call?",
        content: `${call.metadata.username} is calling...`,
        onOk: () => {
          call.answer(this.localStream);

          let newSmallVideoElement = document.createElement("video");
          newSmallVideoElement.className = "small-video";
          newSmallVideoElement.autoplay = true;

          // Receive data
          call.on("stream", stream => {
            newSmallVideoElement.src = window.URL.createObjectURL(stream);
          });

          const listSmallVideoWrapper = document.getElementById(
            "list-small-video"
          );

          if (listSmallVideoWrapper) {
            listSmallVideoWrapper.appendChild(newSmallVideoElement);
          }

          // Handle when the call finishes
          call.on("close", function() {
            alert("The videocall has finished");
          });
        },
        onCancel: () => {
          alert("Call denied !");
        }
      });
    });

    this.peer = peer;
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
            username
          }
        }
      );

      if (this.conn.open) {
        this.conn.on("data", this.handleMessage);
      }
    } else {
      window.Sentry.captureMessage("There is no peer id");
    }
  }

  call(username: string, peer_id: string) {
    console.log("Calling to " + peer_id);

    const call = this.peer.call(peer_id, this.localStream, {
      metadata: {
        username
      }
    });

    call.on("stream", remoteStream => {
      this.mainVideoElement.src = window.URL.createObjectURL(remoteStream);
    });
  }

  listAllConnections() {
    console.log(this.peer.connections);
  }
}

export default WebRTC;
