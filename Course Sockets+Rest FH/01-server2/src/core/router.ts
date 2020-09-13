import { Application } from "express";

import { NODE_ENV } from "../config/enviroment";
import debugApp from "../utils/morganDebug";

import messageRouter from "./api/message/message.router";

const API_BASE = "/api";

export default (App: Application) => {
  if (NODE_ENV === "development") {
    App.use(debugApp);
  }
  App.use(`${API_BASE}/`, messageRouter);
};
