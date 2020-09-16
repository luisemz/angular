import webSocket, { Server as SocketServer, Socket } from "socket.io";
import { Server } from "http";

export default (server: Server) => {
  const IO = webSocket(server);

  IO.on("connection", (client) => {
    console.log(`Socket connect: ${client.id}`);

    message(client, IO);
    disconnect(client);
  });
};

const message = (client: Socket, io: SocketServer) => {
  client.on("message", (payload: { from: string; message: string }) => {
    console.log("Message recived:", payload);

    io.emit("new-message", payload);
  });
};

const disconnect = (client: Socket) => {
  client.on("disconnect", () => {
    console.log(`Socket disconnect: ${client.id}`);
  });
};

export { message, disconnect };
