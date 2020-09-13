import webSocket, { Server as SocketServer, Socket } from "socket.io";
import { Server } from "http";

let IO: SocketServer, SOCKET: Socket;

export default (server: Server) => {
  IO = webSocket(server);

  IO.on("connection", (socket) => {
    SOCKET = socket;
    console.log(`Socket connect: ${SOCKET.id}`);

    SOCKET.on("disconnect", () => {
      console.log(`Socket disconnect: ${SOCKET.id}`);
    });
  });
};

export { IO, SOCKET };
