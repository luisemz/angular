import { Response } from "express";

const BAD_REQUEST = (res: Response, message: string) => {
  res.status(400).json({
    error: "BadRequest",
    message: message,
    status: 400
  });
};

const UNAUTHORIZED = (res: Response, message: string) => {
  res.status(401).json({
    error: "Unautohrized",
    message: message,
    status: 401
  });
};

const NOT_FOUND = (res: Response, message: string) => {
  res.status(404).json({
    error: "NotFound",
    message: message,
    status: 404
  });
};

const INTERNAL_SERVER_ERROR = (res: Response, message: string) => {
  res.status(500).json({
    error: "InternalServerError",
    message: message,
    status: 500
  });
};

export { BAD_REQUEST, UNAUTHORIZED, NOT_FOUND, INTERNAL_SERVER_ERROR };
