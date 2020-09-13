import { Request, Response } from "express";

import {
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  BAD_REQUEST,
} from "../../utils/httpErrors";
import { getFullDate } from "../../../utils/dateFormats";

const selectMessage = (req: Request, res: Response) => {
  const { page = "1", pageSize = "10" } = req.query;

  res.status(200).json({ ok: true, message: "GET - ALL GOOD!!" });
};

const createMessage = (req: Request, res: Response) => {
  const body = req.body;

  res.status(201).json({ ok: true, from: body.from, to: body.to });
};

const updateMessage = (req: Request, res: Response) => {
  const { id } = req.params,
    body = req.body;

  res.status(200).json({ ok: true, from: body.from, to: body.to, id });
};

export default {
  selectMessage,
  createMessage,
  updateMessage,
};
