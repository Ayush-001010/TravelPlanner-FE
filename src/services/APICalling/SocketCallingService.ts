import { io, Socket } from "socket.io-client";

export default class SocketCallingService {
  private socket?: Socket;
  private url: string;

  constructor(url = "http://localhost:3000") {
    this.url = url;
  }

  connect(opts = {}) {
    if (!this.socket || !this.socket.connected) {
      this.socket = io(this.url, { autoConnect: true, ...opts });
    }
    return this.socket;
  }

  getSocket() {
    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = undefined;
    }
  }
}
