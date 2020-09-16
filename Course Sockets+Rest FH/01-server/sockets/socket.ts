import { Socket, Server } from "socket.io";

export const disconnect = (client: Socket) => {
  client.on("disconnect", () => {
    console.log(`Socket disconnect: ${client.id}`);
  });
};

export const message = (client: Socket, io: Server) => {
  client.on("message", (payload: { from: string; message: string }) => {
    console.log("Message recived:", payload);
    io.emit("new-message", payload);
  });
};
