import bodyParser from "body-parser";
import cors from "cors";

import Server from "./classes/server";
import ROUTER from "./routes/router";

const SERVER = new Server();

SERVER.app.use(bodyParser.urlencoded({ extended: true }));
SERVER.app.use(bodyParser.json());

SERVER.app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

SERVER.app.use("/", ROUTER);

SERVER.start(() => {
  console.log(`Server running on: ${SERVER.port}`);
});
