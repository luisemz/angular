import express from "express";
import messageControler from "./message.controller";

const API_USER = express.Router();

API_USER.get("/message", messageControler.selectMessage);
API_USER.post("/message", messageControler.createMessage);
API_USER.post("/message/:id", messageControler.updateMessage);

export default API_USER;
