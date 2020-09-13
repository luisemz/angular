import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV,
  PORT = process.env.PORT;

export { NODE_ENV, PORT };
