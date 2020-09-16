import express from "express";
import socketIo from "socket.io";
import http from "http";

import { SERVER_PORT } from "../global/enviroment";

import * as socket from "../sockets/socket";

export default class Server {
  private httpServer: http.Server;
  private static _instance: Server;

  public app: express.Application;
  public port: number;
  public io: socketIo.Server;

  private constructor() {
    this.port = SERVER_PORT;
    this.app = express();
    this.httpServer = new http.Server(this.app);
    this.io = socketIo(this.httpServer);

    this.listenSockets();
  }

  private listenSockets = () => {
    console.log("Listening sockets!!!");
    this.io.on("connection", (client) => {
      console.log(`Socket connect: ${client.id}`);

      socket.message(client, this.io);
      socket.disconnect(client);
    });
  };

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  start = (callback: Function) => {
    this.httpServer.listen(this.port, callback);
  };
}
